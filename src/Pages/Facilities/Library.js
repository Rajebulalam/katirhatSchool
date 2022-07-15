import React from 'react';
import library from '../../images/library.jpg';

const Library = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl pb-8 text-center font-bold'>Our Library</h2>
            <img className='w-full h-[350px] lg:h-[500px]' src={library} alt="library" />
            <h3 style={{ fontFamily: 'Merienda' }} className='text-xl pt-6 text-center'>The only thing that you absolutely have to know, is the location of the library.</h3>
        </div>
    );
};

export default Library;