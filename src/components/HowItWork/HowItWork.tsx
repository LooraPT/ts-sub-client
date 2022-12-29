import React, { FC } from 'react';
import { IStep } from '../../types/IStep';
import HowItWorkItem from '../HowItWorkItem/HowItWorkItem';
import SectionTitle from '../SectionTitle/SectionTitle';
import './HowItWork.scss';
import Step1 from '../../assets/Steps/1.png';
import Step2 from '../../assets/Steps/2.png';
import Step3 from '../../assets/Steps/3.png';

const stepItems: IStep[] = [
    {
        id: 1,
        title: 'Step 1',
        text: 'Enter your account information',
        image: Step1
    },
    {
        id: 2,
        title: 'Step 2',
        text: 'Select the desired subscription and plan',
        image: Step2
    },
    {
        id: 3,
        title: 'Step 3',
        text: 'Pay your bill with PayPal',
        image: Step3
    },
]

const HowItWork: FC = () => {
    return (
        <section className="steps">
            <div className="steps__container">
                <SectionTitle>How it works?</SectionTitle>
                <div className="steps__items">
                    {stepItems.map(step =>
                        <HowItWorkItem key={step.id} step={step} />
                    )}
                </div>
            </div>
        </section>
    );
}

export default HowItWork;