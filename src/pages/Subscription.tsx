import React, { FC } from 'react';
import FaqItems from '../components/FaqItems/FaqItems';
import SubscriptionPageSection from '../components/SubscriptionPageSection/SubscriptionPageSection';

const Subscription: FC = () => {

    return (
        <>
            <SubscriptionPageSection />
            <FaqItems />
        </>
    );
}

export default Subscription;