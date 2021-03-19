import {combineReducers} from 'redux';
import reducerTest from '../modules/header/reducers/reducerTest';
import reducerConfigtest from '../modules/body/reducers/reducerConfigtest';
import reducerResultTest from '../modules/body/reducers/reducerResultTest';
import reducerLogin from '../modules/header/reducers/reducerLogin';

export const rootReducer = combineReducers({
    test: reducerTest,
    testConfig: reducerConfigtest,
    result: reducerResultTest,
    login: reducerLogin,
})
