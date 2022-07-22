import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Suggestions = () => {

    const { data: suggestions, isLoading } = useQuery(['singleSuggestion'], () =>
        fetch(`https://still-sea-84749.herokuapp.com/studentSuggestion`).then(
            res => res.json()
        )
    )

    if (isLoading) {
        return 'Loading...';
    }

    return (
        <div className='p-5'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl font-bold text-center pb-5'>Suggestions</h2>
            {
                suggestions.slice(0).reverse().map(suggestion => <div key={suggestion._id} className='bg-primary p-5 rounded mb-4'>
                    <address className='text-white'> {suggestion.date}, {suggestion.month} {suggestion.year} </address>
                    <h2 className='text-xl text-white'> <span style={{ fontFamily: 'Merienda' }}>Posted By :</span> {suggestion.author} </h2>
                    <p className='text-white'> Class :  {suggestion.grade} </p>
                    <p className='text-white py-1'> Subject : {suggestion.subject} </p>
                    <p className='text-white py-1 pb-4'> {suggestion.details} </p>
                    <img src={suggestion.img} alt="suggestionsImage" />
                </div>
                )
            }
        </div>
    );
};

export default Suggestions;