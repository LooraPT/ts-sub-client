import React, { FC } from 'react';
import cl from './Loader.module.scss';

const Loader: FC = () => {
    return (
        <div className={cl.loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default Loader;