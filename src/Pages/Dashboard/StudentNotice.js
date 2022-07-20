import React from 'react';
import { useQuery } from '@tanstack/react-query';

const StudentNotice = () => {

    const { data: notices, isLoading, refetch } = useQuery(['singleProblems'], () =>
        fetch(`http://localhost:5000/studentNotice`).then(
            res => res.json()
        )
    )

    if (isLoading) {
        return 'Loading...';
    }

    return (
        <div className='p-4'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-center text-3xl font-bold pb-5'>Notices</h2>
            {
                notices.slice(0).reverse().map(notice => <div key={notice._id} className='bg-primary rounded p-5 mb-4'>
                    <address className='text-white'>{notice.date}, {notice.month} {notice.year}</address>
                    <h2 className='text-2xl text-white'> <span style={{ fontFamily: 'Merienda' }}>Posted By:</span> {notice.author}</h2>
                    <p className='text-white'>Class : {notice.grade}</p>
                    <p className='text-white'>Subject : {notice.subject}</p>
                    <p className='text-white'>{notice.details}</p>
                </div>
                )
            }
        </div>
    );
};

export default StudentNotice;