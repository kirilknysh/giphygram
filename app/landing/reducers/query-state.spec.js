import { changeQuery, requestNextPage } from '../actions/query-actions';

import reducer from './query-state';

describe('query-state reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            query: '',
            page: 0,
        });
    });

    it('should change query on QUERY_CHANGE action', () => {
        const query = 'look for smth';

        expect(reducer(undefined, changeQuery(query))).toEqual({
            query,
            page: 0,
        });
    });

    it('should increment page number on every REQUEST_NEXT_PAGE action', () => {
        let state = reducer(undefined, changeQuery('query'));
        expect(state.page).toEqual(0);

        state = reducer(state, requestNextPage());
        expect(state.page).toEqual(1);

        state = reducer(state, requestNextPage());
        expect(state.page).toEqual(2);
    });

    it('should reset page to `0` on every new QUERY_CHANGE action', () => {
        let state = reducer(undefined, changeQuery('query'));
        state = reducer(state, requestNextPage());
        state = reducer(state, requestNextPage());
        expect(state.page).toEqual(2);

        state = reducer(state, changeQuery('new query'));
        expect(state.page).toEqual(0);
    });
});
