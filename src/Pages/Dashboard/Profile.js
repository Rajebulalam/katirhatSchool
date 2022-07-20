import React from 'react';
import { ExternalLink } from 'react-external-link';

const Profile = ({ user }) => {

    const { name, grade, roll, phone, city, village, bari, word, facebook, img } = user;

    return (
        <div>
            <div className='flex justify-center my-3'>
                <img className='rounded-full w-[200px]  my-4' src={img} alt="profileImage" />
            </div>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-2xl font-bold text-white pb-3'>Name : {name} </h2>
            <p style={{ fontFamily: 'Merienda' }} className='text-white'>Class : {grade} </p>
            <p style={{ fontFamily: 'Merienda' }} className='text-white pt-2'>Roll : {roll} </p>
            <p style={{ fontFamily: 'Merienda' }} className='text-white pt-2'>Phone : {phone} </p>
            <p style={{ fontFamily: 'Merienda' }} className='text-white pt-2'>City : {city} </p>
            <p style={{ fontFamily: 'Merienda' }} className='text-white pt-2'>Village : {village} </p>
            <p style={{ fontFamily: 'Merienda' }} className='text-white pt-2'>Bari : {bari} </p>
            <p style={{ fontFamily: 'Merienda' }} className='text-white pt-2'>Word : {word} </p>
            <ExternalLink style={{ fontFamily: 'Merienda' }} className='text-white pt-2' href='https://www.facebook.com/rajebulalam.khokan/'>Facebook link : {facebook} </ExternalLink>
        </div>
    );
};

export default Profile;