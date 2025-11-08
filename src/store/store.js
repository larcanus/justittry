import { configureStore } from '@reduxjs/toolkit';
import testReducer from './slices/testSlice';
import testConfigReducer from './slices/testConfigSlice';
import resultReducer from './slices/resultSlice';

const store = configureStore({
    reducer: {
        test: testReducer,
        testConfig: testConfigReducer,
        result: resultReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Игнорируем проверку для timerID, так как это может быть функция
                ignoredActions: ['testConfig/startTestConfigTimer'],
                ignoredPaths: ['testConfig.startTestConfigTimerID'],
            },
        }),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
