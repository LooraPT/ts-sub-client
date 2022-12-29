import React, { FC } from 'react';
import './Copy.scss';

const Copy: FC = () => {
    return (
        <div className="footer__bottom bottom-footer">
            <div className="bottom-footer__container">
                <div className="bottom-footer__copy">Privacy Policy</div>
                <div className="bottom-footer__copy">Copyright 2021 © All Rights Reserved</div>
                <div className="bottom-footer__copy">Developed by ....</div>
            </div>
        </div>
    );
}

export default Copy;