import React, { useState } from 'react';

const OnlineAdmission = () => {

    const [name, setName] = useState('');

    const handleName = event => {
        setName(event.target.value);
        console.log(event.target.value);
    }

    const [studentMobile, setStudentMobile] = useState('');
    const handleStudentMobile = event => {
        setStudentMobile(event.target.value);
        console.log(event.target.value);
    }

    const [guardian, setGuardian] = useState('');
    const handleGuardian = event => {
        setGuardian(event.target.value);
        console.log(event.target.value);
    }

    const [guardianMobile, setGuardianMobile] = useState('');
    const handleGuardianMobile = event => {
        setGuardianMobile(event.target.value);
        console.log(event.target.value);
    }

    const [guardianEmail, setGuardianEmail] = useState('');
    const handleGuardianEmail = event => {
        setGuardianEmail(event.target.value);
        console.log(event.target.value);
    }

    const [guardianOccupation, setGuardianOccupation] = useState('');
    const handleGuardianOccupation = event => {
        setGuardianOccupation(event.target.value);
        console.log(event.target.value);
    }

    const [grades, setGrades] = useState('');
    const handleGrades = event => {
        setGrades(event.target.value);
        console.log(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(name, studentMobile, guardian, guardianMobile, guardianEmail, guardianOccupation, grades);
        event.target.reset();
    }

    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-neutral text-3xl pb-8 text-center font-bold'>Apply Now</h2>
            <div className='w-full md:w-9/12 p-4 md:p-8 mx-auto bg-slate-200 rounded-sm'>
                <form onSubmit={handleSubmit}>
                    <div className='block sm:flex items-center'>
                        <h3 style={{ fontFamily: 'Merienda' }} className='pr-3 w-full sm:w-3/12  text-lg'>Student's Name : </h3>
                        <input onBlur={handleName} className="border outline-none p-2 w-full sm:w-9/12" required type="name" name="name" id="name" placeholder='Name' />
                    </div>
                    <div className='block sm:flex items-center mt-2'>
                        <h3 style={{ fontFamily: 'Merienda' }} className='pr-3 w-full sm:w-3/12  text-lg'>Student's Mobile(Optional) : </h3>
                        <input onBlur={handleStudentMobile} className="border outline-none p-2 w-full sm:w-9/12" required type="text" name="mobile" id="mobile" placeholder='Mobile No.' />
                    </div>
                    <div className='block sm:flex items-center mt-2'>
                        <h3 style={{ fontFamily: 'Merienda' }} className='pr-3 w-full sm:w-3/12  text-lg'>Guardian's Name : </h3>
                        <input onBlur={handleGuardian} className="border outline-none p-2 w-full sm:w-9/12" required type="text" name="name" id="name" placeholder='Name' />
                    </div>
                    <div className='block sm:flex items-center mt-2'>
                        <h3 style={{ fontFamily: 'Merienda' }} className='pr-3 w-full sm:w-3/12  text-lg'>Guardian's Mobile No. : </h3>
                        <input onBlur={handleGuardianMobile} className="border outline-none p-2 w-full sm:w-9/12" required type="text" name="mobile" id="mobile" placeholder='Mobile No.' />
                    </div>
                    <div className='block sm:flex items-center mt-2'>
                        <h3 style={{ fontFamily: 'Merienda' }} className='pr-3 w-full sm:w-3/12  text-lg'>Guardian's Email : </h3>
                        <input onBlur={handleGuardianEmail} className="border outline-none p-2 w-full sm:w-9/12" required type="email" name="email" id="email" placeholder='Email' />
                    </div>
                    <div className='block sm:flex items-center mt-2'>
                        <h3 style={{ fontFamily: 'Merienda' }} className='pr-3 w-full sm:w-3/12  text-lg'>Guardian's Occupation : </h3>
                        <input onBlur={handleGuardianOccupation} className="border outline-none p-2 w-full sm:w-9/12" required type="text" name="occupation" id="occupation" placeholder='Occupation' />
                    </div>
                    <div className='block sm:flex items-center mt-2'>
                        <label style={{ fontFamily: 'Merienda' }} className='pr-3 w-full sm:w-3/12  text-lg' htmlFor="grade">Grades :</label>

                        <select onBlur={handleGrades} name="grade" id="grade" className='w-full sm:w-9/12 p-2 outline-none'>
                            <option value="vi">Six (VI)</option>
                            <option value="vii">Seven (VII)</option>
                            <option value="viii">Eight (VIII)</option>
                            <option value="ix">Nine (IX)</option>
                            <option value="x">Ten (X)</option>
                        </select>
                    </div>
                    <div className='flex justify-center mt-6'>
                        <button className='btn text-white bg-primary' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OnlineAdmission;