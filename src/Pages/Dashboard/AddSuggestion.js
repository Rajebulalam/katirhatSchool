import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";

const AddSuggestion = () => {

    const { register, handleSubmit } = useForm();

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
                if (result.success) {
                    const img = result.data.url;
                    const problem = {
                        date: data.date,
                        month: data.month,
                        year: data.year,
                        author: data.author,
                        grade: data.grade,
                        roll: data.roll,
                        subject: data.subject,
                        details: data.details,
                        img: img
                    }

                    // Send to the data base
                    fetch('https://still-sea-84749.herokuapp.com/studentSuggestion', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(problem)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success('Suggestion Added');
                            console.log(data);
                        })
                }
            })
    }

    return (
        <div className='p-5'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-center font-bold text-2xl pb-4'>Add Suggestion</h2>
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
                    <div className="pb-4 block md:flex items-center">
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 font-bold text-white' htmlFor="education">Image</label>
                        <input className='w-full md:w-9/12 bg-slate-200 p-2 lg:max-w-lg rounded-sm' type="file" {...register("image", { required: true })} />
                    </div>
                    <div className='flex items-center justify-center'>
                        <button type="submit" className='btn bg-primary text-white'>Add Suggestion</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddSuggestion;