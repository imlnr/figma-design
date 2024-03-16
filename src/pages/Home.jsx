import React from 'react'
import illu from '../assets/Illustration.png'
const Home = () => {
    return (
        <div className="flex w-full items-center h-100 justify-center border-solid border-2 border-sky-500" style={{ height: "600px" }}>
            <div className='w-11/12 flex items-center justify-around'>
                <div className=''>
                    <h1 className='font-inter text-8xl font-semibold leading-96 tracking-normal text-left'>Lessons and insights</h1>
                    <h1 className='font-inter text-8xl font-semibold leading-96 tracking-normal text-left'>from 8 years</h1>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <button>Register</button>
                </div>
                <div className=''>
                    <img src={illu} alt="illustration" />
                </div>
            </div>
        </div>
    )
}

export default Home