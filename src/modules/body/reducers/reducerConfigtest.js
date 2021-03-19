export const initialState = {
    startTestConfig: null,
    startTestConfigTimerID : null,
};

export default function(state = initialState, action) {

    switch (action.type) {

        case 'START_TEST_CONFIG' :
            return {...state, startTestConfig: action.payload };

        case 'START_TEST_ID_TIMER' :
            return { ...state, startTestConfigTimerID: action.payload };

        default:return state;
    }
};