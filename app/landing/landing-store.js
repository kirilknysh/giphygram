import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';

import dataFetchMiddleware from './middlewares/data-fetch-middleware';
import navigationMiddleware from './middlewares/navigation-middleware';

const middlewares = [dataFetchMiddleware, navigationMiddleware];

if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger'); // eslint-disable-line global-require

    middlewares.push(logger);
}

const store = createStore(reducer, applyMiddleware(...middlewares));

if (process.env.NODE_ENV === 'development') {
    window.store = store;
}

export default store;
