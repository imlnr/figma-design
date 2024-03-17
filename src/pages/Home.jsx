import React from 'react';
import illu from '../assets/Illustration.png';
import dot from "../assets/Dot.png";
import cli1 from "../assets/Logo (1).png";
import cli2 from "../assets/Logo (2).png";
import cli3 from "../assets/Logo (3).png";
import cli4 from "../assets/Logo (4).png";
import cli5 from "../assets/Logo (5).png";
import cli6 from "../assets/Logo (6).png";
import cli7 from "../assets/Logo (7).png";
import icon1 from "../assets/Icon.png";
import icon2 from "../assets/Icon (1).png";
import icon3 from "../assets/Icon (2).png";

import Clientlogo from '../components/Clientlogo';
import Comcard from '../components/Comcard';
import pass from '../assets/rafiki.png'
import pass2 from '../assets/pana.png'

import icon4 from "../assets/Icon (3).png"
import icon5 from "../assets/Icon (4).png"
import icon6 from "../assets/Icon (5).png"
import icon7 from "../assets/Icon (6).png"
import Mcep from '../components/Mcep';

const Home = () => {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center justify-around py-10 md:py-20 bg-[#F5F7FA]">
                <div className='w-10/12 flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-0'>
                    <div className='flex flex-col gap-3 items-center md:items-start text-center md:text-left'>
                        <h1 className='font-inter text-5xl md:text-7xl font-semibold leading-tight md:leading-snug tracking-normal'>
                            Lessons and insights
                        </h1>
                        <h1 className='font-inter text-5xl md:text-7xl font-semibold leading-tight md:leading-snug tracking-normal text-[#4CAF4F]'>from 8 years</h1>
                        <p className='text-lg'>Where to grow your business as a photographer: site or social media?</p>
                        <button className='bg-[#4CAF4F] text-white px-8 py-3.5 rounded-md'>Register</button>
                    </div>
                    <div className='flex justify-center md:justify-end'>
                        <img src={illu} alt="illustration" className='max-w-full' />
                    </div>
                </div>
                <img src={dot} alt="dot" className='mt-10 md:mt-0' />
            </div>
            <div className='bg-white py-10 md:py-20'>
                <div className='w-11/12 container mx-auto'>
                    <h1 className='text-4xl md:text-5xl font-semibold text-center mb-5'>Our Clients</h1>
                    <p className='text-lg text-center mb-10'>We have been working with some Fortune 500+ clients</p>
                    <div className='grid grid-cols-3 md:grid-cols-7 gap-5 md:gap-10'>
                        <Clientlogo val={cli1} />
                        <Clientlogo val={cli2} />
                        <Clientlogo val={cli3} />
                        <Clientlogo val={cli7} />
                        <Clientlogo val={cli4} />
                        <Clientlogo val={cli5} />
                        <Clientlogo val={cli6} />
                    </div>
                </div>
            </div>
            <div className='bg-white py-10 md:py-3'>
                <div className='container mx-auto'>
                    <h1 className='text-4xl md:text-5xl font-semibold text-center mb-5'>Manage your entire community</h1>
                    <h1 className='text-4xl md:text-5xl font-semibold text-center mb-5'>in a single system</h1>
                    <p className='text-lg text-center mb-10'>Who is Nextcent suitable for?</p>
                    <div className='w-10/12 m-auto grid grid-cols-1 md:grid-cols-3 gap-20'>
                        <Comcard val={icon1} head={"Membership Organisations"} para={"Our membership management software provides full automation of membership renewals and payments"} />
                        <Comcard val={icon2} head={"National Associations"} para={"Our membership management software provides full automation of membership renewals and payments"} />
                        <Comcard val={icon3} head={"Clubs And Groups"} para={"Our membership management software provides full automation of membership renewals and payments"} />
                    </div>
                </div>
            </div>
            {/* <div className='mt-7'>
                <div className='w-9/12 m-auto flex items-center justify-between gap-10'>
                    <img src={pass} alt="" />
                    <div className='w-1/2'>
                        <h1 className='text-4xl md:text-4xl font-semibold mb-5'>The unseen of spending three years at Pixelgrade</h1>
                        <p>When joining the JustGo Community, your success becomes our success. In other words, our Customer Success team will be on hand from day one to ensure we understand your requirements, share your goals and work with you for a smooth adoption of our software.</p>
                        <button className='bg-[#4CAF4F] text-white px-5 py-2 mt-3 rounded-md'>Learn More</button>
                    </div>
                </div>
            </div> */}
            <div className='mt-7 py-8'>
                <div className='w-full md:w-9/12 lg:w-10/12 xl:w-9/12 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10'>
                    <img src={pass} alt="" />
                    <div className='w-full xl:w-1/2 sm:11/12 p-6 md:w-11/12'>
                        <h1 className='text-2xl md:text-4xl font-semibold mb-5'>The unseen of spending three years at Pixelgrade</h1>
                        <p className='text-sm md:text-base'>When joining the JustGo Community, your success becomes our success. In other words, our Customer Success team will be on hand from day one to ensure we understand your requirements, share your goals and work with you for a smooth adoption of our software.</p>
                        <button className='bg-[#4CAF4F] text-white px-5 py-2 mt-3 rounded-md'>Learn More</button>
                    </div>
                </div>
            </div>

            <div className='w-full bg-[#F5F7FA] h-72 flex items-center justify-center'>
                <div className='w-10/12 border-dotted border-2 border-sky-500 flex justify-around'>
                    <div className='border-dotted border-2 border-sky-500 self-center'>
                        <h3>Helping a local</h3>
                        <h3>business reinvent itself</h3>
                        <p>We reached here with our hard work and dedication</p>
                    </div>
                    <div className='grid grid-cols-2 gap-5 border-dotted border-2 border-sky-500'>
                        <Mcep img={icon4} num={"2,245,341"} type={"Members"}/>
                        <Mcep img={icon5} num={"46,328"} type={"Clubs"}/>
                        <Mcep img={icon6} num={"828,867"} type={"Event Bookings"}/>
                        <Mcep img={icon7} num={"1,926,436"} type={"Payments"}/>
                    </div>
                </div>
            </div>

            <div className='mt-7'>
                <div className='w-full md:w-9/12 lg:w-10/12 xl:w-9/12 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10'>
                    <img src={pass2} alt="" />
                    <div className='w-full xl:w-1/2 sm:11/12 p-6 md:w-11/12'>
                        <h1 className='text-2xl md:text-4xl font-semibold mb-5'>The unseen of spending three years at Pixelgrade</h1>
                        <p className='text-sm md:text-base'>When joining the JustGo Community, your success becomes our success. In other words, our Customer Success team will be on hand from day one to ensure we understand your requirements, share your goals and work with you for a smooth adoption of our software.</p>
                        <button className='bg-[#4CAF4F] text-white px-5 py-2 mt-3 rounded-md'>Learn More</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
