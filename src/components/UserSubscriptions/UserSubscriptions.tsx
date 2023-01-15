import React, { FC, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useGetUserSubscriptionQuery } from '../../services/apiSubscription';
import { userSubscriptionFetching } from '../../store/reducers/user';
import Loader from '../Loader/Loader';
import UserSubscriptionItem from './UserSubscriptionItem/UserSubscriptionItem';
import './UserSubscriptions.scss';

const UserSubscriptions: FC = () => {
    const { subscriptions, user } = useAppSelector(state => state.user);
    const { data: userSubscriptions, isLoading } = useGetUserSubscriptionQuery(user.id)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (userSubscriptions) {
            dispatch(userSubscriptionFetching(userSubscriptions))
        }
    }, [dispatch, userSubscriptions])

    if (isLoading) {
        return (
            <Loader />
        )
    }

    return (
        <div className="user__subs">
            {subscriptions.map(sub =>
                <UserSubscriptionItem key={sub.id} subscription={sub} />
            )}
        </div>
    );
}

export default UserSubscriptions;