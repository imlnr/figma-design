import React from 'react'
import illu from '../assets/Illustration.png'
import dot from "../assets/Dot.png"
const Home = () => {
    return (
        <div className="flex border-2 border-rose-500 flex-col w-full items-center h-100 justify-center bg-[#F5F7FA]" style={{ height: "600px" }}>
            <div className='w-11/12 border-2 border-rose-500 flex items-center justify-between'>
                <div className='flex flex-col gap-5 items-start'>
                    <h1 className='font-inter text-8xl font-semibold leading-96 tracking-normal'>Lessons and insights</h1>
                    <h1 className='font-inter text-8xl font-semibold leading-96 tracking-normal text-[#4CAF4F]'>from 8 years</h1>
                    <p className='text-lg'>Where to grow your business as a photographer: site or social media?</p>
                    <button className='bg-[#4CAF4F] text-white px-8 py-3.5 rounded-md'>Register</button>
                </div>
                <div className='border-2 border-rose-500'>
                    <img src={illu} alt="illustration" />
                </div>
            </div>
            <div className='border-2 border-rose-500 self-end'>
                <img src={dot} alt="dot" />
            </div>
        </div>
    )
}

export default Home