import React, { FC } from 'react';
import About from '../components/About/About';
import ChooseSubscriptions from '../components/ChooseSubscriptions/ChooseSubscriptions';
import FaqItems from '../components/FaqItems/FaqItems';
import HowItWork from '../components/HowItWork/HowItWork';
import MainSection from '../components/MainSection/MainSection';

const Main: FC = () => {

    return (
        <>
            <MainSection />
            <ChooseSubscriptions />
            <HowItWork />
            <About />
            <FaqItems />
        </>
    );
}

export default Main;