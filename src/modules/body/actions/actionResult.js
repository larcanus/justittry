import { DISPATCH_TEST_RESULT, DISPATCH_RESET_RESULT } from '../../../common/constants';
import logger from '../../../common/logger';

/**
 * Отправка результата теста
 * @param {object} result - Результат теста
 * @param {string} result.test - Название теста
 * @param {string} result.diffical - Сложность
 * @param {Array} result.answers - Массив ответов
 */
export function dispatchResult(result) {
    return {
        type: DISPATCH_TEST_RESULT,
        payload: result,
    };
}

/**
 * Сброс результата теста
 */
export const dispatchResetResult = () => ({
    type: DISPATCH_RESET_RESULT
});

/**
 * Thunk для завершения теста с побочными эффектами
 */
export const finishTest = (result, options = {}) => (dispatch) => {
    const { onSuccess, onError } = options;

    try {
        // Отправляем результат
        dispatch(dispatchResult(result));

        // Вызываем callback успеха
        if (onSuccess) {
            onSuccess(result);
        }
    } catch (error) {
        logger.error('Error finishing test:', error);

        if (onError) {
            onError(error);
        }
    }
};
