import React, { FC } from 'react';
import { ISubscription } from '../../../types/ISubscription';
import classes from './UserSubscriptionItem.module.scss';

interface UserSubscriptionItemProps {
    subscription: ISubscription;
}

const UserSubscriptionItem: FC<UserSubscriptionItemProps> = ({ subscription }) => {
    return (
        <div className={classes.sub}>
            <div className={classes.sub__title}>
                {subscription.name}
            </div>
            <div className={classes.sub__description}>
                <div>{subscription.description}</div>
                <button>Remove sub</button>
            </div>
        </div>
    );
}

export default UserSubscriptionItem;