import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useForm } from "react-hook-form";

const Problems = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [details, setDetails] = useState('');

    const { data: problems, isLoading, refetch } = useQuery(['singleProblems'], () =>
        fetch(`http://localhost:5000/studentsProblems`).then(
            res => res.json()
        )
    )

    if (isLoading) {
        return 'Loading...';
    }

    const onSubmit = async data => {
        console.log(data.details);
        const about = data.details;
        setDetails(about);
    }
    console.log(details);

    return (
        <div>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-2xl font-bold text-center py-3'>Our Problems</h2>
            {
                problems.slice(0).reverse().map(problem => <div key={problem._id}>
                    <div className='bg-primary mb-1 rounded-sm p-4'>
                        <address className='text-white'>{problem.date}, {problem.month} {problem.year} </address>
                        <h2 style={{ fontFamily: 'Merienda' }} className='text-white text-xl'>Posted By : {problem.author}</h2>
                        <p className='text-white text-lg'>Class : {problem.grade}, Roll : {problem.roll}</p>
                        <p className='text-white text-lg pb-3'> Subject : {problem.subject} </p>
                        <p className='text-white text-lg'> {problem.details} </p>
                        <div className='my-4'>
                            <img className='w-full' src={problem.img} alt="problemImage" />
                        </div>
                    </div>
                    <div className='text-right mb-4'>
                        <label htmlFor="my-modal" className="btn btn-primary modal-button">Give Solution</label>

                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box text-left">
                                <h3 className="font-bold text-lg text-center">Give Your Solution</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="pb-4 block items-center">
                                        <label style={{ fontFamily: 'Merienda' }} className='w-full font-bold text-primary' htmlFor="education">Details</label>
                                        <input className='w-full bg-slate-200 p-2 lg:max-w-lg rounded-sm' type="text" {...register("details", { required: true })} />
                                    </div>
                                    <div className="modal-action">
                                        <label type='submit' htmlFor="my-modal" className="btn btn-primary">Submit</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        </div >
    );
};

export default Problems;