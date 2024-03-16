import React from 'react'
import illu from '../assets/Illustration.png'
import dot from "../assets/Dot.png"
import cli1 from "../assets/Logo (1).png"
import cli2 from "../assets/Logo (2).png"
import cli3 from "../assets/Logo (3).png"
import cli4 from "../assets/Logo (4).png"
import cli5 from "../assets/Logo (5).png"
import cli6 from "../assets/Logo (6).png"
import cli7 from "../assets/Logo (7).png"
import Clientlogo from '../components/Clientlogo'
const Home = () => {
    return (
        <div>
            <div className="flex flex-col w-full items-center h-100 justify-around bg-[#F5F7FA]" style={{ height: "600px" }}>
                <div className='w-11/12 flex items-center justify-between'>
                    <div className='flex flex-col gap-5 items-start'>
                        <h1 className='font-inter text-8xl font-semibold leading-96 tracking-normal'>Lessons and insights</h1>
                        <h1 className='font-inter text-8xl font-semibold leading-96 tracking-normal text-[#4CAF4F]'>from 8 years</h1>
                        <p className='text-lg'>Where to grow your business as a photographer: site or social media?</p>
                        <button className='bg-[#4CAF4F] text-white px-8 py-3.5 rounded-md'>Register</button>
                    </div>
                    <div className=''>
                        <img src={illu} alt="illustration" />
                    </div>
                </div>
                <div className=''>
                    <img src={dot} alt="dot" />
                </div>
            </div>
            <div className='mt-7 h-48 border-dashed border-2 border-sky-500 flex flex-col justify-around items-center'>
                <h1 className='text-4xl font-semibold'>Our Clients</h1>
                <p className='text-lg'>We have been working with some Fortune 500+ clients</p>
                <div className='w-11/12 border-dashed border-2 border-sky-500 grid h-24 grid-cols-7 place-content-around'>
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
    )
}

export default Home