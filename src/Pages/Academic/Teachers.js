import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { ExternalLink } from 'react-external-link';

const Teachers = () => {

    const { data: teachers, isLoading } = useQuery(['singleProblems'], () =>
        fetch(`https://still-sea-84749.herokuapp.com/allTeachers`).then(
            res => res.json()
        )
    )

    if (isLoading) {
        return 'Loading...';
    }

    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <Helmet>
                <title>Katirhat High School - Teachers</title>
            </Helmet>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl font bold pb-6 text-center'>All of Our Teachers</h2>
            <h3 style={{ fontFamily: 'Merienda' }} className='text-2xl pb-3'>Total Students: {teachers.length}</h3>
            {
                teachers.map(teacher => <div key={teacher._id} className='w-full block md:flex shadow-xl bg-primary rounded-md mb-12 p-12'>
                    <div className='w-full flex justify-center md:block md:w-4/12 mb-4 md:mb-0'>
                        <img className='w-[200px]' src={teacher.img} alt="teacher" />
                    </div>
                    <div className='w-full md:w-8/12'>
                        <h2 style={{ fontFamily: 'Merienda' }} className='text-2xl text-white font-bold pb-3'>Name : {teacher.name}</h2>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg text-white'><span className='text-xl font-semibold'>Designation :</span> {teacher.designation} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg text-white'><span className='text-xl font-semibold text-white'>City :</span> {teacher.city} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg text-white'><span className='text-xl font-semibold text-white'>Village :</span> {teacher.village} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg text-white'><span className='text-xl font-semibold text-white'>Bari :</span> {teacher.bari} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg text-white'><span className='text-xl font-semibold text-white'>Word :</span> {teacher.word} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg text-white'><span className='text-xl font-semibold'>Joining Date :</span> {teacher.join} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg text-white'><span className='text-xl font-semibold'>Mobile No :</span> {teacher.phone} </h3>
                        <ExternalLink style={{ fontFamily: 'Merienda' }} className='text-white pt-2' href='https://www.facebook.com/rajebulalam.khokan/'>Facebook link : {teachers.facebook} </ExternalLink>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Teachers;