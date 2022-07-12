import React from 'react';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto'>
            <div className='w-full'>
                <div className='w-8/12'>
                    <Banner></Banner>
                </div>
                <div className='w-4/12'>

                </div>
            </div>
        </div>
    );
};

export default Home;