import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';
import AdminProfile from './AdminProfile';

const AdminsProfile = () => {

    const { register, handleSubmit } = useForm();

    const admins = JSON.parse(localStorage.getItem("admin"));
   

    const { data: users, isLoading, refetch } = useQuery(['singleUsers'], () =>
        fetch(`https://still-sea-84749.herokuapp.com/admins?admin=${admins?.admin}`).then(
            res => res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>;
    }

    const adminId = admins?.admin;
    const adminPass = admins?.password;

    const imageStorageKey = 'eb758106d1c4650d8ab4d6a4ff0243a9';

    const onSubmit = async data => {
        const image = data.image[0];
        let formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result?.success) {
                    const img = result.data.url;
                    const update = {
                        name: data.name,
                        designation: data.designation,
                        join: data.join,
                        phone: data.phone,
                        city: data.city,
                        village: data.village,
                        bari: data.bari,
                        word: data.word,
                        facebook: data.facebook,
                        img: img
                    }

                    // Send to the data base
                    fetch(`https://still-sea-84749.herokuapp.com/admins/${adminId}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(update)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success('Profile Updated');
                            refetch();
                        })
                }
            })
    }

    return (
        <div className='w-full block lg:flex'>
            <div className='w-full lg:w-6/12 p-4 bg-primary rounded-sm mb-3 lg:mb-0 mr-0 lg:mr-2'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-center text-3xl font-bold text-neutral py-3'>My Profile</h2>
                <div className='text-center'>
                    <p style={{ fontFamily: 'Merienda' }} className='text-xl font-bold text-white'> Admin Id: {adminId} </p>
                    <p style={{ fontFamily: 'Merienda' }} className='text-xl text-white font-medium'>Admin Password: {adminPass} </p>
                    {
                        users?.map(user => <AdminProfile
                            key={user._id}
                            user={user}
                        ></AdminProfile>)
                    }
                </div>
            </div>
            <div className='w-full lg:w-6/12 p-4 bg-primary rounded-sm mr-0 lg:ml-2'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-center text-3xl font-bold text-neutral py-3'>Update Profile</h2>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="pb-4">
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Name</label>
                            <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("name", { required: true })} />
                        </div>
                        <div className="pb-4">
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Designation</label>
                            <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("designation", { required: true })} />
                        </div>
                        <div className="pb-4">
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Joining Date</label>
                            <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("join", { required: true })} />
                        </div>
                        <div className="pb-4">
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Phone</label>
                            <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("phone", { required: true })} />
                        </div>
                        <div className="pb-4">
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">City</label>
                            <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("city", { required: true })} />
                        </div>
                        <div className="pb-4">
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Village</label>
                            <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("village", { required: true })} />
                        </div>
                        <div className="pb-4">
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Bari</label>
                            <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("bari", { required: true })} />
                        </div>
                        <div className="pb-4">
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Word No.</label>
                            <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("word", { required: true })} />
                        </div>
                        <div className="pb-4">
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Facebook</label>
                            <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("facebook", { required: true })} />
                        </div>
                        <div className='pb-4'>
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Upload Image</label>
                            <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="file" {...register("image", { required: true })} />
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

export default AdminsProfile;