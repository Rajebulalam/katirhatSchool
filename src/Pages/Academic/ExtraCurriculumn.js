import React from 'react';
import { Helmet } from 'react-helmet-async';

const ExtraCurriculumn = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <Helmet>
                <title>Katirhat High School - Extra Curricular</title>
            </Helmet>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl font bold pb-6 text-center'>Extra Co-curricular Activities</h2>
            <p className='text-lg'>Extra and co-curricular activities of the students are given the due emphasis. We have well-experienced teachers for Music, Art, Computer and Physical Education. Different kinds of competitions are arranged throughout the year to promote the   latent talent of the student.</p>
        </div>
    );
};

export default ExtraCurriculumn;