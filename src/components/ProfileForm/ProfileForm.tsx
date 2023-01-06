import React, { FC, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './ProfileForm.scss';

const ProfileForm: FC = () => {
    const [phone, setPhone] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [fullName, setFullName] = useState<string>('')

    const profileSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setPhone('')
        setUsername('')
        setFullName('')
    }

    return (
        <form className="profile__form" onSubmit={profileSubmit}>
            <div className="profile__form-title">Account info</div>
            <Input
                name="Phone"
                label="Phone"
                placeholder="Enter your phone"
                type="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <Input
                name="Username"
                label="Username"
                placeholder="Enter your username"
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                name="fullName"
                label="Full name"
                placeholder="Enter your name"
                type="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
            />
            <Button>Save changes</Button>
        </form>
    );
}

export default ProfileForm;