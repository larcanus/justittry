import {START_TEST_CONFIG,START_TEST_ID_TIMER} from '../../../common/constants';

export function startTestConfig(config) {
    return {
        type: START_TEST_CONFIG,
        payload: config,
    }
}

export function startTestConfigTimer(timerID) {
    return {
        type: START_TEST_ID_TIMER,
        payload: timerID,
    }
}