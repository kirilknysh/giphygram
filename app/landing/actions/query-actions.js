import { createAction } from 'redux-actions';

export const QUERY_CHANGE = 'QUERY_CHANGE';
export const changeQuery = createAction(QUERY_CHANGE);

export const HASH_CHANGE = 'HASH_CHANGE';
export const changeHash = createAction(HASH_CHANGE);

export const REQUEST_NEXT_PAGE = 'REQUEST_NEXT_PAGE';
export const requestNextPage = createAction(REQUEST_NEXT_PAGE);
