import React, { FC } from 'react';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainLayout from './components/MainLayout/MainLayout';
import './styles/_reset.scss';
import './styles/_styles.scss';

const App: FC = () => {
    return (
        <>
            <Header />
            <MainLayout>
                <AppRouter />
            </MainLayout>
            <Footer />
        </>
    );
}

export default App;