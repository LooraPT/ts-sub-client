import React, { FC } from 'react';
import './Button.scss';

interface ButtonProps {
    onClick?: (e?: any) => void;
    white?: boolean;
    children: React.ReactNode
    disabled?: boolean;
    black?: boolean;
    type?: "button" | "submit" | "reset" | undefined;
}

const Button: FC<ButtonProps> = ({ children, white, onClick, disabled, black, type }) => {
    const classes = ["button"]

    if (white) {
        classes.push("_white")
    }

    if (black) {
        classes.push("_black")
    }

    return (
        <button type={type} onClick={onClick} disabled={disabled} className={classes.join(' ')}>
            {children}
        </button>
    );
}

export default Button;