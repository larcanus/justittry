/**
 * Генерирует массив уникальных случайных чисел
 * @param {number} count - Количество чисел
 * @param {number} max - Максимальное значение
 * @returns {number[]} Массив уникальных чисел
 */
const generateUniqueRandomNumbers = (count, max) => {
    const numbers = new Set();

    while (numbers.size < count) {
        const randomNum = Math.floor(Math.random() * max);
        numbers.add(randomNum);
    }

    return Array.from(numbers);
};

/**
 * Генерирует случайные вопросы для теста
 * @param {object} testData - Данные теста
 * @param {string} difficulty - Уровень сложности
 * @param {number} questionCount - Количество вопросов
 * @returns {Array} Массив вопросов
 */
export const generateRandomQuestions = (testData, difficulty, questionCount = 20) => {
    if (!testData || !difficulty) {
        return [];
    }

    const questions = testData[difficulty];

    if (!questions || questions.length === 0) {
        console.error('Вопросы не найдены для выбранной сложности');
        return [];
    }

    const maxQuestions = Math.min(questionCount, questions.length);
    const randomIndices = generateUniqueRandomNumbers(maxQuestions, questions.length);

    return randomIndices.map(index => questions[index]);
};

/**
 * Извлекает короткое имя теста
 * @param {string} fullTestName - Полное название теста
 * @returns {string} Короткое имя
 */
export const extractShortTestName = (fullTestName) => {
    if (!fullTestName) return '';
    return fullTestName;
};
