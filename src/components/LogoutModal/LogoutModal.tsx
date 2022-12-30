import React, { FC } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import classes from './LogoutModal.module.scss';

interface LogoutModalProps {
    active: boolean;
    setActive: (e: boolean) => void;
}

const LogoutModal: FC<LogoutModalProps> = ({ active, setActive }) => {

    return (
        <Modal
            active={active}
            setActive={setActive}
            title='Are you sure want to logout?'
        >
            <div className={classes.button}>
                <Button black onClick={() => setActive(false)}>Cancel</Button>
                <Button>Yes, Logout</Button>
            </div>
        </Modal>
    );
}

export default LogoutModal;