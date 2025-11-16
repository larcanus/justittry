/**
 * Утилита для кодирования/декодирования ответов теста
 * Преобразует 'a1'-'a4' в 1-4 и обратно для экономии трафика
 */

/**
 * Преобразует строку вида 'a1' в число 1
 * @param {string} answer - Ответ в формате 'a1', 'a2', 'a3', 'a4'
 * @returns {number} Число от 1 до 4
 */
export const encodeAnswer = (answer) => {
    if (!answer || typeof answer !== 'string') return null;

    // Берем последний символ и преобразуем в число
    const num = answer.charCodeAt(answer.length - 1) - 48; // '1' = 49, '1' - 48 = 1

    return (num >= 1 && num <= 4) ? num : null;
};

/**
 * Преобразует число 1 в строку 'a1'
 * @param {number} num - Число от 1 до 4
 * @returns {string} Ответ в формате 'a1', 'a2', 'a3', 'a4'
 */
export const decodeAnswer = (num) => {
    if (typeof num !== 'number' || num < 1 || num > 4) return null;

    return 'a' + num;
};

/**
 * Преобразует массив строк в массив чисел
 * @param {string[]} answers - Массив ответов ['a1', 'a2']
 * @returns {number[]} Массив чисел [1, 2]
 */
export const encodeAnswers = (answers) => {
    if (!Array.isArray(answers)) return [];

    return answers.map(encodeAnswer).filter(Boolean);
};

/**
 * Преобразует массив чисел в массив строк
 * @param {number[]} nums - Массив чисел [1, 2]
 * @returns {string[]} Массив ответов ['a1', 'a2']
 */
export const decodeAnswers = (nums) => {
    if (!Array.isArray(nums)) return [];

    return nums.map(decodeAnswer).filter(Boolean);
};

/**
 * Преобразует ключи объекта options из 'a1'-'a4' в 1-4
 * @param {object} options - Объект вида {a1: "6", a2: "7", a3: "8", a4: "5"}
 * @returns {object} Объект вида {1: "6", 2: "7", 3: "8", 4: "5"}
 */
export const encodeOptionsKeys = (options) => {
    if (!options || typeof options !== 'object') return {};

    const encoded = {};

    // Используем Object.keys для максимальной производительности
    const keys = Object.keys(options);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const encodedKey = encodeAnswer(key);
        if (encodedKey !== null) {
            encoded[encodedKey] = options[key];
        }
    }

    return encoded;
};

/**
 * Преобразует ключи объекта options из 1-4 в 'a1'-'a4'
 * @param {object} options - Объект вида {1: "6", 2: "7", 3: "8", 4: "5"}
 * @returns {object} Объект вида {a1: "6", a2: "7", a3: "8", a4: "5"}
 */
export const decodeOptionsKeys = (options) => {
    if (!options || typeof options !== 'object') return {};

    const decoded = {};

    // Используем Object.keys для максимальной производительности
    const keys = Object.keys(options);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const numKey = Number(key);
        const decodedKey = decodeAnswer(numKey);
        if (decodedKey !== null) {
            decoded[decodedKey] = options[key];
        }
    }

    return decoded;
};

/**
 * Преобразует объект слайда для отправки на сервер (кодирует ответы и ключи options)
 * @param {object} slide - Объект слайда
 * @returns {object} Слайд с закодированными ответами
 */
export const encodeSlide = (slide) => {
    return {
        ...slide,
        options: encodeOptionsKeys(slide.options || slide.option),
        user_answers: encodeAnswers(slide.user_answers || []),
    };
};

/**
 * Преобразует объект слайда после получения с сервера (декодирует ответы и ключи options)
 * @param {object} slide - Объект слайда с числовыми ответами
 * @returns {object} Слайд со строковыми ответами
 */
export const decodeSlide = (slide) => {
    return {
        ...slide,
        options: decodeOptionsKeys(slide.options),
        correct_answer: Array.isArray(slide.correct_answer)
            ? decodeAnswers(slide.correct_answer)
            : decodeAnswer(slide.correct_answer),
        user_answers: decodeAnswers(slide.user_answers || []),
    };
};
