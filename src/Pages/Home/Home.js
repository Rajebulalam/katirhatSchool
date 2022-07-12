import React from 'react';
import Banner from './Banner';
import Chairman from './Chairman';
import Event from './Event';
import Explore from './Explore';
import Facebook from './RecentActivities';
import Principle from './Principle';
import TeachersMessage from './TeachersMessage';
import UseFullLink from './UseFullLink';
import VicePrinciple from './VicePrinciple';

const Home = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto'>
            <div className='w-full flex'>
                <div className='w-8/12 py-3'>
                    <Banner></Banner>
                    <Event></Event>
                </div>
                <div className='w-4/12 py-3 ml-3'>
                    <Chairman></Chairman>
                    <Principle></Principle>
                    <VicePrinciple></VicePrinciple>
                    <TeachersMessage></TeachersMessage>
                    <Explore></Explore>
                    <UseFullLink></UseFullLink>
                    <Facebook></Facebook>
                </div>
            </div>
        </div>
    );
};

export default Home;