import React from 'react';
import { Link } from 'react-router-dom';
import teachers from '../../images/principle.png';

const TeachersMessage = () => {
    return (
        <div className='relative mt-6 md:mt-[128px]'>
            <h2 className='bg-primary p-3 pl-5 my-4 text-white text-lg principle' > Message from Teachers</h2>
            <div className='flex items-center justify-center pb-3'>
                <img className='w-[250px]' src={teachers} alt="principle" />
            </div>
            <h2 className='text-xl font-bold'>Mr.Abdul Baset</h2>
            <h3>Teacher of Katirhat High School</h3>
            <address>Katirhat, Hathazari, Chattogram</address>
            <Link className='text-secondary text-xl' to='/'>Read Message ...</Link>
        </div>
    );
};

export default TeachersMessage;