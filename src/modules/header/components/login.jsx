import React from 'react';

const Login = (props) => {

   const renderTemplate = () => {
        const {login, error, isFetching, handleLogInAction, handleLogOutAction} = props;

        if (error) {
            return (
                <p>
                    Во время запроса произошла ошибка, обновите
                    страницу
                </p>
            )
        }

        if (isFetching) {
            return <p>Загружаю...</p>
        }

        if (login.access) {
            return (
                <div className='logInTrue'>
                    <p>Привет, {login.name}!</p>
                    <button type='submit' className='butLogin' onClick={handleLogOutAction}>
                        Log out
                    </button>
                </div>
            )
        } else {
            return (
                <button className="butLogin" onClick={handleLogInAction}>
                    Log in
                </button>
            )
        }
    }

    return (
        <div className='divLogin'>
            <div className="ib user">{renderTemplate()}</div>
        </div>
    )
};

export default Login;