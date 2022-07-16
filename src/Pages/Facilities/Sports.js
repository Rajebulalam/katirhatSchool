import React from 'react';
import { Helmet } from 'react-helmet-async';

const Sports = () => {

    const sports = [
        {
            id: "01",
            name: "Cricket",
            img: "https://i.ibb.co/9cs5q6w/cricket2.jpg"
        },
        {
            id: "02",
            name: "Football",
            img: "https://i.ibb.co/MPkR94j/istockphoto-1219371111-612x612.jpg"
        },
        {
            id: "03",
            name: "Volley Ball",
            img: "https://i.ibb.co/ggJpss4/exvzqcvorticinejmmel.jpg"
        },
        {
            id: "04",
            name: "Tennis",
            img: "https://i.ibb.co/XXWKx5w/captura-de-pantalla-2022-07-02-a-las-10-18-01.png"
        },
        {
            id: "05",
            name: "Batmenton",
            img: "https://i.ibb.co/1RCbmNF/maxresdefault.jpg"
        },
        {
            id: "06",
            name: "Hoquei",
            img: "https://i.ibb.co/b3gprqF/Sele-o-Portuguesa-de-H-quei-em-Patins-01.jpg"
        },
    ]

    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <Helmet>
                <title>Katirhat High School - Sports</title>
            </Helmet>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl pb-8 text-center font-bold'>Our Sports Event</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    sports.map(sport => <div className='shadow-xl p-4' key={sport.id}>
                        <h2 style={{ fontFamily: 'Merienda' }} className='text-2xl text-center font-bold py-2'> {sport.name} </h2>
                        <div className='flex justify-center pb-3'>
                            <img className='w-[300px] h-[250px]' src={sport.img} alt="sport" />
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Sports;