import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOG_OUT} from '../../../common/constants';

const initialState = {
    name: '',
    error: '', // текст ошибки
    isFetching: false, // статус 'загружаю' или нет
    access: false, // status auth
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, isFetching: true, error: ''}

        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                name: action.payload,
                access: true,
            }

        case LOGIN_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload.message,
            }
        case LOG_OUT:
            return {
                ...state,
                isFetching: false,
                access : false,
            }

        default:
            return state;
    }
}

