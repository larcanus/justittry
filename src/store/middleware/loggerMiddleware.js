/**
 * Middleware для логирования Redux действий
 */
const loggerMiddleware = (store) => (next) => (action) => {
    if (process.env.NODE_ENV === 'development') {
        console.group(`Action: ${action.type}`);
        console.log('Payload:', action.payload);
        console.log('Previous State:', store.getState());
    }

    const result = next(action);

    if (process.env.NODE_ENV === 'development') {
        console.log('Next State:', store.getState());
        console.groupEnd();
    }

    return result;
};

export default loggerMiddleware;