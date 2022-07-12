import { faCalendarAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Event = () => {

    const [events, setEvents] = useState([]);

    fetch('event.json')
        .then(res => res.json())
        .then(data => {
            setEvents(data);
        })

    return (
        <div>
            <div className='py-4'>
                {
                    events.map(even => <div className='mb-6' key={even.id}>
                        <h2 className='text-2xl font-semibold'> <span>{even.name}</span> <span>{even.year}</span> </h2>
                        <h3 className='py-2'><i><span><FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon> {even.date}</span> <span className='pl-3'> <FontAwesomeIcon className='pr-2' icon={faUserAlt}></FontAwesomeIcon> {even.posted}</span></i></h3>
                        <img className='w-full h-[450px]' src={even.img} alt="studyTour" />
                        <h2 className='text-lg pt-2'> <span>{even.name}</span> <span>{even.year}</span> </h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Event;