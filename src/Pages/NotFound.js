import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center py-12'>
            <h1 style={{ fontFamily: 'Merienda' }} className='text-4xl font-extrabold py-4 pb-8'>Opps!</h1>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-xl font-bold pb-4'><span className='text-red-500'>404</span> - PAGE NOT FOUND</h2>
            <p style={{ fontFamily: 'Merienda' }} className='text-lg'>The page you are looking for might have been removed</p>
            <p style={{ fontFamily: 'Merienda' }} className='text-lg'>had its name changed or is temporarily unavailable</p>
            <Link className='btn btn-primary my-8' to="/">GO TO HOME PAGE</Link>
        </div>
    );
};

export default NotFound;