import React, { FC } from 'react';
import { ISubscription } from '../../types/ISubscription';
import SubscriptionItem from '../SubscriptionItem/SubscriptionItem';
import './SubscriptionsLists.scss';

interface SubscriptionsListsProps {
    subscriptions: ISubscription[];
}

const SubscriptionsLists: FC<SubscriptionsListsProps> = ({ subscriptions }) => {


    return (
        <div>
            {subscriptions?.map(sub =>
                <SubscriptionItem key={sub.id} subscription={sub} />
            )}
        </div>
    );
}

export default SubscriptionsLists;