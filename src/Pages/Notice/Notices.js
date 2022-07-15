import React, { useState } from 'react';

const Notices = () => {

    const [notices, setNotices] = useState([]);

    fetch('notice.json')
        .then(res => res.json())
        .then(data => setNotices(data))

    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-neutral text-3xl pb-8 text-center font-bold'>Notices</h2>
            <div>
                {
                    notices.map(notice => <div className='mb-6' key={notice.id}>
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