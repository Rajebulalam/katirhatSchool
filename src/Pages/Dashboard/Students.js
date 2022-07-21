import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { ExternalLink } from 'react-external-link';

const Students = () => {

    const { data: students, isLoading, refetch } = useQuery(['singleProblems'], () =>
        fetch(`http://localhost:5000/allStudents`).then(
            res => res.json()
        )
    )

    if (isLoading) {
        return 'Loading...';
    }

    return (
        <div>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl font bold pb-6 text-center'>All of Our Students</h2>
            <h3 style={{ fontFamily: 'Merienda' }} className='text-2xl pb-3'>Total Students: {students.length}</h3>
            {
                students.map(student => <div key={student._id} className='w-full block md:flex shadow-xl bg-white rounded-md mb-12 p-12'>
                    <div className='w-full flex justify-center md:block md:w-4/12 mb-4 md:mb-0'>
                        <img className='w-[200px]' src={student.img} alt="teacher" />
                    </div>
                    <div className='w-full md:w-8/12'>
                        <h2 style={{ fontFamily: 'Merienda' }} className='text-2xl font-bold pb-3'>{student.name}</h2>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg'><span className='text-xl font-semibold'>Class:</span> {student.grade} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg'><span className='text-xl font-semibold'>Roll:</span> {student.roll} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg'><span className='text-xl font-semibold'>City:</span> {student.city} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg'><span className='text-xl font-semibold'>Village:</span> {student.village} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg'><span className='text-xl font-semibold'>Bari:</span> {student.bari} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg'><span className='text-xl font-semibold'>Word:</span> {student.word} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg'><span className='text-xl font-semibold'>Mobile No:</span> {student.phone} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg'><span className='text-xl font-semibold'>ID:</span> {student.student} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg'><span className='text-xl font-semibold'>Password:</span> {student.password} </h3>
                        <ExternalLink style={{ fontFamily: 'Merienda' }} className='text-primary pt-2' href='https://www.facebook.com/rajebulalam.khokan/'>Facebook link : {student.facebook} </ExternalLink>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Students;