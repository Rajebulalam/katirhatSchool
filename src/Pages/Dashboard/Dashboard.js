import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

    const student = localStorage.getItem('student');
    const teacher = localStorage.getItem('teacher');
    const admin = localStorage.getItem('admin');

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col bg-slate-200 p-5">
                    <Outlet></Outlet>
                </div>
                <div style={{ borderRight: '7px solid #F9A825' }} className="drawer-side border-r-neutral">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-slate-200 text-base-content">
                        {
                            student && <li><Link className='bg-primary hover:bg-blue-900 text-white font-medium' to='/dashboard'>My Profile</Link></li>
                        }
                        {
                            teacher && <li><Link className='bg-primary hover:bg-blue-900 text-white font-medium' to='/dashboard'>My Profile</Link></li>
                        }
                        {
                            admin && <li><Link className='bg-primary hover:bg-blue-900 text-white font-medium' to='/dashboard'>My Profile</Link></li>
                        }
                        {
                            teacher && <li><Link className='bg-primary hover:bg-blue-900 text-white font-medium mt-2' to='/dashboard/students'>Students</Link></li>
                        }
                        {
                            admin && <li><Link className='bg-primary hover:bg-blue-900 text-white font-medium mt-2' to='/dashboard/students'>Students</Link></li>
                        }
                        <li><Link className='bg-primary hover:bg-blue-900 text-white font-medium mt-2' to='/dashboard/blogs'>Students Blog</Link></li>
                        <li><Link className='bg-primary hover:bg-blue-900 text-white font-medium mt-2' to='/dashboard/problems'>Students Problem</Link></li>
                        <li><Link className='bg-primary hover:bg-blue-900 text-white font-medium mt-2' to='/dashboard/studentNotice'>Notices</Link></li>
                        <li><Link className='bg-primary hover:bg-blue-900 text-white font-medium mt-2' to='/dashboard/studentSuggestion'>Suggestions</Link></li>
                        {
                            student && <li><Link className='bg-primary hover:bg-blue-900 text-white font-medium mt-2' to='/dashboard/addBlogs'>Add Blogs</Link></li>
                        }
                        {
                            student && <li><Link className='bg-primary hover:bg-blue-900 text-white font-medium mt-2' to='/dashboard/addProblems'>Add Problems</Link></li>
                        }
                        {
                            teacher && <li><Link className='bg-primary hover:bg-blue-900 text-white font-medium mt-2' to='/dashboard/addStudentNotice'>Add Notice</Link></li>
                        }
                        {
                            teacher && <li><Link className='bg-primary hover:bg-blue-900 text-white font-medium mt-2' to='/dashboard/addSuggestion'>Add Suggestion</Link></li>
                        }
                        {
                            teacher && <li><Link className='bg-primary hover:bg-blue-900 text-white font-medium mt-2' to='/dashboard/addStudent'>Add Student</Link></li>
                        }
                        {
                            admin && <li><Link className='bg-primary hover:bg-blue-900 text-white font-medium mt-2' to='/dashboard/addTeacher'>Add Teacher</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;