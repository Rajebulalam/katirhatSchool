import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";

const AddTeacher = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = async data => {
        const add = {
            teacher: data.teacher,
            password: data.password,
        }

        // Send to the data base
        fetch('https://still-sea-84749.herokuapp.com/addTeachers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Student Added');
                console.log(data);
            })
    }

    return (
        <div>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl font bold pb-6 text-center'>Add Teacher</h2>
            <div className='bg-primary p-5 py-8 rounded w-full md:w-8/12 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="pb-4 block md:flex items-center">
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 font-bold text-white' htmlFor="education">Teacher Id</label>
                        <input className='w-full md:w-9/12 bg-slate-200 p-2 lg:max-w-lg rounded-sm' type="text" {...register("teacher", { required: true })} />
                    </div>
                    <div className="pb-4 block md:flex items-center">
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 font-bold text-white' htmlFor="education">Teacher Password</label>
                        <input className='w-full md:w-9/12 bg-slate-200 p-2 lg:max-w-lg rounded-sm' type="text" {...register("password", { required: true })} />
                    </div>
                    <div className='flex items-center justify-center'>
                        <button type="submit" className='btn bg-primary text-white'>Add Teacher</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTeacher;