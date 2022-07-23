import { faCalendarAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const Event = () => {

    const { data: events, isLoading } = useQuery(['event'], () =>
        fetch(`http://localhost:5000/events`).then(
            res => res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <div className='py-4'>
                {
                    events?.slice(0).reverse().map(even => <div className='mb-6' key={even.id}>
                        <h2 className='text-2xl font-semibold'> <span>{even.name}</span> <span>{even.year}</span> </h2>
                        <h3 className='py-2'><i><span><FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon> {even.date} {even.month} {even.year} </span> <span className='pl-3'> <FontAwesomeIcon className='pr-2' icon={faUserAlt}></FontAwesomeIcon> {even.posted}</span></i></h3>
                        <img className='w-full h-[350px] md:h-[450px]' src={even.img} alt="studyTour" />
                        <h2 className='text-lg pt-2'> <span>{even.name}</span> <span>{even.year}</span> </h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Event;