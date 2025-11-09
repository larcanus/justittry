/**
 * Селекторы для работы с состоянием тестов
 */
// Базовые селекторы
export const getTestConfig = (state) => state.testConfig.startTestConfig;
export const getTimerID = (state) => state.testConfig.startTestConfigTimerID;
export const getTestResult = (state) => state.result.resultTest;
export const getCurrentTest = (state) => state.test.testNow;

export const getTestQuestions = (state) => {
    const config = getTestConfig(state);
    return config?.optionTest?.questions || [];
};

export const getTestDifficulty = (state) => {
    const config = getTestConfig(state);
    return config?.optionTest?.diffical || '';
};

export const getTestName = (state) => {
    const config = getTestConfig(state);
    return config?.nameTest || '';
};

export const getTestDescription = (state) => {
    const config = getTestConfig(state);
    return config?.descTest || '';
};

export const isTimerEnabled = (state) => {
    const config = getTestConfig(state);
    return !config?.optionTest?.timer;
};

export const isTestConfigValid = (state) => {
    const config = getTestConfig(state);
    return config?.optionTest?.validDif && config?.optionTest?.validTest;
};

export const hasTestResult = (state) => {
    return getTestResult(state) !== null;
};

export const getTestAnswers = (state) => {
    const result = getTestResult(state);
    return result?.answers || [];
};
