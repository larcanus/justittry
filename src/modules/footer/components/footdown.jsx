import React from 'react';
import style from '../styles/style.css'

const Footdown = () => {

    const showMail =(e) => {
        e.target.innerHTML.length < 20 ? e.target.innerHTML += ' larcanus@yandex.ru' :  e.target.innerHTML = 'Author of Rylkov A.';
    }

    return (
        <div className='divFoot'>
            <p className='p-author'>copyright © 2021 | <a onClick={showMail}>Author of Rylkov A.</a></p>
        </div>
    );
};

export default Footdown;