import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='flex justify-center py-16'>
            <BallTriangle color='#06283D' className='w-[100px] h-[100px'></BallTriangle>
        </div>
    );
};

export default Loading;