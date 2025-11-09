import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../common/rootReducer';
import thunk from 'redux-thunk';
import loggerMiddleware from './middleware/loggerMiddleware';
import errorMiddleware from './middleware/errorMiddleware';

// Redux DevTools Extension
const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

// Middleware chain
const middleware = [
    thunk,
    errorMiddleware,
];

// Добавляем logger только в development
if (process.env.NODE_ENV === 'development') {
    middleware.push(loggerMiddleware);
}

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;
