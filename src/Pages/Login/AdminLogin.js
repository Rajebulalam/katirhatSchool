import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminLogin = () => {

    // Admin Login Load
    const { data: admins, isLoading, formate: {error} } = useQuery(['admin'], () =>
        fetch(`https://still-sea-84749.herokuapp.com/admin`).then(
            res => res.json()
        )
    )

    // Taken User Id from Input
    const [adminId, setAdminId] = useState('');
    const handleAdminId = event => {
        setAdminId(event.target.value);
        console.log(event.target.value);
    }

    // Taken User Password from Input
    const [adminPass, setAdminPass] = useState('');
    const handleAdminPass = event => {
        setAdminPass(event.target.value);
        console.log(event.target.value);
    }

    // Navigate
    const navigate = useNavigate();

    // Loading
    if (isLoading) {
        return 'Loading...';
    }

    // Submit Taken Input
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Find Id with Users Input
        const loginResult = admins.find(adm => adm.admin === adminId && adm.password === adminPass);
        console.log(loginResult);

        if (loginResult) {
            localStorage.setItem('admin', JSON.stringify(loginResult));
            navigate('/home');
            toast.success('Login Successfylly');
            // window.location.reload();
        }
        else {
            toast.error('Login failed');
        }
        event.target.reset();
    }

    return (
        <div className='w-full md:w-11/12 px-4 md:px-6 mx-auto py-12'>
            <h2 style={{ fontFamily: 'Merienda' }} className='pb-6 text-3xl text-neutral font-bold text-center'>Login As A Admin</h2>
            <div className='w-full md:w-6/12 p-3 py-12 mx-auto bg-slate-200 rounded-sm'>
                <form onSubmit={handleSubmit}>
                    <div className='w-full block md:flex items-center'>
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 text-xl' htmlFor="studentId">Admin ID : </label>
                        <input onBlur={handleAdminId} type="text" name='id' placeholder='Student Id' className='border w-full md:w-9/12 p-2 outline-none' />
                    </div>
                    <div className='w-full block md:flex items-center mt-3'>
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 text-xl' htmlFor="studentId">Password : </label>
                        <input onBlur={handleAdminPass} type="password" name='password' placeholder='password' className='border w-full md:w-9/12 p-2 outline-none' />
                    </div>
                    <div className='flex justify-center mt-6'>
                        <button className='btn w-[150px] text-white bg-primary' type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;