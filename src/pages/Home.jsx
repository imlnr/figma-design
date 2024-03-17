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
import tesla from "../assets/image 9.png"
import Cards from '../components/Cards';
import image1 from '../assets/image 18.png'
import image2 from "../assets/image 19.png";
import image3 from '../assets/image 20.png'

const Home = () => {
    return (
        <div className="min-h-screen w-full">
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

            <div className='mt-7 py-8 '>
                <div className='w-full md:w-9/12 lg:w-10/12 xl:w-9/12 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10'>
                    <img src={pass} alt="" />
                    <div className='w-full xl:w-1/2 sm:11/12 p-6 md:w-11/12'>
                        <h1 className='text-2xl md:text-4xl font-semibold mb-5'>The unseen of spending three years at Pixelgrade</h1>
                        <p className='text-sm md:text-base'>When joining the JustGo Community, your success becomes our success. In other words, our Customer Success team will be on hand from day one to ensure we understand your requirements, share your goals and work with you for a smooth adoption of our software.</p>
                        <button className='bg-[#4CAF4F] text-white px-5 py-2 mt-3 rounded-md'>Learn More</button>
                    </div>
                </div>
            </div>

            <div className='w-full bg-[#F5F7FA] h-72 flex items-center justify-center mt-7'>
                <div className='w-11/12 md:w-3/4 lg:w-2/3  flex flex-col md:flex-row justify-around'>
                    <div className=' self-center mb-5 md:mb-0 md:mr-5'>
                        <h3 className='text-3xl md:text-4xl font-semibold'>Helping a local</h3>
                        <h3 className='text-3xl md:text-4xl font-semibold text-[#4CAF4F]'>business reinvent itself</h3>
                        <p className='text-sm'>We reached here with our hard work and dedication</p>
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <Mcep img={icon4} num={"2,245,341"} type={"Members"} />
                        <Mcep img={icon5} num={"46,328"} type={"Clubs"} />
                        <Mcep img={icon6} num={"828,867"} type={"Event Bookings"} />
                        <Mcep img={icon7} num={"1,926,436"} type={"Payments"} />
                    </div>
                </div>
            </div>


            <div className='mt-7'>
                <div className='w-full md:w-9/12 lg:w-10/12 xl:w-9/12 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10'>
                    <img src={pass2} alt="" />
                    <div className='w-full xl:w-1/2 sm:11/12 p-6 md:w-11/12'>
                        <h1 className='text-2xl md:text-4xl font-semibold mb-5'>How to design your site footer like we did</h1>
                        <p className='text-sm md:text-base'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                        <button className='bg-[#4CAF4F] text-white px-5 py-2 mt-3 rounded-md'>Learn More</button>
                    </div>
                </div>
            </div>

            <div className='mt-7 w-full flex items-center justify-center bg-[#F5F7FA]'>
                <div className='w-11/12 md:w-9/12 mt-2 lg:w-9/12 flex flex-col md:flex-row items-center justify-between gap-10'>
                    <img className='m-auto md:m-0' src={tesla} alt="" />
                    <div className='flex flex-col items-start justify-center gap-8'>
                        <p className=''>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                        <div>
                            <h3 className='text-[#4CAF4F] text-xl md:text-2xl'>Tim Smith</h3>
                            <p>British Dragon Boat Racing Association</p>
                        </div>
                        <div className='grid grid-cols-4 md:grid-cols-9 gap-5 md:gap-10'>
                            <Clientlogo val={cli1} />
                            <Clientlogo val={cli2} />
                            <Clientlogo val={cli3} />
                            <Clientlogo val={cli7} />
                            <Clientlogo val={cli4} />
                            <Clientlogo val={cli5} />
                            <Clientlogo val={cli6} />
                            <div className='text-[#4CAF4F] col-span-2 place-self-center text-sm md:text-base'>Meet all customers <span>→</span></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='w-full'>
                <div className='w-10/12 m-auto'>
                    <div className='text-center mt-7'>
                        <h1 className='text-2xl md:text-4xl font-semibold mb-5'>Caring is the new marketing</h1>
                        <p>The Nexcent blog is the best place to read about the latest membership insights, <br />trends and more. See who's joining the community, read about how our community <br />are increasing their membership income and lot's more.​</p>
                    </div>
                    <div className='grid grid-cols-3 place-items-center mt-5'>
                        <Cards img={image1} text={"Creating Streamlined Safeguarding Processes with OneRen"} />
                        <Cards img={image2} text={"What are your safeguarding responsibilities and how can you manage them?"} />
                        <Cards img={image3} text={"Revamping the Membership Model with Triathlon Australia"} />
                    </div>
                </div>
            </div> */}
            <div className='w-full mt-10 mb-5'>
                <div className='w-11/12 mx-auto'>
                    <div className='text-center mt-7'>
                        <h1 className='text-2xl md:text-4xl font-semibold mb-5'>Caring is the new marketing</h1>
                        <p className='text-sm md:text-base lg:text-lg xl:text-xl'>The Nexcent blog is the best place to read about the latest membership insights, <br />trends and more. See who's joining the community, read about how our community <br />are increasing their membership income and lot's more.​</p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center mt-5'>
                        <Cards img={image1} text={"Creating Streamlined Safeguarding Processes with OneRen"} />
                        <Cards img={image2} text={"What are your safeguarding responsibilities and how can you manage them?"} />
                        <Cards img={image3} text={"Revamping the Membership Model with Triathlon Australia"} />
                    </div>
                </div>
            </div>

            <div className='bg-[#F5F7FA] mt-20 text-center py-4'>
                <h1 className='text-xl md:text-3xl lg:text-5xl font-semibold mt-8'>
                    Pellentesque suscipit <br className="hidden md:inline" /> fringilla libero eu.
                </h1>
                <button className='bg-[#4CAF4F] px-5 py-3 text-white rounded mt-3'>
                    Get a Demo →
                </button>
            </div>

        </div>
    );
};

export default Home;
