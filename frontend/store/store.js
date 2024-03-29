import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(thunk, logger)))
);

export default configureStore;