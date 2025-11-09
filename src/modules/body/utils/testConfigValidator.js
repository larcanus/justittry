import { ERROR_MESSAGES } from "./errorMessages";
import log from "eslint-plugin-react/lib/util/log";

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
 * Валидирует конфигурацию теста перед запуском
 * @param {Object} config - Конфигурация теста
 * @param {string} config.difficulty - Уровень сложности
 * @param {string} config.testName - Название теста
 * @returns {Object} Результат валидации
 */
export const validateTestConfig = (config) => {
    const errors = {
        difficulty: null,
        test: null,
    };

    let isValid = true;

    // Проверка уровня сложности
    if (!config.difficulty || config.difficulty.trim() === '') {
        errors.difficulty = ERROR_MESSAGES.NO_DIFFICULTY;
        isValid = false;
    }

    // Проверка выбора теста
    if ( config.testName === 'Выберите тест' || !config.testName || config.testName.trim() === '') {
        errors.test = ERROR_MESSAGES.NO_TEST;
        isValid = false;
    }

    return {
        isValid,
        errors,
    };
};

/**
 * Проверяет, есть ли ошибки валидации
 * @param {Object} errors - Объект с ошибками
 * @returns {boolean} true если есть ошибки
 */
export const hasValidationErrors = (errors) => {
    if (!errors || typeof errors !== 'object') {
        return false;
    }

    return Object.values(errors).some(error => error !== null && error !== '');
};
