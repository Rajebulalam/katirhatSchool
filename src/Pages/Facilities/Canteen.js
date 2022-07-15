import React from 'react';
import canteen from '../../images/canteen.jpg';

const Canteen = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl pb-8 text-center font-bold'>Our Canteen</h2>
            <img className='w-full' src={canteen} alt="canteen" />
        </div>
    );
};

export default Canteen;