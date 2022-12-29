import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RouteNames } from '../../router';
import Accordion from '../Accordion/Accordion';
import Button from '../Button/Button';
import SectionTitle from '../SectionTitle/SectionTitle';
import './FaqItems.scss';

const faqArray = [
    {
        id: 1,
        title: "The set time has passed, but the invoice has not yet arrived, what should I do?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        id: 2,
        title: "Can I change my Netflix account email and password after purchase?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        id: 3,
        title: "The set time has passed, but the invoice has not yet arrived, what should I do?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        id: 4,
        title: "The set time has passed, but the invoice has not yet arrived, what should I do?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        id: 5,
        title: "The set time has passed, but the invoice has not yet arrived, what should I do?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
]

const faqPage = [
    {
        id: 6,
        title: "The set time has passed, but the invoice has not yet arrived, what should I do?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        id: 7,
        title: "The set time has passed, but the invoice has not yet arrived, what should I do?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
]

const FaqItems: FC = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const isFaqPage = location.pathname === RouteNames.FAQ;
    const classes = !isFaqPage ? ["faq"] : ["faq", "page"]

    return (
        <section className={classes.join(' ')}>
            <div className="faq__container">
                <SectionTitle>{isFaqPage ? 'How can we help you?' : 'FAQ'}</SectionTitle>
                <div className="faq__accordions">
                    {faqArray.map(item =>
                        <Accordion key={item.id} title={item.title} text={item.text} />
                    )}
                    {isFaqPage && faqPage.map(item =>
                        <Accordion key={item.id} title={item.title} text={item.text} />
                    )}
                </div>
                <div className="faq__button">
                    {!isFaqPage
                        ? <Button onClick={() => navigate(RouteNames.FAQ)}>Support</Button>
                        : <Button onClick={() => navigate(RouteNames.MAIN)}>Main</Button>
                    }
                </div>
            </div>
        </section >
    );
}

export default FaqItems;