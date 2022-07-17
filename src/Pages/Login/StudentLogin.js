import React, { useEffect, useState } from 'react';

const StudentLogin = () => {

    const [studentsLogin, setStudentsLogin] = useState([]);

    useEffect(() => {
        fetch('studentLogin.json')
            .then(res => res.json())
            .then(data => setStudentsLogin(data))
    }, [])

    const [studentId, setStudentId] = useState('');
    const handleStudentId = event => {
        setStudentId(event.target.value);
        console.log(event.target.value);
    }

    const [studentPass, setStudentPass] = useState('');
    const handleStudentPass = event => {
        setStudentPass(event.target.value);
        console.log(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const loginResult = studentsLogin.find(students => students.student === studentId && students.password === studentPass);
        console.log(loginResult);

        if (loginResult) {
            console.log('Match The Id For');
        }
        else {
            console.log('Does not Match');
        }
        event.target.reset();
    }

    return (
        <div className='w-full md:w-11/12 px-4 md:px-6 mx-auto py-12'>
            <h2 style={{ fontFamily: 'Merienda' }} className='pb-6 text-3xl text-neutral font-bold text-center'>Login As A Student</h2>
            <div className='w-full md:w-6/12 p-3 py-12 mx-auto bg-slate-200 rounded-sm'>
                <form onSubmit={handleSubmit}>
                    <div className='w-full block md:flex items-center'>
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 text-xl' htmlFor="studentId">Student ID : </label>
                        <input onBlur={handleStudentId} type="text" name='id' placeholder='Student Id' className='border w-full md:w-9/12 p-2 outline-none' />
                    </div>
                    <div className='w-full block md:flex items-center mt-3'>
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 text-xl' htmlFor="studentId">Password : </label>
                        <input onBlur={handleStudentPass} type="password" name='password' placeholder='password' className='border w-full md:w-9/12 p-2 outline-none' />
                    </div>
                    <div className='flex justify-center mt-6'>
                        <button className='btn w-[150px] text-white bg-primary' type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StudentLogin;