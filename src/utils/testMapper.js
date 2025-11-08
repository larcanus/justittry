/**
 * Маппинг ID тестов на их названия
 */
export const TEST_NAMES = {
    'js-test-logo': 'Тест на знание языка JavaScript',
    'html-test-logo': 'Тест на знание языка HTML',
    'dart-test-logo': 'Тест на знание языка DART',
    'php-test-logo': 'Тест на знание языка PHP',
};

/**
 * Получить название теста по ID
 * @param {string} testId - ID теста
 * @returns {string} - Название теста
 */
export const getTestName = (testId) => {
    return TEST_NAMES[testId] || 'Выберите тест';
};

/**
 * Проверить, является ли ID валидным тестом
 * @param {string} testId - ID теста
 * @returns {boolean}
 */
export const isValidTestId = (testId) => {
    return testId in TEST_NAMES;
};