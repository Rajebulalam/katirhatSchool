import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const Blogs = () => {

    const { data: blogs, isLoading } = useQuery(['singleBlog'], () =>
        fetch(`https://still-sea-84749.herokuapp.com/studentsBlogs`).then(
            res => res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-center text-3xl font-bold text-primary py-3'>Our Blogs</h2>
            {
                blogs.slice(0).reverse().map(blog => <div key={blog._id} className='p-5 mb-4 bg-primary rounded-sm'>
                    <address className='text-white'>{blog.date}, {blog.month} {blog.year}</address>
                    <h2 style={{ fontFamily: 'Merienda' }} className='py-2 text-xl text-white'>Published By: {blog.author}</h2>
                    <h3 className='py-2 text-white text-lg'> <span style={{ fontFamily: 'Merienda' }} className='py-2 text-white text-lg'>Subject:</span> {blog.subject}</h3>
                    <p className='py-3 text-white'>{blog.description}</p>
                </div>
                )
            }
        </div>
    );
};

export default Blogs;