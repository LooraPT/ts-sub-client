import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import UserSubscriptionItem from './UserSubscriptionItem/UserSubscriptionItem';
import './UserSubscriptions.scss';

const UserSubscriptions: FC = () => {
    const { subscriptions } = useAppSelector(state => state.user);

    return (
        <div className="user__subs">
            {subscriptions.map(sub =>
                <UserSubscriptionItem key={sub.id} subscription={sub} />
            )}
        </div>
    );
}

export default UserSubscriptions;