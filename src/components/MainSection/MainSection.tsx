import React, { FC } from 'react';
import Button from '../Button/Button';
import CardLayout from '../CardLayout/CardLayout';
import MainImg from '../../assets/Main/Main.png';
import './MainSection.scss';

const MainSection: FC = () => {

    return (
        <section className="start">
            <div className="start__container">
                <CardLayout blue>
                    <div className="start__discount discount-start">
                        <h2 className="discount-start__title">
                            Start enjoying a benefit
                            of up to 50%
                        </h2>
                        <p className="discount-start__text">
                            You have always wanted to get the same product at a special price for you, without haggling - and it is yours.
                        </p>
                        <Button white>Start using</Button>
                    </div>
                </CardLayout>
                <CardLayout>
                    <img className="start__img" src={MainImg} alt="Main" />
                </CardLayout>
            </div>
        </section>
    );
}

export default MainSection;