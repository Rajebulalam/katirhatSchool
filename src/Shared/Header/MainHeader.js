import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import school from '../../images/logo.png';
import './MainHeader.css';
import { toast } from 'react-toastify';

const MainHeader = () => {

    const navigate = useNavigate();

    const student = localStorage.getItem('student');
    const teacher = localStorage.getItem('teacher');
    const admin = localStorage.getItem('admin');

    const logOut = async () => {
        localStorage.removeItem('student');
        localStorage.removeItem('teacher');
        localStorage.removeItem('admin');
        navigate('/home');
        toast.success('Log out successfully');
    }

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
                <li><Link className='text-white font-semibold hover:text-neutral' to='/video'>Videos</Link></li>
            </ul>
        </li>
        <li tabIndex="0">
            <Link className='text-white font-semibold hover:text-neutral' to='/'>
                Admission
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-2 bg-primary z-50">
                <li><Link className='text-white font-semibold hover:text-neutral' to='/admissionInstruction'>Admission Instruction</Link></li>
                <li><Link className='text-white font-semibold hover:text-neutral' to='/onlineAdmission'>Online Admission</Link></li>
            </ul>
        </li>
        <li><Link className='text-white font-semibold hover:text-neutral' to='/history'>About</Link></li>
        <li><Link className='text-white font-semibold hover:text-neutral' to='/contact'>Contact</Link></li>
        {
            student === null ? ' ' : <li><Link className='text-white font-semibold hover:text-neutral' to='/dashboard'>Dashboard</Link></li>
        }
        {
            teacher === null ? ' ' : <li><Link className='text-white font-semibold hover:text-neutral' to='/dashboard'>Dashboard</Link></li>
        }
        {
            admin === null ? ' ' : <li><Link className='text-white font-semibold hover:text-neutral' to='/dashboard'>Dashboard</Link></li>
        }
        {
            admin || teacher || student ? <button onClick={logOut} className="btn btn-outline w-[110px] mx-1 sm:mt-2 text-white lg:mt-[-1px]"><Link to='/home'>Log Out</Link></button> : <li tabIndex="0">
                <Link className='text-white font-semibold hover:text-neutral' to='/'>
                    Login
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </Link>
                <ul className="p-2 bg-primary z-50">
                    <li><Link className='text-white font-semibold hover:text-neutral' to='/teacherLogin'>Teachers Panel</Link></li>
                    <li><Link className='text-white font-semibold hover:text-neutral' to='/studentLogin'>Student Panel</Link></li>
                    <li><Link className='text-white font-semibold hover:text-neutral' to='/admin'>Admin</Link></li>
                </ul>
            </li>
        }
    </>

    return (
        <div className="navbar bg-primary main-top">
            <div className='w-full lg:w-11/12 px-4 md:px-6 mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 z-20">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/' className="mt-[-22px] normal-case text-xl hidden lg:block"><img className='w-[50px]' src={school} alt="logo" /></Link>
                </div>
                {
                    student ? <Link to='/' className="btn btn-ghost normal-case text-xl navbar-center lg:hidden"><img className='w-[50px]' src={school} alt="logo" /></Link> : <Link to='/' className="btn btn-ghost normal-case text-xl navbar-end lg:hidden"><img className='w-[50px]' src={school} alt="logo" /></Link>
                }
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
                {
                    student && <div className="navbar-end flex lg:hidden">
                        <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost navbar-end drawer-button lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                }
            </div>
        </div>
    );
};

export default MainHeader;