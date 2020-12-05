import React, {useState} from 'react'
import Login from './login'
import Just from '../Justistry.png'

const HeadTop = () => {
    return (
        <div className='divHeader'>
            <img className='imgHead' src={Just}/>
            <Login />
        </div>

    )
}

export default HeadTop;