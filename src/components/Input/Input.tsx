import React, { FC } from 'react';
import './Input.scss';

interface InputProps {
    label: string;
    type: string;
    value: string;
    placeholder: string;
    onChange: (e: any) => void;
    name: string;
}

const Input: FC<InputProps> = ({ label, onChange, type, value, placeholder, name }) => {
    return (
        <label htmlFor={name} className="label">
            {label}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </label>
    );
}

export default Input;