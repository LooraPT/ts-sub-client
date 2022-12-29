import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

const Subscription: FC = () => {
    const { id } = useParams()

    return (
        <div>
            ONE SUBSCRIPTION {id}
        </div>
    );
}

export default Subscription;