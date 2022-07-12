import React from 'react';
import { Link } from 'react-router-dom';

const UseFullLink = () => {
    return (
        <div className='relative mt-[40px]'>
            <h2 className='bg-primary p-3 pl-5 my-4 text-white text-lg principle'>Useful Link</h2>
            <p><Link className='text-secondary' to='/'>Education Board</Link></p>
            <p><Link className='text-secondary' to='/'>Google</Link></p>
            <p><Link className='text-secondary' to='/'>Math Olympiad</Link></p>
            <p><Link className='text-secondary' to='/'>English News Paper</Link></p>
            <p><Link className='text-secondary' to='/'>Education Ministry</Link></p>
        </div>
    );
};

export default UseFullLink; 