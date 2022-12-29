import React, { FC } from 'react';
import { ISubscription } from '../../types/ISubscription';
import Button from '../Button/Button';
import cl from './SubscriptionItem.module.scss';
import Nesflix from '../../assets/nesflix.jpg';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../router';

interface SubscriptionItemProps {
    subscription: ISubscription;
}

const SubscriptionItem: FC<SubscriptionItemProps> = ({ subscription }) => {
    const navigate = useNavigate()


    return (
        <div className={cl.choose__subscription}>
            <div className={cl.choose__info}>
                <h2 className={cl.choose__title}>{subscription.name}</h2>
                <p className={cl.choose__text}>{subscription.description}</p>
                <Button onClick={() => navigate(RouteNames.SUBSCRIPTION + '/' + subscription.id)}>Learn more</Button>
            </div>
            <div className={cl.choose__img}>
                <img src={Nesflix} alt={subscription.name} />
            </div>
        </div>
    );
}

export default SubscriptionItem;