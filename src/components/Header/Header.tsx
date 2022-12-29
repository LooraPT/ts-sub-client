import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RouteNames } from '../../router';
import Button from '../Button/Button';
import Logo from '../../assets/Logo.svg';
import './Header.scss';
import Dropdown from '../Dropdown/Dropdown';
import { useAppSelector } from '../../hooks/useAppSelector';
import { IDropdown } from '../../types/IDropdown';
import ProfileNall from '../../assets/ProfileNall.svg';
import ProfileNallAuth from '../../assets/ProfileNallAuth.svg';
import LogOut from '../../assets/Logout.svg';
import Social from '../Social/Social';
import Modal from '../Modal/Modal';
import AuthForm from '../AuthForm/AuthForm';

const profileDropdown: IDropdown[] = [
    {
        path: RouteNames.PROFILE,
        name: "Profile",
        img: ProfileNallAuth
    },
    {
        path: RouteNames.MAIN,
        name: "Logout",
        img: LogOut
    },
]

const navigationList = [
    {
        path: RouteNames.FAQ,
        name: 'FAQ'
    },
    {
        path: RouteNames.MAIN,
        name: 'Support'
    },
    {
        path: RouteNames.FAQ,
        name: 'About'
    },
]

const Header: FC = () => {
    const [classes, setClasses] = useState<string[]>(["menu__body"])
    const [modal, setModal] = useState<boolean>(false)
    const [registration, setRegistration] = useState<boolean>(false)

    const { auth } = useAppSelector(state => state.user)
    const { subscriptions } = useAppSelector(state => state.subscription)

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
                            {auth && <li className="menu__item">
                                <Dropdown dropdownItems={profileDropdown}><img src={ProfileNall} alt="Profile" />Profile</Dropdown>
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
        </header>
    );
}

export default Header;