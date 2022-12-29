import React, { FC } from 'react';
import './Accordion.scss';
import Arrow from '../../assets/Icons/Arrow.svg';
import { useToggle } from '../../hooks/useToggle';

interface AccordionProps {
    title: string;
    text: string
}

const Accordion: FC<AccordionProps> = ({ text, title }) => {
    const [info, setInfo] = useToggle();

    return (
        <div className="accordion">
            <div className="accordion__visible">
                <div className="accordion__title">{title}</div>
                <button onClick={setInfo} className="accordion__button">
                    {!info
                        ? <img src={Arrow} alt="Vector" />
                        : <img className="accordion__img" src={Arrow} alt="Vector" />
                    }

                </button>
            </div>
            {info &&
                <div className="accordion__hidden">
                    {text}
                </div>
            }
        </div>
    );
}

export default Accordion;