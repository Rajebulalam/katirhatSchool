import React, { useState } from 'react';

const TeacherLogin = () => {



    const [teacherId, setTeacherId] = useState('');
    const handleTeacherId = event => {
        setTeacherId(event.target.value);
        console.log(event.target.value);
    }

    const [teacherPass, setTeacherPass] = useState('');
    const handleTeacherPass = event => {
        setTeacherPass(event.target.value);
        console.log(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(teacherId, teacherPass);
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