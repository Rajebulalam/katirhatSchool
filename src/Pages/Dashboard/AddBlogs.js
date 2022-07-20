import React from 'react';
import { toast } from 'react-toastify';

const AddBlogs = () => {

    const addStudentBlogs = event => {
        event.preventDefault();
        const date = event.target.date.value;
        const month = event.target.month.value;
        const year = event.target.year.value;
        const author = event.target.author.value;
        const subject = event.target.subject.value;
        const description = event.target.description.value;
        const blog = {
            date,
            month,
            year,
            author,
            subject,
            description
        };

        fetch('http://localhost:5000/studentsBlogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Blog Added');
                console.log(data);
                event.target.reset();
            })
    }

    return (
        <div className='p-5'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-center font-bold text-2xl pb-4'>Add Blogs</h2>
            <div className='bg-primary p-5 py-8 rounded w-full md:w-8/12 mx-auto'>
                <form onSubmit={addStudentBlogs}>
                    <div className="pb-4 block md:flex items-center">
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 font-bold text-white' htmlFor="education">date</label>
                        <input className='w-full md:w-9/12 bg-slate-200 p-2 lg:max-w-lg rounded-sm' type="text" name="date" id="date" />
                    </div>
                    <div className="pb-4 block md:flex items-center mt-2">
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 font-bold text-white' htmlFor="education">Month</label>
                        <input className='w-full md:w-9/12 bg-slate-200 p-2 lg:max-w-lg rounded-sm' type="text" name="month" id="month" />
                    </div>
                    <div className="pb-4 block md:flex items-center mt-2">
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 font-bold text-white' htmlFor="education">Year</label>
                        <input className='w-full md:w-9/12 bg-slate-200 p-2 lg:max-w-lg rounded-sm' type="text" name="year" id="year" />
                    </div>
                    <div className="pb-4 block md:flex items-center mt-2">
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 font-bold text-white' htmlFor="education">Author</label>
                        <input className='w-full md:w-9/12 bg-slate-200 p-2 lg:max-w-lg rounded-sm' type="text" name="author" id="author" />
                    </div>
                    <div className="pb-4 block md:flex items-center mt-2">
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 font-bold text-white' htmlFor="education">Subject</label>
                        <input className='w-full md:w-9/12 bg-slate-200 p-2 lg:max-w-lg rounded-sm' type="text" name="subject" id="subject" />
                    </div>
                    <div className="pb-4 block md:flex items-center mt-2">
                        <label style={{ fontFamily: 'Merienda' }} className='w-full md:w-3/12 font-bold text-white' htmlFor="education">Description</label>
                        <input className='w-full md:w-9/12 bg-slate-200 p-2 lg:max-w-lg rounded-sm' type="text" name="description" id="description" />
                    </div>
                    <div className='flex items-center justify-center'>
                        <button type="submit" className='btn bg-primary text-white'>Add Blog</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlogs;