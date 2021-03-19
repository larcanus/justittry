import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOG_OUT} from '../../../common/constants';

export function handleLogin() {
    return function (dispatch) {
        dispatch({
            type: LOGIN_REQUEST,
        })

        //eslint-disable-next-line no-undef
        VK.Auth.login((r) => {
            if (r.session) {
                let username = r.session.user.first_name;

                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: username,
                });
            } else {
                dispatch({
                    type: LOGIN_FAIL,
                    error: true,
                    payload: new Error('Ошибка авторизации'),
                });
            }
        },) // запрос прав на что-либо не нужен пока
    }
}

export function handleLogout() {
    return function (dispatch) {
        dispatch({
            type: LOGIN_REQUEST,
        });
        //eslint-disable-next-line no-undef
        VK.Auth.logout((r) => {
            if (r.session === null) {
                dispatch({
                    type: LOG_OUT,
                    payload: r.session,
                    status: r.status
                });
            } else {
                dispatch({
                    type: LOGIN_FAIL,
                    error: true,
                    payload: new Error('Ошибка'),
                });
            }
        },)
    }
}