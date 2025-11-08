/**
 * Типы ошибок валидации
 */
export const ValidationErrors = {
    NO_DIFFICULTY: 'NO_DIFFICULTY',
    NO_TEST: 'NO_TEST',
};

/**
 * Валидирует выбор сложности
 * @param {string} difficulty - Выбранная сложность
 * @returns {object} Результат валидации
 */
export const validateDifficulty = (difficulty) => {
    const isValid = Boolean(difficulty);
    
    return {
        isValid,
        error: isValid ? null : ValidationErrors.NO_DIFFICULTY,
        message: isValid ? '' : 'Выберите сложность!',
    };
};

/**
 * Валидирует выбор теста
 * @param {string} testName - Название теста
 * @returns {object} Результат валидации
 */
export const validateTestSelection = (testName) => {
    const isValid = Boolean(testName) && testName !== 'Выберите тест';
    
    return {
        isValid,
        error: isValid ? null : ValidationErrors.NO_TEST,
        message: isValid ? '' : 'Выберите тест!',
    };
};

/**
 * Валидирует всю конфигурацию теста
 * @param {object} config - Конфигурация теста
 * @returns {object} Результат валидации
 */
export const validateTestConfig = (config) => {
    const { difficulty, testName } = config;
    
    const difficultyValidation = validateDifficulty(difficulty);
    const testValidation = validateTestSelection(testName);
    
    const isValid = difficultyValidation.isValid && testValidation.isValid;
    
    return {
        isValid,
        errors: {
            difficulty: difficultyValidation.error,
            test: testValidation.error,
        },
        messages: {
            difficulty: difficultyValidation.message,
            test: testValidation.message,
        },
    };
};