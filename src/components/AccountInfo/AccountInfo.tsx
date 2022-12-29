import React, { FC, useState } from 'react';
import cl from './AccountInfo.module.scss';
import ProfileNallAuth from '../../assets/ProfileNallAuth.svg';
import { IProfile } from '../../types/IProfile';

const AccountInfo: FC = () => {
    const [file, setFile] = useState<File | null>(null)

    const profileUser: IProfile = {
        id: 1,
        img: null,
        phone: null,
        fullName: null,
        username: null
    }

    const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            console.log(1)
            setFile(e.target.files[0])
            console.log(file)
        }
    }

    return (
        <div className={cl.info}>
            <div className={cl.info__img}>
                <img src={profileUser.img ? profileUser.img : ProfileNallAuth} alt="Profile" />
                <label>
                    Upload file
                    <input
                        className={cl.info__input}
                        type="file"
                        onChange={fileHandler}
                    />
                </label>
            </div>
        </div>
    );
}

export default AccountInfo;