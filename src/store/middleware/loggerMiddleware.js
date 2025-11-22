import logger from "../../common/logger";

/**
 * Middleware для логирования Redux действий
 */
const loggerMiddleware = (store) => (next) => (action) => {
    if (process.env.NODE_ENV === 'development') {
        console.group(`Action: ${action.type}`);
        console.log('Payload:', action.payload);
        console.log('Previous State:', store.getState());
    }
    else if(logger?.debugApi?.isEnabled())
    {
        logger.group('Debug API Store Middleware', () => {
            logger.log(`Action: ${action.type}`);
            logger.log('Payload:', action.payload);
            logger.log('Previous State:', store.getState());
        });
    }

    const result = next(action);

    if (process.env.NODE_ENV === 'development') {
        console.log('Next State:', store.getState());
        console.groupEnd();
    }
    else if(logger?.debugApi?.isEnabled())
    {
        logger.log('Next State:', store.getState());
    }

    return result;
};

export default loggerMiddleware;
