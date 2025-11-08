import { createSelector } from '@reduxjs/toolkit';

// Базовые селекторы
export const selectTest = (state) => state.test;
export const selectTestConfig = (state) => state.testConfig;
export const selectResult = (state) => state.result;

// Мемоизированные селекторы для test
export const selectTestNow = createSelector(
    [selectTest],
    (test) => test.testNow
);

export const selectIsTestSelected = createSelector(
    [selectTestNow],
    (testNow) => testNow !== 'Выберите тест'
);

// Мемоизированные селекторы для testConfig
export const selectStartTestConfig = createSelector(
    [selectTestConfig],
    (config) => config.startTestConfig
);

export const selectTimerID = createSelector(
    [selectTestConfig],
    (config) => config.startTestConfigTimerID
);

export const selectIsTestConfigValid = createSelector(
    [selectStartTestConfig],
    (config) => {
        if (!config) return false;
        return config.optionTest?.validDif && config.optionTest?.validTest;
    }
);

export const selectTestQuestions = createSelector(
    [selectStartTestConfig],
    (config) => config?.optionTest?.questions || []
);

export const selectTestDifficulty = createSelector(
    [selectStartTestConfig],
    (config) => config?.optionTest?.diffical
);

export const selectTestName = createSelector(
    [selectStartTestConfig],
    (config) => config?.nameTest
);

export const selectTestDescription = createSelector(
    [selectStartTestConfig],
    (config) => config?.descTest
);

export const selectIsTimerEnabled = createSelector(
    [selectStartTestConfig],
    (config) => !config?.optionTest?.timer
);

// Мемоизированные селекторы для result
export const selectResultTest = createSelector(
    [selectResult],
    (result) => result.resultTest
);

export const selectHasResult = createSelector(
    [selectResultTest],
    (result) => result !== null
);

// Комбинированные селекторы
export const selectTestState = createSelector(
    [selectTestNow, selectStartTestConfig, selectResultTest],
    (testNow, config, result) => ({
        testNow,
        config,
        result,
        isConfigured: config !== null,
        hasResult: result !== null,
    })
);