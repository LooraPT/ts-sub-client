import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RouteNames } from '../../router';
import Button from '../Button/Button';
import Logo from '../../assets/Logo.svg';
import './Header.scss';
import Dropdown from '../Dropdown/Dropdown';
import { useAppSelector } from '../../hooks/useAppSelector';
import ProfileNallAuth from '../../assets/ProfileNallAuth.svg';
import LogOut from '../../assets/Logout.svg';
import Social from '../Social/Social';
import Modal from '../Modal/Modal';
import AuthForm from '../AuthForm/AuthForm';
import LogoutModal from '../LogoutModal/LogoutModal';
import Arrow from '../../assets/icon-vector.svg';
import { navigationList } from './navData';
import { useSubscriptionGetAllQuery } from '../../services/apiSubscription';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { subscriptionFetching } from '../../store/reducers/subscriptions';
import { useRefreshQuery } from '../../services/apiAuth';
import { userFetching } from '../../store/reducers/user';


const Header: FC = () => {
    const { data } = useSubscriptionGetAllQuery();
    const { data: userData } = useRefreshQuery();
    const dispatch = useAppDispatch();
    const [classes, setClasses] = useState<string[]>(["menu__body"])
    const [modal, setModal] = useState<boolean>(false)
    const [registration, setRegistration] = useState<boolean>(false)
    const [logoutModal, setLogoutModal] = useState<boolean>(false)
    const { auth, profile } = useAppSelector(state => state.user)
    const { subscriptions } = useAppSelector(state => state.subscription)

    useEffect(() => {
        if (data) {
            dispatch(subscriptionFetching(data));
        }
        if (userData) {
            dispatch(userFetching(userData))
        }
    }, [data, dispatch, userData])

    const menuActive = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (classes.length <= 1) {
            setClasses([...classes, "_active"])
        } else {
            setClasses(["menu__body"])
        }
    }




    return (
        <header className="header">
            <div className="header__container">
                <NavLink to={RouteNames.MAIN} className="header__logo">
                    <img src={Logo} alt="Logo" />
                    <div>DiscountsOnServices</div>
                </NavLink>
                <div className="header__menu menu">
                    <nav className={classes.join(' ')}>
                        <ul className="menu__list">
                            <li className="menu__item">
                                <Dropdown subscriptions={subscriptions}>Subscriptions</Dropdown>
                            </li>
                            {navigationList.map(nav =>
                                <li key={nav.name} className="menu__item">
                                    <NavLink to={nav.path} className="menu__link">{nav.name}</NavLink>
                                </li>
                            )}
                            {auth &&
                                <li className="menu__item">
                                    <button className="menu__link">
                                        <img
                                            className="menu__profile-img"
                                            src={profile.img ? process.env.REACT_APP_BASE_URL + '/' + profile.img : ProfileNallAuth}
                                            alt="Profile"
                                        />
                                        Profile
                                        <img src={Arrow} alt="arrow" />
                                    </button>
                                    <ul className="menu__sub-list profile-menu">
                                        <li className="menu__sub-item">
                                            <NavLink to={RouteNames.PROFILE} className="menu__sub-link"><img src={ProfileNallAuth} alt="Img" />Profile</NavLink>
                                        </li>
                                        <li className="menu__sub-item">
                                            <button onClick={() => setLogoutModal(true)} className="menu__sub-link"><img src={LogOut} alt="Img" />Logout</button>
                                        </li>
                                    </ul>
                                </li>}
                        </ul>
                    </nav>
                </div>
                <div className="header__actions actions-header">
                    <div className="actions-header__social">
                        <Social />
                    </div>
                    {!auth && <Button onClick={() => setModal(true)}>Log in</Button>}
                </div>
                <button onClick={menuActive} type="button" className="menu__icon icon__menu"><span /></button>
            </div>
            <Modal
                title={registration ? 'Create an account' : 'Log in'}
                active={modal}
                setActive={setModal}
            >
                <AuthForm
                    modal={modal}
                    setModal={setModal}
                    registration={registration}
                    setRegistration={setRegistration}
                />
            </Modal>
            <LogoutModal
                active={logoutModal}
                setActive={setLogoutModal}
            />
        </header>
    );
}

export default Header;