import { useState, useCallback, useEffect } from 'react';
import { generateRandomQuestions, extractShortTestName } from '../utils/questionGenerator';
import { validateTestConfig } from '../utils/testConfigValidator';

/**
 * Хук для управления конфигурацией теста
 * @param {object} testData - Данные всех тестов
 * @param {string} currentTestName - Текущий выбранный тест
 * @returns {object} Состояние и методы конфигурации
 */
export const useTestConfiguration = (testData, currentTestName) => {
    const [difficulty, setDifficulty] = useState('');
    const [withoutTimer, setWithoutTimer] = useState(false);
    const [validationErrors, setValidationErrors] = useState({
        difficulty: null,
        test: null,
    });

    /**
     * Очищает ошибку валидации теста при изменении выбранного теста
     */
    useEffect(() => {
        if (currentTestName) {
            setValidationErrors(prev => ({ ...prev, test: null }));
        }
    }, [currentTestName]);

    /**
     * Обработчик изменения сложности
     */
    const handleDifficultyChange = useCallback((value) => {
        setDifficulty(value);
        setValidationErrors(prev => ({ ...prev, difficulty: null }));
    }, []);

    /**
     * Обработчик изменения опции таймера
     */
    const handleTimerToggle = useCallback((checked) => {
        setWithoutTimer(checked);
    }, []);

    /**
     * Создает конфигурацию теста
     */
    const createTestConfig = useCallback(() => {
        const validation = validateTestConfig({
            difficulty,
            testName: currentTestName,
        });

        if (!validation.isValid) {
            setValidationErrors(validation.errors);
            return null;
        }

        const shortTestName = extractShortTestName(currentTestName);
        const questions = generateRandomQuestions(
            testData[shortTestName],
            difficulty,
            20
        );

        if (questions.length === 0) {
            console.error('Не удалось сгенерировать вопросы');
            return null;
        }

        return {
            nameTest: shortTestName,
            descTest: currentTestName,
            optionTest: {
                diffical: difficulty,
                timer: withoutTimer,
                questions,
                validDif: true,
                validTest: true,
            },
        };
    }, [difficulty, currentTestName, withoutTimer, testData]);

    /**
     * Сбрасывает конфигурацию
     */
    const resetConfiguration = useCallback(() => {
        setDifficulty('');
        setWithoutTimer(false);
        setValidationErrors({ difficulty: null, test: null });
    }, []);

    return {
        difficulty,
        withoutTimer,
        validationErrors,
        handleDifficultyChange,
        handleTimerToggle,
        createTestConfig,
        resetConfiguration,
    };
};
