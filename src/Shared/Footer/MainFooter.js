import { faFacebookF, faLinkedinIn, faWhatsapp } from '@fortawesome/fontawesome-free-brands';
import { faAddressCard, faCommentSms, faDiagramNext, faEnvelope, faHomeAlt, faLink, faLocationDot, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const MainFooter = () => {
    return (
        <div className='bg-primary'>
            <div className='w-full lg:w-11/12 pt-7 pb-4 px-4 lg:px-6 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-8 gap-6 border-b-2'>
                    <div>
                        <h2 className='pb-5 text-white font-semibold text-2xl'>Internal Link</h2>
                        <ul>
                            <li className='pb-2'><Link className='text-accent hover:text-secondary' to="/"> <FontAwesomeIcon className='text-white pr-2' icon={faHomeAlt}></FontAwesomeIcon> Home</Link></li>
                            <li className='pb-2'><Link className='text-accent hover:text-secondary' to="/"> <FontAwesomeIcon className='text-white pr-2' icon={faTriangleExclamation}></FontAwesomeIcon> Notice</Link></li>
                            <li className='pb-2'><Link className='text-accent hover:text-secondary' to="/"> <FontAwesomeIcon className='text-white pr-2' icon={faAddressCard}></FontAwesomeIcon>  About Us</Link></li>
                            <li className='pb-2'><Link className='text-accent hover:text-secondary' to="/"> <FontAwesomeIcon className='text-white pr-2' icon={faCommentSms}></FontAwesomeIcon>  Contact Us</Link></li>
                            <li className='pb-2'><Link className='text-accent hover:text-secondary' to="/"> <FontAwesomeIcon className='text-white pr-2' icon={faDiagramNext}></FontAwesomeIcon>  Login</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='pb-5 text-white font-semibold text-2xl'>Recent Blog</h2>
                        <div className='flex'>
                            <div className='bg-accent p-3 mr-2'>
                                <Link to='/'> <FontAwesomeIcon icon={faLink}></FontAwesomeIcon> </Link>
                            </div>
                            <div>
                                <p> <Link className='text-white' to='/'>Celebrating National and International day</Link> </p>
                            </div>
                        </div>
                        <div className='flex mt-4'>
                            <div className='bg-accent p-3 mr-2'>
                                <Link to='/'> <FontAwesomeIcon icon={faLink}></FontAwesomeIcon> </Link>
                            </div>
                            <div>
                                <p> <Link className='text-white' to='/'>How to create a person's life with manner</Link> </p>
                            </div>
                        </div>
                        <div className='flex mt-4'>
                            <div className='bg-accent p-3 mr-2'>
                                <Link to='/'> <FontAwesomeIcon icon={faLink}></FontAwesomeIcon> </Link>
                            </div>
                            <div>
                                <p> <Link className='text-white' to='/'>How to invest Yourself in a right way</Link> </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='pb-5 text-white font-semibold text-2xl'>Connect With Us</h2>
                        <p>
                            <FontAwesomeIcon className='p-3 px-4 mr-2 text-white bg-accent rounded-full' icon={faFacebookF}></FontAwesomeIcon>
                            <FontAwesomeIcon className='p-3 mr-2 text-white bg-accent rounded-full' icon={faWhatsapp}></FontAwesomeIcon>
                            <FontAwesomeIcon className='p-3 mr-2 text-white bg-accent rounded-full' icon={faEnvelope}></FontAwesomeIcon>
                            <FontAwesomeIcon className='p-3 text-white bg-accent rounded-full' icon={faLinkedinIn}></FontAwesomeIcon>
                        </p>
                    </div>
                    <div>
                        <h2 className='pb-5 text-white font-semibold text-2xl'>Location</h2>
                        <div className='flex'>
                            <p> <FontAwesomeIcon className='text-accent pr-3' icon={faLocationDot}></FontAwesomeIcon> </p>
                            <p><span className='text-white'>4333, Katirhat, Hathazari, Chattogram, Bangladesh</span></p>
                        </div>
                        <div className='flex pt-2'>
                            <p> <FontAwesomeIcon className='text-accent pr-3' icon={faEnvelope}></FontAwesomeIcon> </p>
                            <p className='text-white'>rajebulalam27@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-11/12 py-6 px-4 lg:px-6 mx-auto block md:flex text-center md:justify-between'>
                <p className='text-white'>Copyright &copy; 2022 All right reserved - Katirhat High School</p>
                <p className='text-white'>Developed by - Rajebul Alam Khokan</p>
            </div>
        </div>
    );
};

export default MainFooter;