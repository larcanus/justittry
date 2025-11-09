/**
 * Middleware для обработки ошибок
 */
const errorMiddleware = (store) => (next) => (action) => {
    try {
        return next(action);
    } catch (error) {
        console.error('Redux Error:', error);
        console.error('Action:', action);
        console.error('State:', store.getState());

        throw error;
    }
};

export default errorMiddleware;
