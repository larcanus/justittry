import { START_TEST_CONFIG, START_TEST_ID_TIMER, RESET_TEST_CONFIG } from "../../../common/constants";

export const initialState = {
    startTestConfig: null,
    startTestConfigTimerID: null, // Legacy, будет удалено
    isConfigured: false,
    lastConfiguredAt: null,
};

export default function configTestReducer(state = initialState, action) {
    switch (action.type) {
        case START_TEST_CONFIG:
            return {
                ...state,
                startTestConfig: action.payload,
                isConfigured: action.payload !== null,
                lastConfiguredAt: action.payload ? Date.now() : null,
            };

        case START_TEST_ID_TIMER:
            // Legacy support
            return {
                ...state,
                startTestConfigTimerID: action.payload
            };

        case RESET_TEST_CONFIG:
            return {
                ...initialState
            };

        default:
            return state;
    }
}
