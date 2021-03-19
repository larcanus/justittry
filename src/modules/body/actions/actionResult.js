import {DISPATH_TEST_RESULT} from '../../../common/constants'

export default function dispatchResult(result) {
    return {
        type: DISPATH_TEST_RESULT,
        payload: result,
    }
}