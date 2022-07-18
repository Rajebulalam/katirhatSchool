import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center bg-slate-200">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <h2>Dashboard</h2>

                </div>
                <div style={{ borderRight: '7px solid #F9A825' }} className="drawer-side border-r-neutral">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-slate-200 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link className='bg-primary hover:bg-blue-900 text-white font-medium' to='/'>My Profile</Link></li>
                        <li><Link className='bg-primary hover:bg-blue-900 text-white font-medium mt-2' to='/'>Blogs</Link></li>
                        <li><Link className='bg-primary hover:bg-blue-900 text-white font-medium mt-2' to='/'>Problems</Link></li>
                        <li><Link className='bg-primary hover:bg-blue-900 text-white font-medium mt-2' to='/'>Add Blogs</Link></li>
                        <li><Link className='bg-primary hover:bg-blue-900 text-white font-medium mt-2' to='/'>Add Problems</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;