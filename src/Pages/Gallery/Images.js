import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import sport from '../../images/sport.jpg';

const Images = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <Helmet>
                <title>Katirhat High School - Images</title>
            </Helmet>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-neutral text-3xl pb-8 text-center font-bold'>All of Our Images</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='p-5 shadow-xl text-center'>
                    <div className='flex justify-center'>
                        <Link to='/sportGallery'><img className='w-[300px]' src={sport} alt="sports" /></Link>
                    </div>
                    <h2 style={{ fontFamily: 'Merienda' }} className='text-xl py-2'>Annual Sports</h2>
                </div>
                <div className='p-5 shadow-xl text-center'>
                    <div className='flex justify-center'>
                        <Link to='/sportGallery'><img className='w-[300px]' src={sport} alt="sports" /></Link>
                    </div>
                    <h2 style={{ fontFamily: 'Merienda' }} className='text-xl py-2'>Annual Sports</h2>
                </div>
                <div className='p-5 shadow-xl text-center'>
                    <div className='flex justify-center'>
                        <Link to='/sportGallery'><img className='w-[300px]' src={sport} alt="sports" /></Link>
                    </div>
                    <h2 style={{ fontFamily: 'Merienda' }} className='text-xl py-2'>Annual Sports</h2>
                </div>
                <div className='p-5 shadow-xl text-center'>
                    <div className='flex justify-center'>
                        <Link to='/sportGallery'><img className='w-[300px]' src={sport} alt="sports" /></Link>
                    </div>
                    <h2 style={{ fontFamily: 'Merienda' }} className='text-xl py-2'>Annual Sports</h2>
                </div>
                <div className='p-5 shadow-xl text-center'>
                    <div className='flex justify-center'>
                        <Link to='/sportGallery'><img className='w-[300px]' src={sport} alt="sports" /></Link>
                    </div>
                    <h2 style={{ fontFamily: 'Merienda' }} className='text-xl py-2'>Annual Sports</h2>
                </div>
                <div className='p-5 shadow-xl text-center'>
                    <div className='flex justify-center'>
                        <Link to='/sportGallery'><img className='w-[300px]' src={sport} alt="sports" /></Link>
                    </div>
                    <h2 style={{ fontFamily: 'Merienda' }} className='text-xl py-2'>Annual Sports</h2>
                </div>
            </div>
        </div>
    );
};

export default Images;