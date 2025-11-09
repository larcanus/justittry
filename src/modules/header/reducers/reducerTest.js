import { CHOICE_TEST, REMOVE_TEST } from '../../../common/constants';

export const initialState = {
    testNow: 'Выберите тест',
    selectedAt: null,
    history: [], // История выбранных тестов
};

export default function testReducer(state = initialState, action) {
    switch (action.type) {
        case CHOICE_TEST:
            return {
                ...state,
                testNow: action.payload,
                selectedAt: Date.now(),
                history: [
                    ...state.history.slice(-9), // Храним последние 10
                    {
                        test: action.payload,
                        timestamp: Date.now(),
                    }
                ],
            };

        case REMOVE_TEST:
            return {
                ...initialState
            };

        default:
            return state;
    }
}
