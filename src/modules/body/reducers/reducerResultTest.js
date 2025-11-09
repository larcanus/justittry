import { DISPATCH_RESET_RESULT, DISPATCH_TEST_RESULT } from "../../../common/constants";

export const initialState = {
    resultTest: null,
    isSubmitted: false,
    submittedAt: null,
    error: null,
};

export default function resultTestReducer(state = initialState, action) {
    switch (action.type) {
        case DISPATCH_TEST_RESULT:
            return {
                ...state,
                resultTest: action.payload,
                isSubmitted: true,
                submittedAt: Date.now(),
                error: null,
            };

        case DISPATCH_RESET_RESULT:
            return {
                ...initialState
            };

        default:
            return state;
    }
}
