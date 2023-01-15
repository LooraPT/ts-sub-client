import React, { FC } from 'react';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useRemoveSubscriptionsMutation } from '../../../services/apiSubscription';
import { userSubscriptionFetching } from '../../../store/reducers/user';
import { ISubscription } from '../../../types/ISubscription';
import classes from './UserSubscriptionItem.module.scss';

interface UserSubscriptionItemProps {
    subscription: ISubscription;
}

const UserSubscriptionItem: FC<UserSubscriptionItemProps> = ({ subscription }) => {
    const dispatch = useAppDispatch()
    const [remove] = useRemoveSubscriptionsMutation();
    const { user } = useAppSelector(state => state.user)

    const removeSubscription = async () => {
        const data = await remove({ userId: user.id, subscriptionId: subscription.id })
        if ("data" in data) {
            dispatch(userSubscriptionFetching(data.data))
        }
    }

    return (
        <div className={classes.sub}>
            <div className={classes.sub__title}>
                {subscription.name}
            </div>
            <div className={classes.sub__description}>
                <div>{subscription.description}</div>
                <button onClick={removeSubscription}>Remove sub</button>
            </div>
        </div>
    );
}

export default UserSubscriptionItem;