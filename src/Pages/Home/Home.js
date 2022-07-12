import React from 'react';
import Banner from './Banner';
import Principle from './Principle';

const Home = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto'>
            <div className='w-full flex'>
                <div className='w-8/12 py-3'>
                    <Banner></Banner>
                </div>
                <div className='w-4/12 py-3 ml-3'>
                    <Principle></Principle>
                </div>
            </div>
        </div>
    );
};

export default Home;