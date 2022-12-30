import React, { FC } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import SubscriptionLevelItem from './SubscriptionLevelItem/SubscriptionLevelItem';
import classes from './SubscriptionPageSection.module.scss';

const subscriptionInfo = {
    id: 4,
    name: "Spotify",
    img: '',
    description: 'fdfdffffffffffffffffffffffffffffffffdfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    levels: [
        {
            id: 1,
            level: 'individual',
            priceSix: '100',
            priceTwelve: '120',
        },
        {
            id: 2,
            level: 'duo',
            priceSix: '100',
            priceTwelve: '120',
        },
        {
            id: 3,
            level: 'premium',
            priceSix: '100',
            priceTwelve: '120',
        },
    ]
}

const SubscriptionPageSection: FC = () => {

    return (
        <section className={classes.subscription}>
            <div className={classes.subscription__container}>
                <SectionTitle>Choose a {subscriptionInfo.name} Plan</SectionTitle>
                <div className={classes.subscription__levels}>
                    {subscriptionInfo.levels.map(level =>
                        <SubscriptionLevelItem key={level.id} level={level} />
                    )}
                </div>
            </div>
        </section>
    );
}

export default SubscriptionPageSection;