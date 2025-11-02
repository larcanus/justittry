import React from 'react';
import dataPackage from '../../../../package.json';

const Footdown = () => {
    const versionApp = dataPackage.version;
    const showMail = async (e) => {
        e.target.innerHTML.length < 30 ?
            e.target.innerHTML += ' | alex.rulser@gmail.com' : e.target.innerHTML = `Author of AlexRulSer | v${versionApp}`;
    }

    return (
        <div className='divFoot'>
            <p className='p-author'>copyright © 2021 | <a onClick={showMail}>Author of AlexRulSer | v{versionApp} </a>
            </p>
        </div>
    );
};

export default Footdown;
