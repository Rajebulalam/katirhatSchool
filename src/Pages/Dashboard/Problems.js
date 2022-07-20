import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Problems = () => {

    const { data: problems, isLoading, refetch } = useQuery(['singleProblems'], () =>
        fetch(`http://localhost:5000/studentsProblems`).then(
            res => res.json()
        )
    )

    if (isLoading) {
        return 'Loading...';
    }

    return (
        <div>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-2xl font-bold text-center py-3'>Our Problems</h2>
            {
                problems.slice(0).reverse().map(problem => <div key={problem._id} className='bg-primary mb-4 rounded-sm p-4'>
                    <address className='text-white'>{problem.date}, {problem.month} {problem.year} </address>
                    <h2 style={{ fontFamily: 'Merienda' }} className='text-white text-xl'>Posted By : {problem.author}</h2>
                    <p className='text-white text-lg'>Class : {problem.grade}, Roll : {problem.roll}</p>
                    <p className='text-white text-lg pb-3'> Subject : {problem.subject} </p>
                    <p className='text-white text-lg'> {problem.details} </p>
                    <div className='my-4'>
                        <img className='w-full' src={problem.img} alt="problemImage" />
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Problems;