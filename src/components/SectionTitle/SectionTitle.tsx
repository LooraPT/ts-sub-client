import React, { FC, PropsWithChildren } from 'react';
import './SectionTitle.scss';

const SectionTitle: FC<PropsWithChildren> = ({ children }) => {
    return (
        <h2 className="section__title">
            {children}
        </h2>
    );
}

export default SectionTitle;