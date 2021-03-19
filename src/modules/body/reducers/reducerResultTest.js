export const initialState = {
    resultTest: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case 'DISPATH_TEST_RESULT' :
            return {...state, resultTest: action.payload }
        default:return state
    }
};