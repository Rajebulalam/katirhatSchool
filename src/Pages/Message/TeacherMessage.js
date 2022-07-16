import React from 'react';
import { Helmet } from 'react-helmet-async';

const TeacherMessage = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-8'>
            <Helmet>
                <title>Katirhat High School - Teacher Message</title>
            </Helmet>
            <h2 className='text-2xl font-bold py-1'>Mr.Abdul Baset</h2>
            <h4 className='text-lg'>Teacher of Katirhat High School</h4>
            <address className='text-lg'>Katirhat, Hathazari, Chattogram, Bangladesh</address>
            <div className='py-4'>
                <p className='text-lg'>In the 21 st century we are living in a global village. The whole world is moving forward very rapidly. We need to keep pace as well. To face the challenges of the progressive world, we need such a type of education system that will enable our learners to succeed with excellence. Bangladesh International School & College vows to offer all the modern facilities for young learners. We emphasize simultaneously both on academic and co-curricular activities that will bring them academic excellence and make them perfect to take proper decisions at every step.</p>
                <p className='text-lg pt-3'> We welcome all the students at our beautiful campus to have a chance to enrich academically. As our institution is situated at Dhaka Cantonment, students are safe and secure here. We understand every student is unique at their own way and we are earnestly ready to find out their latent talent.</p>
            </div>
        </div>
    );
};

export default TeacherMessage;