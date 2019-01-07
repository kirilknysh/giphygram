import { createAction } from 'redux-actions';

export const APPEND_ITEMS = 'APPEND_ITEMS';
export const appendItems = createAction(APPEND_ITEMS);

export const CLEAR_ITEMS = 'CLEAR_ITEMS';
export const clearItems = createAction(CLEAR_ITEMS);

export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = createAction(FETCH_ERROR);
