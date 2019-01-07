import { QUERY_CHANGE, REQUEST_NEXT_PAGE } from '../actions/query-actions';

const defaultState = {
    query: '',
    page: 0,
};

function changeQuery(state, query) {
    return Object.assign({}, state, {
        query,
        page: 0,
    });
}

function requestNextPage(state) {
    return Object.assign({}, state, {
        page: state.page + 1,
    })
}

export default function viewState(state = defaultState, action) {
    switch(action.type) {
        case QUERY_CHANGE:
            return changeQuery(state, action.payload);
        case REQUEST_NEXT_PAGE:
            return requestNextPage(state);
        default:
            return state;
    }
}
