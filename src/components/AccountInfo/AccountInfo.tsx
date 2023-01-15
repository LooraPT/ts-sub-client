import React, { FC } from 'react';
import cl from './AccountInfo.module.scss';
import ProfileNallAuth from '../../assets/ProfileNallAuth.svg';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useUpdateImgProfileMutation } from '../../services/apiProfile';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { updateProfile } from '../../store/reducers/user';

const AccountInfo: FC = () => {
    const { profile, user } = useAppSelector(state => state.user)
    const [newImg] = useUpdateImgProfileMutation();
    const dispatch = useAppDispatch();

    const fileHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const formData = new FormData()
            formData.append('img', e.target.files[0])
            const fileName = await newImg({ id: user.id, img: formData })
            if ("data" in fileName) {
                dispatch(updateProfile(fileName.data))
            }
        }
    }

    return (
        <div className={cl.info}>
            <div className={cl.info__img}>
                <img src={profile.img ? process.env.REACT_APP_BASE_URL + '/' + profile.img : ProfileNallAuth} alt="Profile" />
                <label>
                    Upload file
                    <input
                        className={cl.info__input}
                        type="file"
                        onChange={fileHandler}
                    />
                </label>
            </div>
            <div className={cl.info__fullName}>
                Your name: {profile.fullName ? profile.fullName : 'Empty'}
            </div>
            <div className={cl.info__username}>
                Your username: {profile.username ? profile.username : 'Empty'}
            </div>
            <div className={cl.info__number}>
                Your phone: {profile.phone ? profile.phone : 'Empty'}
            </div>
        </div>
    );
}

export default AccountInfo;