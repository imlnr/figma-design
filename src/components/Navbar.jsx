import React from 'react';
import logo from '../assets/Logo.png'
const Navbar = () => {
    return (
        <div className="p-4 w-full">
            <nav className="h-10 w-11/12 m-auto container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white font-bold"><img src={logo} alt="" /></div>

                {/* Navigation Items */}
                <div className="flex items-center space-x-16">
                    <a href="#" >Home</a>
                    <a href="#" >Service</a>
                    <a href="#" >Feature</a>
                    <a href="#" >Product</a>
                    <a href="#" >Testimonial</a>
                    <a href="#">FAQ</a>
                </div>

                {/* Login and Signup Buttons */}
                <div className="flex items-center space-x-8">
                    <button className='rounded-md' >Login</button>
                    <button className='bg-[#4CAF4F] text-white px-3 py-1 rounded-md'>Signup</button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
