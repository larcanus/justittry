import {START_TEST_CONFIG,START_TEST_ID_TIMER} from '../../../common/constants';

/**
 * Установка конфигурации теста
 * @param {object} config - Конфигурация теста
 */
export function startTestConfig(config) {
    return {
        type: START_TEST_CONFIG,
        payload: config,
    }
}

/**
 * Установка ID таймера (legacy, будет удалено)
 * @deprecated Используйте useTestTimer hook вместо Redux для таймера
 */
export function startTestConfigTimer(timerID) {
    return {
        type: START_TEST_ID_TIMER,
        payload: timerID,
    }
}

/**
 * Сброс конфигурации теста
 */
export function resetTestConfig() {
    return {
        type: START_TEST_CONFIG,
        payload: null,
    };
}

/**
 * Thunk для инициализации теста
 */
export const initializeTest = (config) => (dispatch) => {
    // Сбрасываем предыдущую конфигурацию
    dispatch(resetTestConfig());

    // Устанавливаем новую
    dispatch(startTestConfig(config));
};
