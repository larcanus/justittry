/**
 * Централизованная утилита для логирования
 * Управляется через debugApi.isDebugMode
 */
class Logger {
    constructor() {
        this.debugApi = null;
    }

    /**
     * Инициализирует logger с debugApi
     * @param {object} debugApi - Экземпляр debugApi
     */
    initialize(debugApi) {
        this.debugApi = debugApi;
        console.log('[Logger] Initialized with debugApi');
    }

    /**
     * Проверяет, включен ли debug режим
     * @returns {boolean}
     */
    isDebugEnabled() {
        return this.debugApi?.isDebugMode || false;
    }

    /**
     * Форматирует сообщение с префиксом
     * @returns {string}
     */
    formatPrefix() {
        const timestamp = new Date().toLocaleTimeString();
        return `[${timestamp}]`;
    }

    /**
     * Основной метод логирования
     * @param {string} level
     * @param {Array} args - Аргументы для логирования
     */
    log(level, ...args) {
        // Проверяем debug режим
        if (!this.isDebugEnabled()) {
            return;
        }

        const prefix = this.formatPrefix();
        const consoleMethod = level === 'ERROR' ? 'error' :
                            level === 'WARN' ? 'warn' : 'log';

        console[consoleMethod](prefix, ...args);
    }

    /**
     * Логирование ошибок (всегда показывается, даже без debug режима)
     * @param {Array} args - Аргументы
     */
    error(...args) {
        const prefix = this.formatPrefix();
        console.error(prefix, ...args);
    }

    /**
     * Логирование предупреждений
     * @param {Array} args - Аргументы
     */
    warn(...args) {
        this.log('WARN', ...args);
    }

    /**
     * Информационное логирование
     * @param {Array} args - Аргументы
     */
    info(...args) {
        this.log('INFO', ...args);
    }

    /**
     * Debug логирование (самый подробный уровень)
     * @param {Array} args - Аргументы
     */
    debug(...args) {
        this.log('DEBUG', ...args);
    }

    /**
     * Группировка логов
     * @param {string} label - Заголовок группы
     * @param {Function} callback - Функция с логами внутри группы
     */
    group(label, callback) {
        if (!this.isDebugEnabled()) {
            return;
        }

        const prefix = this.formatPrefix();
        console.group(`${prefix} ${label}`);
        callback();
        console.groupEnd();
    }

    /**
     * Таблица данных
     * @param {Array|Object} data - Данные для отображения
     */
    table(data) {
        if (!this.isDebugEnabled()) {
            return;
        }

        const prefix = this.formatPrefix();
        console.log(prefix);
        console.table(data);
    }

    /**
     * Замер времени выполнения
     * @param {string} label - Метка таймера
     */
    time(label) {
        if (!this.isDebugEnabled()) {
            return;
        }

        const timerLabel = `${label}`;
        console.time(timerLabel);
    }

    /**
     * Завершение замера времени
     * @param {string} label - Метка таймера
     */
    timeEnd(label) {
        if (!this.isDebugEnabled()) {
            return;
        }

        const timerLabel = `${label}`;
        console.timeEnd(timerLabel);
    }

    /**
     * Выводит справку по использованию
     */
    help() {
        console.log(`
=== Logger Help ===

Замер времени:
-------------
logger.time('operation')
// ... код ...
logger.timeEnd('operation')

Пример использования:
--------------------
// Включить debug режим
debugApi.enable()

// Использовать в коде
logger.info('API', 'Fetching data...')
logger.debug('Redux', 'Action dispatched:', action)
logger.error('Component', 'Render error:', error)
        `);
    }
}

// Создаем singleton экземпляр
const logger = new Logger();

export default logger;
