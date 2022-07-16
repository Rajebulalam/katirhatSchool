import React from 'react';
import { Helmet } from 'react-helmet-async';
import calender from '../../images/academic.png';

const AcademicCalender = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <Helmet>
                <title>Katirhat High School - Academic Calender</title>
            </Helmet>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl pb-8 text-center font-bold'>Academic Calender</h2>
            <img className='w-full border border-3' src={calender} alt="academicCalender" />
        </div>
    );
};

export default AcademicCalender;