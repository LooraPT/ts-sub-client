import React, { FC } from 'react';
import './Modal.scss';
import Close from '../../assets/Icons/Close.svg';


interface ModalProps {
    title: string;
    children: React.ReactNode;
    active: boolean;
    setActive: (state: boolean) => void;
}

const Modal: FC<ModalProps> = ({ title, children, active, setActive }) => {

    const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
        setActive(false)
    }


    return (
        <div onClick={closeModal} className={active ? "popup active" : "popup"}>
            <div onClick={e => e.stopPropagation()} className="popup__main">
                <div className="form__info info-form">
                    <h2 className="info-form__title">{title}</h2>
                    <div onClick={closeModal} className="info-form__img">
                        <img src={Close} alt="Close" />
                    </div>
                </div>
                {children}
            </div>
        </div>


    );
}

export default Modal;