import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './TopHeader.css';

const TopHeader = () => {
    return (
        <div className='bg-primary py-3'>
            <div className='flex justify-between w-full lg:w-11/12 px-4 lg:px-6 mx-auto'>
                <div>
                    <ul className='flex top'>
                        <li><Link className='text-white font-semibold pr-3 text-lg' to="/">School EIIN: 138221</Link></li>
                        <li><Link className='text-white font-semibold pl-3 text-lg' to="/">School Code : 1334</Link></li>
                    </ul>
                </div>
                <div className='flex top'>
                    <h2 className='text-white font-semibold text-lg pr-3'> <span> <FontAwesomeIcon className='fontawesome pr-2' icon={faPhoneAlt}></FontAwesomeIcon> </span>  + 01800-000000</h2>
                    <h2 className='text-white font-semibold text-lg pl-3'> <span><FontAwesomeIcon className='fontawesome pr-2' icon={faEnvelope}></FontAwesomeIcon></span> rajebulalam27@gmail.com</h2>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;