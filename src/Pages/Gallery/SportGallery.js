import React, { useState } from 'react';

const SportGallery = () => {

    const [gallery, setGallery] = useState([]);

    fetch('sportGallery.json')
        .then(res => res.json())
        .then(data => setGallery(data))

    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-neutral text-3xl pb-8 text-center font-bold'>Sports Gallery</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    gallery.map(sport => <div key={sport.id} className='p-2 shadow-xl flex justify-center'>
                        <img className='w-[250px]' src={sport.img} alt="sport" />
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default SportGallery;