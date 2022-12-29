import React, { FC } from 'react';
import { IStep } from '../../types/IStep';
import './HowItWorkItem.scss';

interface HowItWorkItemProps {
    step: IStep;
}

const HowItWorkItem: FC<HowItWorkItemProps> = ({ step }) => {
    return (
        <div className="steps__item item-steps">
            <div className="item-steps__label">
                <div className="item-steps__title">{step.title}</div>
                <div className="item-steps__img">
                    <img src={step.image} alt={step.title} />
                </div>
            </div>
            <div className="item-steps__text">
                {step.text}
            </div>
        </div>
    );
}

export default HowItWorkItem;