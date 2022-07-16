import React from 'react';
import { Helmet } from 'react-helmet-async';

const AdmissionInstruction = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <Helmet>
                <title>Katirhat High School - Admission Instruction</title>
            </Helmet>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-neutral text-3xl pb-8 text-center font-bold'>Admission Instruction</h2>
            <p style={{ fontFamily: 'Merienda' }} className='text-red-500 text-4xl pb-16 text-center font-bold'>Please! Add admission instruction</p>
        </div>
    );
};

export default AdmissionInstruction;