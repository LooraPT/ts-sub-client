import React, { FC } from 'react';
import { ILevelSubscription } from '../../../types/ILevelSubscription';
import classes from './SubscriptionLevelItem.module.scss';
import Check from '../../../assets/Icons/check.svg';
import Button from '../../Button/Button';

interface SubscriptionLevelItemProps {
    level: ILevelSubscription;
}

const SubscriptionLevelItem: FC<SubscriptionLevelItemProps> = ({ level }) => {
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
                    <Button black>Get started</Button>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionLevelItem;