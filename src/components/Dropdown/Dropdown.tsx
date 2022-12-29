import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ISubscription } from '../../types/ISubscription';
import { RouteNames } from '../../router';
import './Dropdown.scss';
import Arrow from '../../assets/icon-vector.svg';
import { IDropdown } from '../../types/IDropdown';

interface DropdownProps {
    subscriptions?: ISubscription[];
    children?: React.ReactNode;
    dropdownItems?: IDropdown[];
}

const Dropdown: FC<DropdownProps> = ({ subscriptions, children, dropdownItems }) => {


    return (
        <>
            <button className="menu__link">{children}<img src={Arrow} alt="arrow" /></button>
            <ul className="menu__sub-list profile-menu">
                {subscriptions && subscriptions.map(sub =>
                    <li key={sub.id} className="menu__sub-item">
                        <NavLink to={RouteNames.SUBSCRIPTION + '/' + sub.id} className="menu__sub-link">{sub.name}</NavLink>
                    </li>
                )}
                {dropdownItems && dropdownItems.map(item =>
                    <li key={item.path} className="menu__sub-item">
                        <NavLink to={item.path} className="menu__sub-link"><img src={item.img} alt="Img" />{item.name}</NavLink>
                    </li>
                )}
            </ul>
        </>
    );
}

export default Dropdown;