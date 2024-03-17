import React from 'react'
import logo from "../assets/Logo1.png"
import social from "../assets/Social Icons twitter.png"
import social2 from "../assets/Social Icons youtube.png"
import social3 from "../assets/Social Icons.png"
import social4 from "../assets/Path.png"

const Footer = () => {
    return (
        <footer className='bg-[#263238] h-80 w-full flex items-center justify-center'>
            <div className='w-10/12 border-double border-4 border-sky-500 text-white flex items-center justify-between'>
                <div className='w-1/2'>
                    <div className="text-white font-bold">
                        <img src={logo} alt="logoimg" />
                    </div>
                    <div>
                        <p>Copyright © 2020 Landify UI Kit.</p>
                        <p>All rights reserved</p>
                    </div>
                    <div className='flex items-center justify-start gap-10'>
                        <img src={social} alt="" />
                        <img src={social2} alt="" />
                        <img src={social3} alt='' />
                        <img src={social4} alt="" />
                    </div>
                </div>
                <div className='w-1/2 flex items-center justify-between'>
                    <div>
                        <h1>Company</h1>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </div>
                    <div>
                        <h1>Support</h1>
                        <p>Help center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy policy</p>
                        <p>Status</p>
                    </div>
                    <div>
                        <h1>Stay up to date</h1>
                        <input type="email" placeholder='Your email address' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer