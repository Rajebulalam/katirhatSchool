import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Explore = () => {
    return (
        <div className='relative mt-6 md:mt-[128px]'>
            <h2 className='bg-primary p-3 pl-5 my-4 text-white text-lg principle'>Explore</h2>
            <p> <Link className='text-secondary' to='/'><FontAwesomeIcon className='fontawesome'></FontAwesomeIcon> IT Club</Link> </p>
            <p> <Link className='text-secondary' to='/'><FontAwesomeIcon className='fontawesome'></FontAwesomeIcon> Current Affairs</Link> </p>
            <p> <Link className='text-secondary' to='/'><FontAwesomeIcon className='fontawesome'></FontAwesomeIcon> Science Club</Link> </p>
            <p> <Link className='text-secondary' to='/'><FontAwesomeIcon className='fontawesome'></FontAwesomeIcon> English News Paper</Link> </p>
        </div>
    );
};

export default Explore;