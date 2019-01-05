import { applyMiddleware, createStore } from "redux";// add `applyMiddleware` import
import logger from 'redux-logger' // add `redux-logger` import 
import { rootReducer } from './reducers'

import thunk from 'redux-thunk';

export const store = createStore<any,any,any,any>(rootReducer,
    applyMiddleware(logger, thunk) // add `applyMiddleware()` as second parameter
);