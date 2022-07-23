import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { ExternalLink } from 'react-external-link';
import Loading from '../../Shared/Loading/Loading';
import { Helmet } from 'react-helmet-async';

const Admins = () => {

    const { data: admins, isLoading } = useQuery(['admin'], () =>
        fetch(`https://still-sea-84749.herokuapp.com/admin`).then(
            res => res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <Helmet>
                <title>Katirhat High School - Admin</title>
            </Helmet>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl font bold pb-6 text-center'>All of Our Admins</h2>
            <h3 style={{ fontFamily: 'Merienda' }} className='text-2xl pb-3'>Total Admin: {admins.length}</h3>
            {
                admins?.map(admin => <div key={admin._id} className='w-full block md:flex shadow-xl bg-primary rounded-md mb-12 p-12'>
                    <div className='w-full flex justify-center md:block md:w-4/12 mb-4 md:mb-0'>
                        <img className='w-[200px]' src={admin.img} alt="teacher" />
                    </div>
                    <div className='w-full md:w-8/12'>
                        <h2 style={{ fontFamily: 'Merienda' }} className='text-2xl text-white font-bold pb-3'>Name : {admin.name}</h2>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg text-white'><span className='text-xl font-semibold'>Designation :</span> {admin.designation} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg text-white'><span className='text-xl font-semibold text-white'>City :</span> {admin.city} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg text-white'><span className='text-xl font-semibold text-white'>Village :</span> {admin.village} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg text-white'><span className='text-xl font-semibold text-white'>Bari :</span> {admin.bari} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg text-white'><span className='text-xl font-semibold text-white'>Word :</span> {admin.word} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg text-white'><span className='text-xl font-semibold'>Joining Date :</span> {admin.join} </h3>
                        <h3 style={{ fontFamily: 'Merienda' }} className='text-lg text-white'><span className='text-xl font-semibold'>Mobile No :</span> {admin.phone} </h3>
                        <ExternalLink style={{ fontFamily: 'Merienda' }} className='text-white pt-2' href='https://www.facebook.com/rajebulalam.khokan/'>Facebook link : {admin.facebook} </ExternalLink>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Admins;