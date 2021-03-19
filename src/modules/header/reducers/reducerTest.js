import {CHOICE_TEST,} from '../../../common/constants';

export const initialState = {
    testNow: 'Выберите тест',
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CHOICE_TEST :
            return {...state, testNow: action.payload }
        default:return state
    }
};

