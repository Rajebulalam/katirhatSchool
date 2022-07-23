import { faCalendarAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import './Event.css';

const Event = () => {


    const [events, setEvents] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);

    useEffect(() => {
        fetch('http://localhost:5000/eventsCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 5);
                setPageCount(pages);
                console.log(pages, data);
            })
    }, [])


    useEffect(() => {
        fetch(`http://localhost:5000/events?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [page, size])


    return (
        <div>
            <div className='py-4'>
                {
                    events?.slice(0).reverse().map(even => <div className='mb-6' key={even._id}>
                        <h2 className='text-2xl font-semibold'> <span>{even.name}</span> <span>{even.year}</span> </h2>
                        <h3 className='py-2'><i><span><FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon> {even.date} {even.month} {even.year} </span> <span className='pl-3'> <FontAwesomeIcon className='pr-2' icon={faUserAlt}></FontAwesomeIcon> {even.posted}</span></i></h3>
                        <img className='w-full h-[350px] md:h-[450px]' src={even.img} alt="studyTour" />
                        <h2 className='text-lg pt-2'> <span>{even.name}</span> <span>{even.year}</span> </h2>
                    </div>)
                }
            </div>
            <div className='pagination flex justify-center mb-10'>
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button className={page === number ? 'selected' : ''} onClick={() => setPage(number)}> {number + 1} </button>)
                }
            </div>
        </div>
    );
};

export default Event;