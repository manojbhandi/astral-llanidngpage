'use client'
import React, { useState } from 'react'
import logo from '../public/logo.png'
import Image from 'next/image'
import './navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <header>
            <div className='bg-[#0060AF] flex items-center text-white justify-between p-8 px-20 flex-wrap' >
                <a href="/">
                    <Image
                        src={logo}
                        alt='logo'
                        width={100}
                        height={100}
                        className='w-36'
                    />
                </a>
                <nav className='lg:flex gap-8 items-center font-semibold text-sm flex-wrap hidden '>
                    <a href='/#about'>About</a>
                    <a href='#'>Category</a>
                    <a href='#'>Services</a>
                    <a href='#'>Colours</a>
                    <a href='#'>Downloads</a>
                    <a href='#'>Become A Dealer</a>
                    <a href='#'>Blogs</a>
                    <a href='#'>Contact</a>
                    <button className='bg-white rounded-[20px] p-3 px-6 text-[#0060AF] items-center justify-center'>
                        Enquire Now
                    </button>

                </nav>
                <div className="lg:hidden flex">
                    <button onClick={toggleMenu} className="text-2xl focus:outline-none text-white ">
                        ☰
                    </button>
                </div>


            </div>
            {
                isOpen && (
                    <>
                        {/* <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            onClick={toggleMenu}
                        ></div> */}
                        <div className='fixed top-0 right-0 h-full w-full bg-black opacity-[0.96] text-white flex flex-col items-start gap-4 p-8 z-50'>
                            <div className='flex justify-between w-full items-center'>
                                <div></div>
                                <button onClick={toggleMenu} className='text-4xl mr-10 focus:outline-none'>
                                    ✕
                                </button>
                            </div>
                            <a href='/#about' className='hover:text-[#0060AF] hover:text-lg transition-all'>About</a>
                            <a href='#' className='hover:text-[#0060AF] hover:text-lg transition-all'>Category</a>
                            <a href='#' className='hover:text-[#0060AF] hover:text-lg transition-all'>Colours</a>
                            <a href='#' className='hover:text-[#0060AF] hover:text-lg transition-all'>Downloads</a>
                            <a href='#' className='hover:text-[#0060AF] hover:text-lg transition-all'>Become A Dealer</a>
                            <a href='#' className='hover:text-[#0060AF] hover:text-lg transition-all'>Blogs</a>
                            <a href='#' className='hover:text-[#0060AF] hover:text-lg transition-all'>Contact</a>
                            <button className='bg-white rounded-[20px] p-3 px-6 text-[#0060AF] items-center justify-center relative overflow-hidden'>
                                Enquire Now
                            </button>
                        </div>
                    </>
                )
            }

        </header>

    )
}

export default Navbar