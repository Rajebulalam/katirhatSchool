import React from 'react';

const Contact = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-neutral text-3xl pb-8 text-center font-bold'>Contact With Us</h2>
            <div className='p-4 w-full sm:w-7/12 md:p-8 rounded-sm shadow-xl my-3 mx-auto'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-2xl font-bold'>Katirhat High School</h2>
                <address>4333, Katirhat, Hathazari, Chattogram, Bangladesh</address>
                <h3>Phone: +8801872-000000</h3>
                <h3>Email: katirhat@scholl.com</h3>
            </div>
        </div>
    );
};

export default Contact;