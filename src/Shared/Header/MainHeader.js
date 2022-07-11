import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import school from '../../images/logo.png';
import './MainHeader.css';

const MainHeader = () => {
    return (
        <div className='bg-primary main-top'>
            <div className='flex justify-between items-center w-full lg:w-11/12 px-4 md:px-6 mx-auto'>
                <div>
                    <img className='w-[50px]' src={school} alt="logo" />
                </div>
                <nav>
                    <ul className='flex main'>
                        <li className='px-3 py-4'><Link className='text-white font-semibold text-lg' to="/">Home</Link></li>
                        <li className='px-3 py-4'><Link className='text-white font-semibold text-lg' to="/">Academic <span><FontAwesomeIcon className='pl-1' icon={faAngleDown}></FontAwesomeIcon></span> </Link>
                            <ul className='dropdown'>
                                <li><Link to="/">Academic Hours</Link></li>
                                <li><Link to="/">Academic Calender</Link></li>
                                <li><Link to="/">Class Routine</Link></li>
                                <li><Link to="/">Extra Co-curricular Activities</Link></li>
                                <li><Link to="/">Bool List</Link></li>
                                <li><Link to="/">Syllabus</Link></li>
                                <li><Link to="/">Teachers</Link></li>
                                <li><Link to="/">Stuffs</Link></li>
                            </ul>
                        </li>
                        <li className='px-3 py-4'><Link className='text-white font-semibold text-lg' to="/">Students</Link></li>
                        <li className='px-3 py-4'><Link className='text-white font-semibold text-lg' to="/">Facilities <span><FontAwesomeIcon className='pl-1' icon={faAngleDown}></FontAwesomeIcon></span> </Link>
                            <ul className='dropdown'>
                                <li><Link to="/">Library</Link></li>
                                <li><Link to="/">Canteen</Link></li>
                                <li><Link to="/">Guardian Shed</Link></li>
                                <li><Link to="/">Sports</Link></li>
                                <li><Link to="/">Prayer Room</Link></li>
                            </ul>
                        </li>
                        <li className='px-3 py-4'><Link className='text-white font-semibold text-lg' to="/">Notices</Link></li>
                        <li className='px-3 py-4'><Link className='text-white font-semibold text-lg' to="/">Gallery <span><FontAwesomeIcon className='pl-1' icon={faAngleDown}></FontAwesomeIcon></span> </Link>
                            <ul className='dropdown'>
                                <li><Link to="/">Image</Link></li>
                                <li><Link to="/">Video</Link></li>
                            </ul>
                        </li>
                        <li className='px-3 py-4'><Link className='text-white font-semibold text-lg' to="/">Admission <span><FontAwesomeIcon className='pl-1' icon={faAngleDown}></FontAwesomeIcon></span> </Link>
                            <ul className='dropdown'>
                                <li><Link to="/">Admission Instruction</Link></li>
                                <li><Link to="/">Online Admission</Link></li>
                            </ul>
                        </li>
                        <li className='px-3 py-4'><Link className='text-white font-semibold text-lg' to="/">About Us</Link></li>
                        <li className='px-3 py-4'><Link className='text-white font-semibold text-lg' to="/">Contact Us</Link></li>
                        <li className='px-3 py-4'><Link className='text-white font-semibold text-lg' to="/">login <span><FontAwesomeIcon className='pl-1' icon={faAngleDown}></FontAwesomeIcon></span> </Link>
                            <ul className='dropdown-left'>
                                <li><Link to="/">Students Panel</Link></li>
                                <li><Link to="/">Teachers Panel</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default MainHeader;