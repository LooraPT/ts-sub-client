import React, { FC, useState } from 'react';
import './UserProfile.scss';
import Exit from '../../assets/Icons/Exit.svg';
import Wallet from '../../assets/Icons/wallet.svg';
import Setting from '../../assets/Icons/setting.svg';
import ProfileForm from '../ProfileForm/ProfileForm';
import AccountInfo from '../AccountInfo/AccountInfo';
import UserSubscriptions from '../UserSubscriptions/UserSubscriptions';

const UserProfile: FC = () => {
    const [info, setInfo] = useState<boolean>(true);
    const [update, setUpdate] = useState<boolean>(false);
    const [subscriptions, setSubscriptions] = useState<boolean>(false);

    const profileInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
        setInfo(true)
        setUpdate(false)
        setSubscriptions(false)
    }

    const profileUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
        setInfo(false)
        setUpdate(true)
        setSubscriptions(false)
    }

    const profileSubs = (e: React.MouseEvent<HTMLButtonElement>) => {
        setInfo(false)
        setUpdate(false)
        setSubscriptions(true)
    }

    return (
        <section className="profile">
            <div className="profile__container">
                <div className="profile__main main-profile">
                    <div className="main-profile__title">Personal data management</div>
                    <div className="main-profile__exit">
                        <img src={Exit} alt="Exit" />
                        <div>Exit</div>
                    </div>
                </div>
                <div className="profile__content content-profile">
                    <div className="content-profile__nav">
                        <button onClick={profileInfo} className={!info ? "content-profile__button" : "content-profile__button _active-profile"}>
                            <img src={Setting} alt="Setting" />
                            <div className="content-profile__name">Account info</div>
                        </button>
                        <button onClick={profileUpdate} className={!update ? "content-profile__button" : "content-profile__button _active-profile"}>
                            <img src={Setting} alt="Setting" />
                            <div className="content-profile__name">Update info</div>
                        </button>
                        <button onClick={profileSubs} className={!subscriptions ? "content-profile__button" : "content-profile__button _active-profile"}>
                            <img src={Wallet} alt="Wallet" />
                            <div className="content-profile__name">My Subscriptions</div>
                        </button>
                    </div>
                    <div className={subscriptions ? "content-profile__subs" : "content-profile__main"}>
                        {info && <AccountInfo />}
                        {update && <ProfileForm />}
                        {subscriptions && <UserSubscriptions />}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserProfile;