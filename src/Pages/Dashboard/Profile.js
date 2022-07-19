import React from 'react';

const Profile = ({ user }) => {

    const { name, grade, roll, phone, city, village, bari, word, facebook, img } = user;

    return (
        <div>
            <div className='flex justify-center my-3'>
                <img className='rounded-full w-[200px]  my-4' src={img} alt="profileImage" />
            </div>
            <h2>Name : {name} </h2>
            <p style={{fontFamily: 'Merienda'}} className='text-white'>Class : {grade} </p>
            <p style={{fontFamily: 'Merienda'}} className='text-white pt-2'>Roll : {roll} </p>
            <p style={{fontFamily: 'Merienda'}} className='text-white pt-2'>Phone : {phone} </p>
            <p style={{fontFamily: 'Merienda'}} className='text-white pt-2'>City : {city} </p>
            <p style={{fontFamily: 'Merienda'}} className='text-white pt-2'>Village : {village} </p>
            <p style={{fontFamily: 'Merienda'}} className='text-white pt-2'>Bari : {bari} </p>
            <p style={{fontFamily: 'Merienda'}} className='text-white pt-2'>Word : {word} </p>
            <p style={{fontFamily: 'Merienda'}} className='text-white pt-2'>Facebook link : {facebook} </p>
        </div>
    );
};

export default Profile;