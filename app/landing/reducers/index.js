import { combineReducers } from 'redux';

import viewState from './view-state';
import queryState from './query-state';
import dataState from './data-state';

export default combineReducers({
    viewState,
    queryState,
    dataState,
});
