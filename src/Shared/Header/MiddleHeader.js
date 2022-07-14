import React from 'react';
import logo from '../../images/school-logo.png';

const MiddleHeader = () => {
    return (
        <div className='flex items-center justify-center w-full md:w-7/12 px-4 md:px-6 mx-auto'>
            <div>
                <img className=' w-[100px] sm:w-[150px] sm:h-[150px]' src={logo} alt="logo" />
            </div>
            <div>
                <h1 className='font-bold text-2xl md:text-4xl'>Katirhat High School</h1>
            </div>
        </div>
    );
};

export default MiddleHeader;