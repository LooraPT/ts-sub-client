import React, { FC } from 'react';
import CardLayout from '../CardLayout/CardLayout';
import SectionTitle from '../SectionTitle/SectionTitle';
import AboutImg from '../../assets/Main/About.png';
import Logo from '../../assets/Main/BigLogo.png';
import './About.scss';

const About: FC = () => {
    return (
        <section className="about">
            <div className="about__container">
                <SectionTitle>About us</SectionTitle>
                <div className="about__main">
                    <CardLayout>
                        <div className="about__info info-about">
                            <img className="info-about__logo" src={Logo} alt="Logo" />
                            <div className="info-about__title">
                                We offer you a subscription to various media services at the best price.
                            </div>
                            <div className="info-about__text">
                                We have partnered with several companies to
                                help you find the best prices for your media
                                subscriptions and provide you with the best prices
                                for the Premium subscriptions you want.
                            </div>
                            <div className="info-about__subtitle">
                                It's simple, fast and economical.
                            </div>
                        </div>
                    </CardLayout>
                    <CardLayout>
                        <img className="about__img" src={AboutImg} alt="about" />
                    </CardLayout>
                </div>
            </div>
        </section>
    );
}

export default About;