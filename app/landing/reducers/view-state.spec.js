import { switchGridViewColumns } from '../actions/view-actions';

import reducer from './view-state';

describe('view-state reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            multiColumn: true,
        });
    });

    it('should switch multiColumn on every SWITCH_GRID_VIEW_COLUMNS action', () => {
        let state = reducer(undefined, {});
        expect(state.multiColumn).toEqual(true);

        state = reducer(state, switchGridViewColumns());
        expect(state.multiColumn).toEqual(false);

        state = reducer(state, switchGridViewColumns());
        expect(state.multiColumn).toEqual(true);
    });
});
