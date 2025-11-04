import { DISPATCH_TEST_RESULT, DISPATCH_RESET_RESULT } from '../../../common/constants'

export default function dispatchResult(result) {
    return {
        type: DISPATCH_TEST_RESULT,
        payload: result,
    }
}

export const dispatchResetResult = () => ({
    type: DISPATCH_RESET_RESULT
});
