/**
 * Debug API для ручного тестирования
 * Позволяет запускать тесты с кастомными параметрами
 */
import Tests from '../store/questions/questionsBandle';
import { START_TEST_CONFIG } from "./constants";

/**
 * Валидирует debug конфигурацию
 * @param {object} config - Debug конфигурация
 * @returns {object} Результат валидации
 */
const validateDebugConfig = (config) => {
    const errors = [];

    if (!config.testName) {
        errors.push('testName is required');
    }

    if (!config.difficulty) {
        errors.push('difficulty is required');
    }

    if (!Tests[config.testName]) {
        errors.push(`Test "${config.testName}" not found`);
    }

    if (config.questionIndices && !Array.isArray(config.questionIndices)) {
        errors.push('questionIndices must be an array');
    }

    if (config.duration && typeof config.duration !== 'string') {
        errors.push('duration must be a string (minutes) with 00:00 format');
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
};

/**
 * Получает вопросы по их номерам (поле num)
 * @param {object} testData - Данные теста
 * @param {string} difficulty - Уровень сложности
 * @param {number[]} questionNums - Номера вопросов (значения поля num)
 * @returns {Array} Массив вопросов
 */
const getQuestionsByIndices = (testData, difficulty, questionNums) => {
    const questions = testData[difficulty];
    console.log('questions', questions)
    if (!questions || questions.length === 0) {
        throw new Error(`No questions found for difficulty: ${difficulty}`);
    }

    const foundQuestions = [];
    const notFoundNums = [];

    questionNums.forEach(num => {
        const question = questions.find(q => q.num === `#${num}`);
        if (question) {
            foundQuestions.push(question);
        } else {
            notFoundNums.push(num);
        }
    });

    if (notFoundNums.length > 0) {
        console.warn(`[Debug API] Questions with num [${notFoundNums.join(', ')}] not found`);
    }

    if (foundQuestions.length === 0) {
        throw new Error(`No questions found with specified nums: [${questionNums.join(', ')}]`);
    }

    console.log(`[Debug API] Found ${foundQuestions.length} questions by num:`, questionNums);

    return foundQuestions;
};

/**
 * Debug API класс
 */
class DebugAPI {
    constructor() {
        this.isDebugMode = false;
        this.debugConfig = null;
        this.store = null;
        this.history = null;
    }

    /**
     * Инициализирует Debug API с Redux store и history
     * @param {object} store - Redux store
     * @param {object} history - React Router history
     */
    initialize(store, history) {
        this.store = store;
        this.history = history;
        console.log('[Debug API] Initialized with store and history');
    }

    /**
     * Включает debug режим
     */
    enable() {
        this.isDebugMode = true;
        console.log('[Debug API] Enabled');
    }

    /**
     * Выключает debug режим
     */
    disable() {
        this.isDebugMode = false;
        this.debugConfig = null;
        console.log('[Debug API] Disabled');
    }

    /**
     * Создает debug конфигурацию теста
     * @param {object} config - Параметры теста
     * @param {string} config.testName - Название теста (JavaScript, HTML, DART, PHP)
     * @param {string} config.difficulty - Сложность (jun, mid)
     * @param {number[]} [config.questionIndices] - Номера вопросов (поле num) (опционально)
     * @param {string} [config.duration] - Длительность в минутах (опционально)
     * @param {boolean} [config.withoutTimer=false] - Без таймера
     * @returns {object} Конфигурация теста
     */
    createTestConfig(config) {
        if (!this.isDebugMode) {
            throw new Error('Debug mode is not enabled. Call debugApi.enable() first');
        }

        const validation = validateDebugConfig(config);
        if (!validation.isValid) {
            throw new Error(`Invalid config: ${validation.errors.join(', ')}`);
        }

        const {
            testName,
            difficulty,
            questionIndices = null,
            duration = null,
            withoutTimer = false,
        } = config;

        const testData = Tests[testName];
        let questions;

        // Получаем вопросы
        if (questionIndices && questionIndices.length > 0) {
            questions = getQuestionsByIndices(testData, difficulty, questionIndices);
            console.log(`[Debug API] Using ${questions.length} specific questions with num:`, questionIndices);
        } else {
            // Используем все вопросы для данной сложности
            questions = testData[difficulty] || [];
            console.log(`[Debug API] Using all ${questions.length} questions for ${difficulty}`);
        }

        if (questions.length === 0) {
            throw new Error('No questions available for this configuration');
        }

        const debugConfig = {
            nameTest: testName,
            descTest: `Тест на знание языка ${testName}`,
            optionTest: {
                diffical: difficulty,
                timer: withoutTimer,
                questions,
                validDif: true,
                validTest: true,
            },
            debug: {
                enabled: true,
                duration: duration,
                questionCount: questions.length,
                questionIndices: questionIndices,
            },
        };

        this.debugConfig = debugConfig;

        console.log('[Debug API] Test config created:', {
            test: testName,
            difficulty,
            questionCount: questions.length,
            duration: duration ? `${duration} min` : 'default',
            withoutTimer,
        });

        return debugConfig;
    }

    /**
     * Запускает тест с текущей или переданной конфигурацией
     * @param {object} [config] - Конфигурация теста (опционально)
     * @returns {boolean} Успешность запуска
     */
    startTest(config = null) {
        if (!this.store || !this.history) {
            console.error('[Debug API] Not initialized. Call debugApi.initialize(store, history) first');
            throw new Error('Debug API not initialized. Call initialize(store, history) first');
        }

        try {
            const testConfig = config || this.debugConfig;

            if (!testConfig) {
                throw new Error('No test configuration available. Create config first using createTestConfig()');
            }

            // Отправляем конфигурацию в Redux
            this.store.dispatch({
                type: START_TEST_CONFIG,
                payload: testConfig,
            });

            console.log('[Debug API] Test config dispatched to Redux');

            // Перенаправляем на страницу теста
            this.history.push('/test');

            console.log('[Debug API] Navigated to /test');
            console.log('[Debug API] Test started successfully!');

            return true;
        } catch (error) {
            console.error('[Debug API] Failed to start test:', error);
            return false;
        }
    }

    /**
     * Получает текущую debug конфигурацию
     * @returns {object|null}
     */
    getConfig() {
        return this.debugConfig;
    }

    /**
     * Проверяет, активен ли debug режим
     * @returns {boolean}
     */
    isEnabled() {
        return this.isDebugMode;
    }

    /**
     * Получает список доступных тестов
     * @returns {string[]}
     */
    getAvailableTests() {
        return Object.keys(Tests);
    }

    /**
     * Получает информацию о тесте
     * @param {string} testName - Название теста
     * @returns {object} Информация о тесте
     */
    getTestInfo(testName) {
        const testData = Tests[testName];

        if (!testData) {
            throw new Error(`Test "${testName}" not found`);
        }

        return {
            name: testName,
            difficulties: Object.keys(testData),
            questionCounts: Object.entries(testData).reduce((acc, [diff, questions]) => {
                acc[diff] = questions.length;
                return acc;
            }, {}),
        };
    }

    /**
     * Быстрый запуск теста с минимальными параметрами
     * @param {string} testName - Название теста
     * @param {object} [options] - Дополнительные опции
     * @param {boolean} [autoStart=true] - Автоматически запустить тест
     * @returns {object} Конфигурация теста
     */
    quickStart(testName, options = {}, autoStart = true) {
        const {
            difficulty = 'jun',
            questionCount = 6,
            duration = '01:00',
        } = options;

        const testData = Tests[testName];
        if (!testData || !testData[difficulty]) {
            throw new Error(`Test "${testName}" with difficulty "${difficulty}" not found`);
        }

        const maxQuestions = Math.min(questionCount, testData[difficulty].length);
        const questionIndices = testData[difficulty]
            .slice(0, maxQuestions)
            .map(q => q.num);

        const config = this.createTestConfig({
            testName,
            difficulty,
            questionIndices,
            duration,
            withoutTimer: false,
        });

        if (autoStart) {
            this.startTest(config);
        }

        return config;
    }

    /**
     * Выводит справку по использованию API
     */
    help() {
        console.log(`
=== Debug API Help ===

1. Включить debug режим:
   debugApi.enable()

2. Быстрый запуск (автоматически запускает тест):
   debugApi.quickStart('DART')
   
   // С параметрами
   debugApi.quickStart('DART', {
       difficulty: 'jun',
       questionCount: 6,
       duration: '01:00',
   })

3. Создать конфигурацию и запустить вручную (по номерам вопросов):
   const config = debugApi.createTestConfig({
       testName: 'JavaScript',
       difficulty: 'mid',
       questionIndices: [3, 5, 76],  // Номера вопросов (поле num)
       duration: '02:00'
   })
   debugApi.startTest(config)

4. Запустить с последней конфигурацией:
   debugApi.startTest()

5. Получить список тестов:
   debugApi.getAvailableTests()

6. Получить информацию о тесте:
   debugApi.getTestInfo('DART')

7. Выключить debug режим:
   debugApi.disable()

Примеры использования:
---------------------

// Самый простой способ - быстрый запуск
debugApi.enable()
debugApi.quickStart('DART')

// Кастомный тест с конкретными вопросами по их номерам (num)
debugApi.enable()
const config = debugApi.createTestConfig({
    testName: 'PHP',
    difficulty: 'jun',
    questionIndices: [3, 5, 76],  // Вопросы с num = 3, 5, 76
    duration: '01:00',
    withoutTimer: false
})
debugApi.startTest(config)

// Полный контроль
debugApi.enable()
debugApi.quickStart('JavaScript', {
    difficulty: 'mid',
    questionCount: 10,
    duration: '03:00',
})

Доступные тесты:
${this.getAvailableTests().join(', ')}
        `);
    }
}


const debugApi = new DebugAPI();
if (typeof window !== 'undefined') {
    window.debugApi = debugApi;
}

export default debugApi;
