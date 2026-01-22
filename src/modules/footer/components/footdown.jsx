import React from 'react';
import dataPackage from '../../../../package.json';

const Footdown = () => {
    const versionApp = dataPackage.version;
    const authorWebsite = 'https://alexrulser.com/';

    const openAuthorWebsite = () => {
        window.open(authorWebsite, '_blank', 'noopener,noreferrer');
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="author-info">
                    © 2025 | v{versionApp} | Author:
                    <button
                        className="author-link"
                        onClick={openAuthorWebsite}
                        aria-label="Перейти на сайт автора"
                    >
                        AlexRulSer
                    </button>
                </p>
            </div>
        </footer>
    );
};

export default Footdown;
