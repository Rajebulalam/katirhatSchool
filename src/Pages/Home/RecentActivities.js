import React from 'react';
import { Link } from 'react-router-dom';

const RecentActivities = () => {
    return (
        <div className='relative mt-6 md:mt-[192px]'>
            <h2 className='bg-primary p-3 pl-5 my-4 text-white text-lg principle' >Recent Activities</h2>
            <p><Link className='text-secondary' to='/'>10th August Guardian Meeting</Link></p>
            <p><Link className='text-secondary' to='/'>15Tth August Celebrate</Link></p>
            <p><Link className='text-secondary' to='/'>30th Teachers Meeting</Link></p>
        </div>
    );
};

export default RecentActivities;