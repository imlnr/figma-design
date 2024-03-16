import React, { useState } from 'react';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="p-4 w-full">
            <nav className="w-11/12 h-19 m-auto container mx-auto flex justify-between items-center">
                <div className="text-white font-bold">
                    <img src={logo} alt="" />
                </div>

                <div className="block lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-black focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>

                <div className="hidden lg:flex items-center space-x-16">
                    <Link to="#">Home</Link>
                    <Link to="#">Service</Link>
                    <Link to="#">Feature</Link>
                    <Link to="#">Product</Link>
                    <Link to="#">Testimonial</Link>
                    <Link to="#">FAQ</Link>
                </div>
                {isOpen && (
                    <div className="lg:hidden absolute top-16 left-0 h-full w-full bg-black text-black py-4">
                        <div className="flex flex-col items-center text-white space-y-10">
                            <Link to="#" onClick={toggleMenu}>
                                Home
                            </Link>
                            <Link to="#" onClick={toggleMenu}>
                                Service
                            </Link>
                            <Link to="#" onClick={toggleMenu}>
                                Feature
                            </Link>
                            <Link to="#" onClick={toggleMenu}>
                                Product
                            </Link>
                            <Link to="#" onClick={toggleMenu}>
                                Testimonial
                            </Link>
                            <Link to="#" onClick={toggleMenu}>
                                FAQ
                            </Link>
                            <button className="text-[#4CAF4F] rounded-md">Login</button>
                            <button className="bg-[#4CAF4F] text-white px-3 py-1 rounded-md">
                                Signup
                            </button>
                        </div>
                    </div>
                )}

                <div className="hidden lg:flex items-center space-x-8">
                    <button className="rounded-md">Login</button>
                    <button className="bg-[#4CAF4F] text-white px-3 py-1 rounded-md">
                        Signup
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
