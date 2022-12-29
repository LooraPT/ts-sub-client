import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { RouteNames } from '../../router';
import Logo from '../../assets/LogoFooter.png';
import './Footer.scss';
import Copy from '../Copy/Copy';
import Social from '../Social/Social';
import { useAppSelector } from '../../hooks/useAppSelector';

const Footer: FC = () => {
    const { subscriptions } = useAppSelector(state => state.subscription)

    return (
        <footer className="footer">
            <div className="footer__body body-footer">
                <div className="body-footer__container">
                    <div className="footer__main">
                        <NavLink to={RouteNames.MAIN} className="footer__logo">
                            <img src={Logo} alt="Logo" />
                        </NavLink>
                        <div className="footer__text">
                            It's simple, fast and economical
                        </div>
                    </div>
                    <div className="footer__menu menu-footer">
                        <div className="menu-footer__column">
                            <div className="menu-footer__label">Subscriptions</div>
                            <ul className="menu-footer__list">
                                {subscriptions?.map(sub =>
                                    <li key={sub.id}>
                                        <NavLink to={RouteNames.SUBSCRIPTION + '/' + sub.id} className="menu-footer__link">{sub.name}</NavLink>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="footer__menu menu-footer">
                        <div className="menu-footer__column">
                            <div className="menu-footer__label">Site navigation</div>
                            <ul className="menu-footer__list">
                                <li>
                                    <NavLink to={RouteNames.SUBSCRIPTION} className="menu-footer__link">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={RouteNames.FAQ} className="menu-footer__link">Faq</NavLink>
                                </li>
                                <li>
                                    <NavLink to={RouteNames.MAIN} className="menu-footer__link">Support</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__social social">
                        <Social />
                    </div>
                </div>
            </div>
            <Copy />
        </footer>
    );
}

export default Footer;