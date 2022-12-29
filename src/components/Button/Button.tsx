import React, { FC } from 'react';
import './Button.scss';

interface ButtonProps {
    onClick?: () => void;
    white?: boolean;
    children: React.ReactNode
    disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, white, onClick, disabled, ...props }) => {
    const classes = ["button"]

    if (white) {
        classes.push("_white")
    }

    return (
        <button onClick={onClick} disabled={disabled} {...props} className={classes.join(' ')}>
            {children}
        </button>
    );
}

export default Button;