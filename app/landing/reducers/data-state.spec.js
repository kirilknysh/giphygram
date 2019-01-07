import { appendItems, clearItems, fetchError } from '../actions/data-fetch-actions';

import reducer from './data-state';

describe('data-state reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            items: [],
            hasMore: true,
            error: null,
        });
    });

    it('should append new items to existin on APPEND_ITEMS action', () => {
        const items = [{ id: 0 }, { id: 1 }];
        const withItems = reducer(undefined, appendItems(items));

        expect(withItems.items).toEqual(items);

        const newItems = [{ id: 2 }, { id: 42 }];

        expect(reducer(withItems, appendItems(newItems)).items).toEqual([...items, ...newItems]);
    });

    it('should clear items on CLEAR_ITEMS action', () => {
        const withItems = reducer(undefined, appendItems([{ id: 0 }, { id: 1 }]));

        expect(reducer(withItems, clearItems())).toEqual({
            items: [],
            hasMore: true,
            error: null,
        });
    });

    it('should set error on FETCH_ERROR action', () => {
        const error = new Error('Some fetch error');

        expect(reducer(undefined, fetchError(error))).toEqual({
            items: [],
            hasMore: true,
            error,
        });
    });

    it('should clear error in case of successful fetch', () => {
        const withError = reducer(undefined, fetchError(new Error('Another fetch error')));

        expect(reducer(withError, appendItems([{ id: 0 }, { id: 1 }])).error).toEqual(null);
    });

    it('should clear error on CLEAR_ITEMS action', () => {
        const withError = reducer(undefined, fetchError(new Error('Another fetch error 2')));

        expect(reducer(withError, clearItems()).error).toEqual(null);
    });

    it('should set hasMore to `false` if the last page has been fetched (trying to add empty items)', () => {
        expect(reducer(undefined, appendItems([])).hasMore).toEqual(false);
    });
});
