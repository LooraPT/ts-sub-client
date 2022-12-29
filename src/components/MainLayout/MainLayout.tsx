import React, { FC, PropsWithChildren } from 'react';
import cl from './MainLayout.module.scss';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <main className={cl.main}>
            {children}
        </main>
    );
}

export default MainLayout;