import React, { FC } from 'react';
import Telegram from '../../assets/Telegram.svg';
import Whatsapp from '../../assets/Whatsapp.svg';

const Social: FC = () => {
    return (
        <>
            <a href="https://www.whatsapp.com/" rel="noopener noreferrer" target="_blank">
                <img src={Whatsapp} alt="Whats App" />
            </a>
            <a href="https://web.telegram.org/" rel="noopener noreferrer" target="_blank">
                <img src={Telegram} alt="Telegram" />
            </a>
        </>
    );
}

export default Social;