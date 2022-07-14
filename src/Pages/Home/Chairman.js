import React from 'react';
import { Link } from 'react-router-dom';
import chairman from '../../images/principle.png';

const Chairman = () => {
    return (
        <div className='relative'>
            <h2 className='bg-primary p-3 pl-5 my-4 text-white text-lg principle'>Message from Chairman</h2>
            <div className='flex items-center justify-center pb-3'>
                <img className='w-[250px]' src={chairman} alt="principle" />
            </div>
            <h2 className='text-xl font-bold'>Mr.Bill Gates</h2>
            <h3>Chairman of Katirhat High School</h3>
            <address>Katirhat, Hathazari, Chattogram</address>
            <Link className='text-secondary text-xl' to='/chairmanMessage'>Read Message ...</Link>
        </div>
    );
};

export default Chairman;