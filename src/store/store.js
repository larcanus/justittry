import {createStore, applyMiddleware } from 'redux';
import {rootReducer} from '../common/rootReducer';
import thunk from 'redux-thunk';

export default createStore(rootReducer, applyMiddleware(thunk));