import { SWITCH_GRID_VIEW_COLUMNS } from '../actions/view-actions';

const defaultState = {
    multiColumn: true,
};

function swtichGridView(state) {
    return Object.assign({}, state, {
        multiColumn: !state.multiColumn,
    })
}

export default function viewState(state = defaultState, action) {
    switch(action.type) {
        case SWITCH_GRID_VIEW_COLUMNS:
            return swtichGridView(state);
        default:
            return state;
    }
}
