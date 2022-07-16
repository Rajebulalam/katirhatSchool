import React from 'react';

const About = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-neutral text-3xl pb-8 text-center font-bold'>Our History</h2>
            <div className='p-4 md:p-8 rounded-sm shadow-xl my3'>
                <p className='text-lg'>Katirhat High School was established by the Chairman of the Abdul Owadud Family, Mr. Owadud, in 1933 with the motto: Value, Culture and Innovation, thereby combining respect for the deep-rooted traditions of Bangladesh, its history and language, with the excitement that scientific advances and technological innovation have brought to this country as well as the rest of the world. Whereas many English medium schools offer the traditional range of subjects a level but neglect the study of Bengali and the roots from which the struggle for independence grew, DIS honours its martyrs and teaches respect and admiration for the achievements of the past. We know that without the lessons learnt from our history, there would be no bright future for our native land. We would become anonymous and characterless, robbed of our heritage. </p>
                <p className='pt-4 text-lg'>At KHS, you can and should have both! Yet, none of this is to say that the Daffodil Family is not firmly committed to innovation and technology. That is where the Daffodil Group began and we have never lost sight of the importance these play in the future of the country. Bangladesh must take its rightful place on the international stage but it cannot do so without its people being technologically savvy.</p>
                <p className='pt-4 text-lg'>Let us know how you can contribute to your children’s intellectual, cultural and ethical growth and join us in making a brighter future for your children and for their school. Together we will do wonders!</p>
            </div>
        </div>
    );
};

export default About;