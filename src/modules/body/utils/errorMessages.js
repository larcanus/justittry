/**
 * Сообщения об ошибках валидации теста
 */
export const ERROR_MESSAGES = {
    NO_DIFFICULTY: 'Выберите уровень сложности!',
    NO_TEST: 'Выберите тест!',
    NO_QUESTIONS: 'Не удалось загрузить вопросы для выбранного теста',
    INVALID_CONFIG: 'Неверная конфигурация теста',
};

/**
 * Получить текст ошибки по коду
 * @param {string} errorCode - Код ошибки
 * @returns {string} Текст ошибки
 */
export const getErrorMessage = (errorCode) => {
    return ERROR_MESSAGES[errorCode] || errorCode;
};