import { CLEAR_ITEMS, APPEND_ITEMS, FETCH_ERROR } from '../actions/data-fetch-actions';

const defaultState = {
    items: [],
    hasMore: true,
    error: null,
};

function clearItems(state) {
    return Object.assign({}, state, {
        items: [],
        hasMore: true,
        error: null,
    });
}

function appendItems(state, items) {
    return Object.assign({}, state, {
        items: [...state.items, ...items],
        hasMore: items.length > 0,
        error: null,
    });
}

function handleError(state, error) {
    return Object.assign({}, state, {
        error: error.message,
    });
}

export default function viewState(state = defaultState, action) {
    switch(action.type) {
        case CLEAR_ITEMS:
            return clearItems(state, action.payload);
        case APPEND_ITEMS:
            return appendItems(state, action.payload);
        case FETCH_ERROR:
            return handleError(state, action.payload);
        default:
            return state;
    }
}
