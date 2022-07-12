import React from 'react';
import { Link } from 'react-router-dom';
import vicePrinciple from '../../images/principle.png';

const VicePrinciple = () => {
    return (
        <div className='relative mt-[128px]'>
            <h2 className='bg-primary p-3 pl-5 my-4 text-white text-lg principle'>Message from Vice-Principle</h2>
            <div className='flex items-center justify-center pb-3'>
                <img className='w-[250px]' src={vicePrinciple} alt="principle" />
            </div>
            <h2 className='text-xl font-bold'>Mr.Khondokar Mosharrof</h2>
            <h3>Vice-Principle of Katirhat High School</h3>
            <address>Katirhat, Hathazari, Chattogram</address>
            <Link className='text-secondary text-xl' to='/'>Read Message ...</Link>
        </div>
    );
};

export default VicePrinciple;