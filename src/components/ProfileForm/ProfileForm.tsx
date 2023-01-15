import React, { FC, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useUpdateInformationProfileMutation } from '../../services/apiProfile';
import { updateProfile } from '../../store/reducers/user';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './ProfileForm.scss';

const ProfileForm: FC = () => {
    const [phone, setPhone] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [fullName, setFullName] = useState<string>('')
    const [updateInfo] = useUpdateInformationProfileMutation();
    const { id } = useAppSelector(state => state.user.user)
    const dispatch = useAppDispatch()

    const profileSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newInformation = await updateInfo({ id, phone, username, fullName })
        if ("data" in newInformation) {
            dispatch(updateProfile(newInformation.data))
            setPhone('')
            setUsername('')
            setFullName('')
        }
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