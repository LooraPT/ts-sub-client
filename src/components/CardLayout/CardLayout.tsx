import React, { FC, PropsWithChildren } from 'react';
import './CardLayout.scss';

interface CardLayoutProps {
    blue?: boolean;
}

const CardLayout: FC<PropsWithChildren<CardLayoutProps>> = ({ children, blue, ...props }) => {

    const classes = ["card__layout"]

    if (blue) {
        classes.push("blue")
    }

    return (
        <div {...props} className={classes.join(' ')}>
            {children}
        </div>
    );
}

export default CardLayout;