import React, { FC } from 'react';
import './Button.scss';

interface ButtonProps {
    onClick?: () => void;
    white?: boolean;
    children: React.ReactNode
    disabled?: boolean;
    black?: boolean;
}

const Button: FC<ButtonProps> = ({ children, white, onClick, disabled, black }) => {
    const classes = ["button"]

    if (white) {
        classes.push("_white")
    }

    if (black) {
        classes.push("_black")
    }

    return (
        <button onClick={onClick} disabled={disabled} className={classes.join(' ')}>
            {children}
        </button>
    );
}

export default Button;