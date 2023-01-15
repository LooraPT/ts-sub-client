import React, { FC } from 'react';
import { ILevelSubscription } from '../../../types/ILevelSubscription';
import classes from './SubscriptionLevelItem.module.scss';
import Check from '../../../assets/Icons/check.svg';
import Button from '../../Button/Button';
import { usePurchaseSubscriptionMutation } from '../../../services/apiSubscription';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useNavigate, useParams } from 'react-router-dom';
import { RouteNames } from '../../../router';

interface SubscriptionLevelItemProps {
    level: ILevelSubscription;
}

const SubscriptionLevelItem: FC<SubscriptionLevelItemProps> = ({ level }) => {
    const [postPurchase, { error }] = usePurchaseSubscriptionMutation();
    const { user, profile } = useAppSelector(state => state.user)
    const { id } = useParams();
    const navigate = useNavigate()

    const purchase = async (e: React.MouseEvent<HTMLButtonElement>) => {
        await postPurchase({ email: user.email, fullName: profile.fullName || '', phone: profile.phone || '', userId: user.id, subscriptionId: id || '' })
        if (!error) {
            navigate(RouteNames.PROFILE)
        }
    }

    return (
        <div className={classes.level}>
            <div className={classes.level__name}>
                {level.level}
            </div>
            <div className={classes.level__border}></div>
            <div className={classes.level__info}>
                <div className={classes.level__description}>
                    <div className={classes.level__item}>
                        <img src={Check} alt="Check" />
                        <div>Ad-free music listening</div>
                    </div>
                    <div className={classes.level__item}>
                        <img src={Check} alt="Check" />
                        <div>Ad-free music listening</div>
                    </div>
                    <div className={classes.level__item}>
                        <img src={Check} alt="Check" />
                        <div>Ad-free music listening</div>
                    </div>
                </div>
                <div className={classes.level__price}>
                    ${level.priceSix}
                </div>
                <div className={classes.level__button}>
                    <Button onClick={purchase} black>Get started</Button>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionLevelItem;