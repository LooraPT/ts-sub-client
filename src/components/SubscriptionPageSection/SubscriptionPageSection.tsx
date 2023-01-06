import React, { FC } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import SubscriptionLevelItem from './SubscriptionLevelItem/SubscriptionLevelItem';
import classes from './SubscriptionPageSection.module.scss';
import { useSubscriptionGetOneQuery } from '../../services/apiSubscription';
import { useParams } from 'react-router-dom';

const SubscriptionPageSection: FC = () => {
    const { id } = useParams();
    const { data } = useSubscriptionGetOneQuery(id || '8')

    return (
        <section className={classes.subscription}>
            <div className={classes.subscription__container}>
                <SectionTitle>Choose a {data?.name} Plan</SectionTitle>
                <div className={classes.subscription__levels}>
                    {data?.levels.map(level =>
                        <SubscriptionLevelItem key={level.id} level={level} />
                    )}
                </div>
            </div>
        </section>
    );
}

export default SubscriptionPageSection;