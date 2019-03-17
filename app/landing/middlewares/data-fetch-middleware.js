import { QUERY_CHANGE, REQUEST_NEXT_PAGE, HASH_CHANGE } from '../actions/query-actions';
import { appendItems, clearItems, fetchError } from '../actions/data-fetch-actions';

import { fetchData } from '../services/giphy-service';

function fetchGiphy(dispatch, getState) {
    const { query, page } = getState().queryState;

    if (!query) {
        // empty query, nothing to fetch
        return;
    }

    fetchData(query, page).then((items) => {
        const { query: currentQuery } = getState().queryState;

        if (currentQuery !== query) {
            // ignore "late" response
            return;
        }

        dispatch(appendItems(items));
    }).catch((error) => {
        dispatch(fetchError(error));
    });
}

function handleQueryChange(dispatch, getState) {
    dispatch(clearItems());

    fetchGiphy(dispatch, getState);
}

function handleNextPageRequest(dispatch, getState) {
    fetchGiphy(dispatch, getState);
}

function handleAction(action, dispatch, getState) {
    switch (action.type) {
        // case QUERY_CHANGE:
        //     return handleQueryChange(dispatch, getState);
        case HASH_CHANGE:
            return handleQueryChange(dispatch, getState);
        case REQUEST_NEXT_PAGE:
            return handleNextPageRequest(dispatch, getState);
        default:
            return;
    }
}

export default function dataFetchMiddleware({ getState, dispatch }) {
    return next => action => {
        next(action);

        handleAction(action, dispatch, getState);
    };
}
