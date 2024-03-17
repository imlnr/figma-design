import React from 'react'
import logo from "../assets/Logo1.png"
import social from "../assets/Social Icons twitter.png"
import social2 from "../assets/Social Icons youtube.png"
import social3 from "../assets/Social Icons.png"
import social4 from "../assets/Path.png"

const Footer = () => {
    return (
        <footer className='bg-[#263238] p-5 w-full flex items-center justify-center'>
            <div className='w-10/12 text-white flex items-center flex-col md:flex-row justify-between'>
                <div className='w-1/2 flex justify-center flex-col gap-14'>
                    <div className="text-white font-bold">
                        <img src={logo} alt="logoimg" />
                    </div>
                    <div>
                        <p>Copyright © 2020 Landify UI Kit.</p>
                        <p>All rights reserved</p>
                    </div>
                    <div className='flex items-center justify-start gap-8'>
                        <img src={social4} alt="" />
                        <img src={social3} alt='' />
                        <img src={social} alt="" />
                        <img src={social2} alt="" />
                    </div>
                </div>
                <div className='w-1/2 flex items-center flex-col md:flex-row md:justify-center justify-between'>
                    <div className='flex justify-center flex-col gap-4'>
                        <h1 className='text-4xl md:text-3xl font-semibold text-center'>Company</h1>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </div>
                    <div className='flex justify-center flex-col gap-4'>
                        <h1 className='text-4xl md:text-3xl font-semibold text-center'>Support</h1>
                        <p>Help center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy policy</p>
                        <p>Status</p>
                    </div>
                    <div className='self-start'>
                        <h1 className='text-4xl md:text-3xl font-semibold text-center'>Stay up to date</h1>
                        <input className='mt-4 p-1 rounded' type="email" placeholder='Your email address' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer