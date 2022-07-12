import React from 'react';
import './Principle.css';
import principle from '../../images/principle.png';
import { Link } from 'react-router-dom';

const Principle = () => {
    return (
        <div className='relative mt-[114px]'>
            <h2 h2 className = 'bg-primary p-3 pl-5 my-4 text-white text-lg principle' > Message from Principle</h2>
            <div className='flex items-center justify-center pb-3'>
                <img className='w-[250px]' src={principle} alt="principle" />
            </div>
            <h2 className='text-xl font-bold'>Mr.Abdul Kuddus</h2>
            <h3>Principle of Katirhat High School</h3>
            <address>Katirhat, Hathazari, Chattogram</address>
            <Link className='text-secondary text-xl' to='/'>Read Message ...</Link>
        </div >
    );
};

export default Principle;