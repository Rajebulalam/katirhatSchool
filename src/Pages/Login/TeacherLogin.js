import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';

const TeacherLogin = () => {

    // Teacher Login Load
    const { data: educator, isLoading } = useQuery(['teachers'], () =>
        fetch(`https://still-sea-84749.herokuapp.com/allTeachers`).then(
            res => res.json()
        )
    )

    // Taken User Id from Input
    const [teacherId, setTeacherId] = useState('');
    const handleTeacherId = event => {
        setTeacherId(event.target.value);
        console.log(event.target.value);
    }

    // Taken User Password from Input
    const [teacherPass, setTeacherPass] = useState('');
    const handleTeacherPass = event => {
        setTeacherPass(event.target.value);
        console.log(event.target.value);
    }

    // Navigate
    const navigate = useNavigate();

    // Loading
    if (isLoading) {
        return <Loading></Loading>;
    }

    // Submit Taken Input
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Find Id with Users Input
        const loginResult = educator?.find(teachers => teachers.teacher === teacherId && teachers.password === teacherPass);
        console.log(loginResult);

        if (loginResult) {
            localStorage.setItem('teacher', JSON.stringify(loginResult));
            navigate('/home');
            toast.success('Login Successfully');
            window.location.reload();
        }
        else {
            toast.error('Login failed');
        }
        event.target.reset();
    }

    return (
        <div className='w-full md:w-11/12 px-4 md:px-6 mx-auto py-12'>
            <h2 style={{ fontFamily: 'Merienda' }} className='pb-6 text-3xl text-neutral font-bold text-center'>Login As A Teacher</h2>
            <div className='w-full md:w-6/12 p-3 py-12 mx-auto bg-slate-200 rounded-sm'>
                <form onSubmit={handleSubmit}>
                    <div className='w-full block md:flex items-center'>
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 text-xl' htmlFor="teacherId">Teacher ID : </label>
                        <input onBlur={handleTeacherId} type="text" name='teacherId' placeholder='Teacher Id' id='teacherId' className='border w-full md:w-9/12 p-2 outline-none' />
                    </div>
                    <div className='w-full block md:flex items-center mt-3'>
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 text-xl' htmlFor="teacherId">Password : </label>
                        <input onBlur={handleTeacherPass} type="password" name='password' id='teacherId' placeholder='password' className='border w-full md:w-9/12 p-2 outline-none' />
                    </div>
                    <div className='flex justify-center mt-6'>
                        <button className='btn w-[150px] text-white bg-primary' type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TeacherLogin;