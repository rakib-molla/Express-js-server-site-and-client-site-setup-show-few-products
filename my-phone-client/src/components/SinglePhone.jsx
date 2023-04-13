import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SinglePhone = () => {
    const phone = useLoaderData();
    
    return (
        <div>
            <h1>{phone.name}</h1>
            <img src={phone.image} alt="" />
        </div>
    );
};

export default SinglePhone;