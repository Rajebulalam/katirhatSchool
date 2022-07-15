import React from 'react';

const ClassRoutine = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
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
                        <td className='text-center py-2'>SIX - (VI)</td>
                        <td className='text-center py-2'>View</td>
                    </tr>
                    <tr className='border'>
                        <td className='text-center py-2'>Seven - (VII)</td>
                        <td className='text-center py-2'>View</td>
                    </tr>
                    <tr className='border'>
                        <td className='text-center py-2'>EIGHT - (VIII)</td>
                        <td className='text-center py-2'>View</td>
                    </tr>
                    <tr className='border'>
                        <td className='text-center py-2'>NINE - (IX)</td>
                        <td className='text-center py-2'>View</td>
                    </tr>
                    <tr className='border'>
                        <td className='text-center py-2'>TEN - (X)</td>
                        <td className='text-center py-2'>View</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ClassRoutine;    