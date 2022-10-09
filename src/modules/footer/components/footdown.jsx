import React from 'react';
import style from '../styles/style.css'
import * as dataPackage from '../../../../package.json';

const Footdown = () => {
    const versionApp = dataPackage.version;
    const showMail = async (e) => {
        e.target.innerHTML.length < 30 ?
            e.target.innerHTML += ' | larcanus@yandex.ru' : e.target.innerHTML = `Author of Rylkov A. | v${versionApp}`;
    }

    return (
        <div className='divFoot'>
            <p className='p-author'>copyright © 2021 | <a onClick={showMail}>Author of Rylkov A. | v{versionApp} </a>
            </p>
        </div>
    );
};

export default Footdown;