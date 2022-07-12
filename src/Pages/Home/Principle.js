import React from 'react';
import './Principle.css';
import principle from '../../images/principle.png';
import { Link } from 'react-router-dom';

const Principle = () => {
    return (
        <div className='relative'>
            <h2 className='bg-primary p-3 pl-5 my-4 text-white text-lg principle'>Message from Principle</h2>
            <div className='flex items-center justify-center pb-3'>
                <img className='w-[200px]' src={principle} alt="principle" />
            </div>
            <h2 className='text-xl font-bold'>Mr.Bill Gates</h2>
            <h3>Principle of Katirhat High School</h3>
            <address>Katirhat, Hathazari, Chattogram</address>
            <Link className='text-secondary text-xl' to='/'>Read Message ...</Link>
        </div>
    );
};

export default Principle;