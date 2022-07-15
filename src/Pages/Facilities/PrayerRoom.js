import React from 'react';
import prayer from '../../images/prayer.jpg';

const PrayerRoom = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl pb-8 text-center font-bold'>Our Prayer Room</h2>
            <img className='w-full' src={prayer} alt="prayerRoom" />
            <p style={{ fontFamily: 'Merienda' }} className='pt-5 text-center text-xl'>And when you have completed the prayer, remember Allah standing, sitting, or [lying] on your sides. But when you become secure, re-establish [regular] prayer. Indeed, prayer has been decreed upon the believers a decree of specified times.</p>
        </div>
    );
};

export default PrayerRoom;