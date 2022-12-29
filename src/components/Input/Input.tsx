import React, { FC } from 'react';
import './Input.scss';

interface InputProps {
    label: string;
    type: string;
    value: string;
    placeholder: string;
    onChange: (e: string) => void;
}

const Input: FC<InputProps> = ({ label, onChange, type, value, placeholder }) => {
    return (
        <label className="label">
            {label}
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={e => onChange(e.target.value)}
            />
        </label>
    );
}

export default Input;