import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const Notices = () => {

    const { data: notices, isLoading } = useQuery(['notice'], () =>
        fetch(`https://still-sea-84749.herokuapp.com/notices`).then(
            res => res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <Helmet>
                <title>Katirhat High School - Notice</title>
            </Helmet>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-neutral text-3xl pb-8 text-center font-bold'>Notices</h2>
            <div>
                {
                    notices?.slice(0).reverse().map(notice => <div className='mb-6' key={notice._id}>
                        <address className='text-lg'>{notice.date}, {notice.month} {notice.year}</address>
                        <h3 className='text-xl pb-4'>By <i>{notice.name}</i></h3>
                        <div className='border'>
                            <img className='w-full' src={notice.img} alt="notice" />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Notices;