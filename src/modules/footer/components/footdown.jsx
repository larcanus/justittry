import React, { useState } from 'react';
import dataPackage from '../../../../package.json';
import './../styles/style.css';

const Footdown = () => {
    const versionApp = dataPackage.version;
    const [showEmail, setShowEmail] = useState(false);

    const toggleEmail = () => {
        setShowEmail(!showEmail);
    };

    const getDisplayText = () => {
        const baseText = `© 2024 | Author: AlexRulSer | v${versionApp}`;

        if (showEmail) {
            return `${baseText} | alex.rulser@gmail.com`;
        }

        return baseText;
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="author-info">
                    {getDisplayText()}
                    <button
                        className="email-toggle"
                        onClick={toggleEmail}
                        aria-label={showEmail ? "Hide email" : "Show email"}
                    >
                        {showEmail ? ' [Hide]' : ' [Contact]'}
                    </button>
                </p>
            </div>
        </footer>
    );
};

export default Footdown;
