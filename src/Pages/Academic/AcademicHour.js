import React from 'react';
import { Helmet } from 'react-helmet-async';

const AcademicHour = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12 pb-16'>
            <Helmet>
                <title>Katirhat High School - Academic Hour</title>
            </Helmet>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl font-bold text-center pb-8'>Academic Hours</h2>
            <div className="overflow-x-auto">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className='text-center text-xl' colSpan='2'>From Saturday - Thursday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center text-lg font-semibold'>Class</td>
                                <td className='text-center text-lg font-semibold'>Duration</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className='text-center text-lg'>vi, vii, viii, ix, x</td>
                                <td className='text-center text-lg'>10:00 am - 04:00 pm</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AcademicHour;