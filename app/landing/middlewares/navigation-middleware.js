import { QUERY_CHANGE, changeHash, changeQuery } from '../actions/query-actions';

function getHash(hash) {
    if (hash) {
        hash = hash.substring(1);
        hash = decodeURIComponent(hash);
    }

    return hash;
}

function handleQueryChange(query) {
    window.location.hash = query;
}

function initializeNavigation(dispatch) {
    window.addEventListener('hashchange', (event) => {
        const query = getHash(window.location.hash);

        dispatch(changeQuery(query));
        dispatch(changeHash(query));
    });

    return getHash(window.location.hash);
}

function handleAction(action, dispatch, getState) {
    switch (action.type) {
        case QUERY_CHANGE:
            return handleQueryChange(action.payload);
        default:
            return;
    }
}

export default function navigationMiddleware({ getState, dispatch }) {
    const initialQuery = initializeNavigation(dispatch);

    //
    setTimeout(() => {
        dispatch(changeQuery(initialQuery));
        dispatch(changeHash(initialQuery));
    });

    return next => action => {
        next(action);

        handleAction(action, dispatch, getState);
    };
}
