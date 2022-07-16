import React from 'react';
import { Helmet } from 'react-helmet-async';

const Videos = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <Helmet>
                <title>Katirhat High School - Videos</title>
            </Helmet>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-neutral text-3xl pb-8 text-center font-bold'>All of Our Video Gallery</h2>
            <p style={{ fontFamily: 'Merienda' }} className='text-red-500 text-4xl pb-16 text-center font-bold'>Please! Add Video Content!</p>
        </div>
    );
};

export default Videos;