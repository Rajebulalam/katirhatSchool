import React, { useState } from 'react';

const Teachers = () => {

    const [teachers, setTeachers] = useState([]);

    fetch('teacher.json')
        .then(res => res.json())
        .then(data => setTeachers(data))

    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl font bold pb-6 text-center'>All of Our Teachers</h2>
            {
                teachers.map(teacher => <div key={teacher.id} className='w-full block md:flex shadow-xl rounded-md mb-12 p-12'>
                    <div className='w-full flex justify-center md:block md:w-4/12 mb-4 md:mb-0'>
                        <img className='w-[200px]' src={teacher.img} alt="teacher" />
                    </div>
                    <div className='w-full md:w-8/12'>
                        <h2 style={{ fontFamily: 'Merienda' }} className='text-2xl font-bold pb-3'>{teacher.name}</h2>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg'><span className='text-xl font-semibold'>Designation:</span> {teacher.designation} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg'><span className='text-xl font-semibold'>Subject:</span> {teacher.subject} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg'><span className='text-xl font-semibold'>Joining Date:</span> {teacher.join} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg'><span className='text-xl font-semibold'>Mobile No:</span> {teacher.mobile} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg'><span className='text-xl font-semibold'>ID:</span> {teacher.identity} </h3>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Teachers;