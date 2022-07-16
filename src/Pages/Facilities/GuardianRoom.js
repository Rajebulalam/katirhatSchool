import React from 'react';
import { Helmet } from 'react-helmet-async';
import guardian from '../../images/guardian.jpg';

const GuardianRoom = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <Helmet>
                <title>Katirhat High School - Guardian Room</title>
            </Helmet>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl pb-8 text-center font-bold'>Our Guardian Shed</h2>
            <img className='w-full' src={guardian} alt="guardian" />
        </div>
    );
};

export default GuardianRoom;