import React, {useState} from 'react'

const Login = () => {
    const linkLogin = '../../public/login.html'
    return (
        <div className='divLogin'>


            <form action={linkLogin}>
                <button type='submit' className='butLogin'>Log in</button>
                <button type='submit' className='butLogin'>Sig in</button>
            </form>

        </div>

    )
}

export default Login;