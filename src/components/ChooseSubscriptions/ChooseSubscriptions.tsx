import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import SectionTitle from '../SectionTitle/SectionTitle';
import SubscriptionsLists from '../SubscriprionsLists/SubscriptionsLists';
import './ChooseSubscriptions.scss';

const ChooseSubscriptions: FC = () => {
    const { subscriptions } = useAppSelector(state => state.subscription);


    return (
        <section className="choose">
            <div className="choose__container">
                <SectionTitle>Choose a subscription</SectionTitle>
                <SubscriptionsLists subscriptions={subscriptions} />
            </div>
        </section>
    );
}

export default ChooseSubscriptions;