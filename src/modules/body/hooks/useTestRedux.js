import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {
    getTestConfig,
    getTestResult,
    getTestQuestions,
    getTestDifficulty,
    getTestName,
    getCurrentTest,
    hasTestResult,
} from '../selectors/testSelectors';
import { startTestConfig, resetTestConfig } from '../actions/startTest';
import { dispatchResult, dispatchResetResult, finishTest } from '../actions/actionResult';

/**
 * Хук для работы с Redux состоянием теста
 */
export const useTestRedux = () => {
    const dispatch = useDispatch();

    // Селекторы
    const testConfig = useSelector(getTestConfig);
    const testResult = useSelector(getTestResult);
    const questions = useSelector(getTestQuestions);
    const difficulty = useSelector(getTestDifficulty);
    const testName = useSelector(getTestName);
    const currentTest = useSelector(getCurrentTest);
    const hasResult = useSelector(hasTestResult);

    // Actions
    const setTestConfig = useCallback(
        (config) => dispatch(startTestConfig(config)),
        [dispatch]
    );

    const resetConfig = useCallback(
        () => dispatch(resetTestConfig()),
        [dispatch]
    );

    const submitResult = useCallback(
        (result) => dispatch(dispatchResult(result)),
        [dispatch]
    );

    const resetResult = useCallback(
        () => dispatch(dispatchResetResult()),
        [dispatch]
    );

    const completeTest = useCallback(
        (result, options) => dispatch(finishTest(result, options)),
        [dispatch]
    );

    return {
        // State
        testConfig,
        testResult,
        questions,
        difficulty,
        testName,
        currentTest,
        hasResult,

        // Actions
        setTestConfig,
        resetConfig,
        submitResult,
        resetResult,
        completeTest,
    };
};