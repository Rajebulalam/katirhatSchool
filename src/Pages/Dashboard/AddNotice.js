import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";

const AddNotice = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = async data => {
        const notice = {
            date: data.date,
            month: data.month,
            year: data.year,
            author: data.author,
            grade: data.grade,
            subject: data.subject,
            details: data.details
        }

        // Send to the data base
        fetch('https://still-sea-84749.herokuapp.com/studentNotice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(notice)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Notice Added');
                console.log(data);
            })
    }

    return (
        <div className='p-5'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-center font-bold text-2xl pb-4'>Add Notice</h2>
            <div className='bg-primary p-5 py-8 rounded w-full md:w-8/12 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="pb-4 block md:flex items-center">
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 font-bold text-white' htmlFor="education">Date</label>
                        <input className='w-full md:w-9/12 bg-slate-200 p-2 lg:max-w-lg rounded-sm' type="text" {...register("date", { required: true })} />
                    </div>
                    <div className="pb-4 block md:flex items-center">
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 font-bold text-white' htmlFor="education">Month</label>
                        <input className='w-full md:w-9/12 bg-slate-200 p-2 lg:max-w-lg rounded-sm' type="text" {...register("month", { required: true })} />
                    </div>
                    <div className="pb-4 block md:flex items-center">
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 font-bold text-white' htmlFor="education">Year</label>
                        <input className='w-full md:w-9/12 bg-slate-200 p-2 lg:max-w-lg rounded-sm' type="text" {...register("year", { required: true })} />
                    </div>
                    <div className="pb-4 block md:flex items-center">
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 font-bold text-white' htmlFor="education">Author</label>
                        <input className='w-full md:w-9/12 bg-slate-200 p-2 lg:max-w-lg rounded-sm' type="text" {...register("author", { required: true })} />
                    </div>
                    <div className="pb-4 block md:flex items-center">
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 font-bold text-white' htmlFor="education">Grade</label>
                        <input className='w-full md:w-9/12 bg-slate-200 p-2 lg:max-w-lg rounded-sm' type="text" {...register("grade", { required: true })} />
                    </div>
                    <div className="pb-4 block md:flex items-center">
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 font-bold text-white' htmlFor="education">Subject</label>
                        <input className='w-full md:w-9/12 bg-slate-200 p-2 lg:max-w-lg rounded-sm' type="text" {...register("subject", { required: true })} />
                    </div>
                    <div className="pb-4 block md:flex items-center">
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 font-bold text-white' htmlFor="education">Details</label>
                        <input className='w-full md:w-9/12 bg-slate-200 p-2 lg:max-w-lg rounded-sm' type="text" {...register("details", { required: true })} />
                    </div>
                    <div className='flex items-center justify-center'>
                        <button type="submit" className='btn bg-primary text-white'>Add Notice</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNotice;