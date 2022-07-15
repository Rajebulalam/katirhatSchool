import React from 'react';
import { Link } from 'react-router-dom';
import school from '../../images/logo.png';
import './MainHeader.css';

const MainHeader = () => {

    const menuItem = <>
        <li><Link className='text-white font-semibold hover:text-neutral' to='/'>Home</Link></li>
        <li tabIndex="0">
            <Link className='text-white font-semibold hover:text-neutral' to='/'>
                Academic
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-2 bg-primary z-50">
                <li><Link className='text-white font-semibold hover:text-neutral' to='/academicHour'>Academic Hours</Link></li>
                <li><Link className='text-white font-semibold hover:text-neutral' to='/academicCalender'>Academic Calender</Link></li>
                <li><Link className='text-white font-semibold hover:text-neutral' to='/classRoutine'>Class Routine</Link></li>
                <li><Link className='text-white font-semibold hover:text-neutral' to='/extraCurricular'>Extra Co-curricular Activities</Link></li>
                <li><Link className='text-white font-semibold hover:text-neutral' to='/'>Book List</Link></li>
                <li><Link className='text-white font-semibold hover:text-neutral' to='/syllabus'>Syllabus</Link></li>
                <li><Link className='text-white font-semibold hover:text-neutral' to='/teachers'>Teachers</Link></li>
                <li><Link className='text-white font-semibold hover:text-neutral' to='/staff'>Staff</Link></li>
            </ul>
        </li>
        <li tabIndex="0">
            <Link className='text-white font-semibold hover:text-neutral' to='/'>
                Facilities
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-2 bg-primary z-50">
                <li><Link className='text-white font-semibold hover:text-neutral' to='/library'>Library</Link></li>
                <li><Link className='text-white font-semibold hover:text-neutral' to='/canteen'>Canteen</Link></li>
                <li><Link className='text-white font-semibold hover:text-neutral' to='/guardian'>Guardian Shed</Link></li>
                <li><Link className='text-white font-semibold hover:text-neutral' to='/sport'>Sports</Link></li>
                <li><Link className='text-white font-semibold hover:text-neutral' to='/prayer'>Prayer Room</Link></li>
            </ul>
        </li>
        <li><Link className='text-white font-semibold hover:text-neutral' to='/notice'>Notices</Link></li>
        <li tabIndex="0">
            <Link className='text-white font-semibold hover:text-neutral' to='/'>
                Gallery
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-2 bg-primary z-50">
                <li><Link className='text-white font-semibold hover:text-neutral' to='/images'>Images</Link></li>
                <li><Link className='text-white font-semibold hover:text-neutral' to='/'>Videos</Link></li>
            </ul>
        </li>
        <li tabIndex="0">
            <Link className='text-white font-semibold hover:text-neutral' to='/'>
                Admission
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-2 bg-primary z-50">
                <li><Link className='text-white font-semibold hover:text-neutral' to='/'>Admission Instruction</Link></li>
                <li><Link className='text-white font-semibold hover:text-neutral' to='/'>Online Admission</Link></li>
            </ul>
        </li>
        <li><Link className='text-white font-semibold hover:text-neutral' to='/'>About</Link></li>
        <li><Link className='text-white font-semibold hover:text-neutral' to='/'>Contact</Link></li>
        <li tabIndex="0">
            <Link className='text-white font-semibold hover:text-neutral' to='/'>
                Login
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-2 bg-primary z-50">
                <li><Link className='text-white font-semibold hover:text-neutral' to='/'>Teachers Panel</Link></li>
                <li><Link className='text-white font-semibold hover:text-neutral' to='/'>Student Panel</Link></li>
            </ul>
        </li>
    </>

    return (
        <div className="navbar bg-primary main-top">
            <div className='w-full lg:w-11/12 px-4 md:px-6 mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 z-20">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/' className="mt-[-22px] normal-case text-xl hidden lg:block"><img className='w-[50px]' src={school} alt="logo" /></Link>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl navbar-end lg:hidden"><img className='w-[50px]' src={school} alt="logo" /></Link>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;