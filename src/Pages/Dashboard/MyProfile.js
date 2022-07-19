import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Profile from './Profile';

const MyProfile = () => {

    const students = JSON.parse(localStorage.getItem("student"));

    const { data: users, isLoading, refetch } = useQuery(['singleUsers'], () =>
        fetch(`http://localhost:5000/students?student=${students?.student}`).then(
            res => res.json()
        )
    )

    if (isLoading || null) {
        return 'loading....';
    }

    const studentId = students?.student;
    const studentPass = students?.password;

    const updateProfile = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const grade = event.target.grade.value;
        const roll = event.target.roll.value;
        const phone = event.target.phone.value;
        const city = event.target.city.value;
        const village = event.target.village.value;
        const bari = event.target.bari.value;
        const word = event.target.word.value;
        const facebook = event.target.facebook.value;
        const img = event.target.img.value;
        const update = {
            name,
            grade,
            roll,
            phone,
            city,
            village,
            bari,
            word,
            facebook,
            img
        };

        fetch(`http://localhost:5000/students/${studentId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })
    }


    return (
        <div className='w-full block lg:flex'>
            <div className='w-full lg:w-6/12 p-4 bg-primary rounded-sm mb-3 lg:mb-0 mr-0 lg:mr-2'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-center text-3xl font-bold text-neutral py-3'>My Profile</h2>
                <div className='text-center'>
                    <p style={{ fontFamily: 'Merienda' }} className='text-xl font-bold text-white'> Student Id: {studentId} </p>
                    <p style={{ fontFamily: 'Merienda' }} className='text-xl text-white font-medium'>Student Pass: {studentPass} </p>
                    {
                        users?.map(user => <Profile
                            key={user._id}
                            user={user}
                        ></Profile>)
                    }
                </div>
            </div>
            <div className='w-full lg:w-6/12 p-4 bg-primary rounded-sm mr-0 lg:ml-2'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-center text-3xl font-bold text-neutral py-3'>Update Profile</h2>
                <div>
                    <form onSubmit={updateProfile}>
                        <div className="pb-4">
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Name</label>
                            <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" name="name" id="name" />
                        </div>
                        <div className="pb-4">
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="district">Grade</label>
                            <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" name="grade" id="grade" />
                        </div>
                        <div className="pb-4">
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="city">Roll</label>
                            <input className='bg-slate-200 p-3 w-full lg:max-w-lg rounded-sm' type="text" name="roll" id="roll" />
                        </div>
                        <div className="pb-4">
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="phone">Phone</label>
                            <input className='bg-slate-200 p-3 w-full lg:max-w-lg rounded-sm' type="text" name="phone" id="phone" />
                        </div>
                        <div className="pb-4">
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="phone">City</label>
                            <input className='bg-slate-200 p-3 w-full lg:max-w-lg rounded-sm' type="text" name="city" id="city" />
                        </div>
                        <div className="pb-4">
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="phone">Village</label>
                            <input className='bg-slate-200 p-3 w-full lg:max-w-lg rounded-sm' type="text" name="village" id="village" />
                        </div>
                        <div className="pb-4">
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="phone">Bari</label>
                            <input className='bg-slate-200 p-3 w-full lg:max-w-lg rounded-sm' type="text" name="bari" id="bari" />
                        </div>
                        <div className="pb-4">
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="phone">Word No</label>
                            <input className='bg-slate-200 p-3 w-full lg:max-w-lg rounded-sm' type="text" name="word" id="word" />
                        </div>
                        <div className='pb-4'>
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="linkedin">Facebook Link</label>
                            <input className='bg-slate-200 p-3 w-full lg:max-w-lg rounded-sm' type="text" name="facebook" id="facebook" />
                        </div>
                        <div className="pb-4">
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="img">Image Link</label>
                            <input className='bg-slate-200 p-3 w-full lg:max-w-lg rounded-sm' type="text" name="img" id="img" />
                        </div>
                        <div className='flex items-start justify-center'>
                            <button type="submit" className='btn'>Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;