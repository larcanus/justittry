import { DISPATCH_RESET_RESULT, DISPATCH_TEST_RESULT } from "../../../common/constants";

export const initialState = {
    resultTest: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case DISPATCH_TEST_RESULT :
            return {...state, resultTest: action.payload }
        case DISPATCH_RESET_RESULT:
            return {
                ...state,
                resultTest: null
            };
        default:return state
    }
};
