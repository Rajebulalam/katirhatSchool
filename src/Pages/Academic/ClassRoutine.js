import React from 'react';
import { Helmet } from 'react-helmet-async';

const ClassRoutine = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <Helmet>
                <title>Katirhat High School - Class Routine</title>
            </Helmet>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl font bold pb-6 text-center'>Class Routine</h2>
            <table className='w-full'>
                <thead>
                    <tr className='border'>
                        <th className='py-2'>Class Name</th>
                        <th className='py-2'>View or Download</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border'>
                        <td className='text-center py-2'>Six - (VI)</td>
                        <td className='text-center py-2'>View</td>
                    </tr>
                    <tr className='border'>
                        <td className='text-center py-2'>Seven - (VII)</td>
                        <td className='text-center py-2'>View</td>
                    </tr>
                    <tr className='border'>
                        <td className='text-center py-2'>Eight - (VIII)</td>
                        <td className='text-center py-2'>View</td>
                    </tr>
                    <tr className='border'>
                        <td className='text-center py-2'>Nine - (IX)</td>
                        <td className='text-center py-2'>View</td>
                    </tr>
                    <tr className='border'>
                        <td className='text-center py-2'>Ten - (X)</td>
                        <td className='text-center py-2'>View</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ClassRoutine;    