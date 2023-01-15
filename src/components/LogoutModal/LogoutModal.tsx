import React, { FC } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useLogoutMutation } from '../../services/apiAuth';
import { userLogout } from '../../store/reducers/user';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import classes from './LogoutModal.module.scss';

interface LogoutModalProps {
    active: boolean;
    setActive: (e: boolean) => void;
}

const LogoutModal: FC<LogoutModalProps> = ({ active, setActive }) => {
    const dispatch = useAppDispatch();
    const [exit, { }] = useLogoutMutation();

    const logout = async () => {
        await exit()
        dispatch(userLogout())
        setActive(false)
    }

    return (
        <Modal
            active={active}
            setActive={setActive}
            title='Are you sure want to logout?'
        >
            <div className={classes.button}>
                <Button black onClick={() => setActive(false)}>Cancel</Button>
                <Button onClick={logout}>Yes, Logout</Button>
            </div>
        </Modal>
    );
}

export default LogoutModal;