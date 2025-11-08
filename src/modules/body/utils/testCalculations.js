/**
 * Определяет уровень сложности по строке
 * @param {string} difficultyString - Строка сложности
 * @returns {object} Информация об уровне
 */
export const getDifficultyInfo = (difficultyString) => {
    if (!difficultyString) {
        return {
            level: 'Student',
            maxErrors: 5,
        };
    }

    if (difficultyString.includes('jun')) {
        return {
            level: 'Student',
            maxErrors: 5,
        };
    }

    if (difficultyString.includes('mid')) {
        return {
            level: 'Developer',
            maxErrors: 3,
        };
    }

    return {
        level: 'Student',
        maxErrors: 5,
    };
};

/**
 * Подсчитывает результаты теста
 * @param {object} answers - Объект с ответами
 * @returns {object} Статистика
 */
export const calculateTestResults = (answers) => {
    let correctCount = 0;
    let totalCount = 0;

    for (const key in answers) {
        totalCount++;
        if (answers[key]) {
            correctCount++;
        }
    }

    const errorCount = totalCount - correctCount;
    const percentage = totalCount > 0 
        ? Math.round((correctCount / totalCount) * 100) 
        : 0;

    return {
        correctCount,
        totalCount,
        errorCount,
        percentage,
        proportion: `${correctCount} / ${totalCount}`,
    };
};

/**
 * Проверяет, пройден ли тест
 * @param {number} errorCount - Количество ошибок
 * @param {number} maxErrors - Максимально допустимое количество ошибок
 * @returns {boolean}
 */
export const isTestPassed = (errorCount, maxErrors) => {
    return errorCount <= maxErrors;
};

/**
 * Извлекает имя теста из полного описания
 * @param {string} fullTestName - Полное название теста
 * @returns {string} Короткое имя
 */
export const extractTestName = (fullTestName) => {
    if (!fullTestName) return '';
    return fullTestName.substring(21);
};