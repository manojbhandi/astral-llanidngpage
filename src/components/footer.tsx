import React from 'react'
import bgImg from '../public/footerbg.png'
import companies from '../public/copmanies.png'
import logo from '../public/logo.png'
import location from '../public/location.png'
import message from '../public/message.png'
import phone from '../public/call.png'
import Image from 'next/image'
import Link from 'next/link'
function Footer() {
    return (
        <div className='bg-[url("../public/footerbg.png")] h-full p-20'>
            <div className='flex flex-col gap-8 items-center mb-10'>
                <h6 className='font-bold text-xl text-white mx-auto'>Group Company</h6>
                <Image
                    src={companies}
                    className=' h-full w-[80%]'
                    alt='companies'
                    width={0}
                    height={0}
                />
            </div>
            <hr />
            <div className=' flex lg:flex-row flex-col justify-between mt-10 lg:gap-0 gap-10'>
                <div className='flex flex-col gap-10'>
                    <Image
                        src={logo}
                        alt='logo'
                        height={0}
                        width={0}
                        className='h-16 w-48'
                    />
                    <div className='flex flex-col gap-3'>
                        <p className='font-bold text-[#EEDCB2] text-sm'>Reach Us</p>
                        <span className='flex gap-2 items-center'>
                            <Image
                                src={location}
                                alt='location'
                                height={0}
                                width={0}
                                className='h-4 w-4'
                            />
                            <p className='font-normal text-white text-xs font-lato'>#417/418, 11th Cross, 4th Phase, Peenya Industrial Area,<br /> Bangalore - 560 058</p>
                        </span>
                        <span className='flex gap-2 items-center'>
                            <Image
                                src={phone}
                                alt='location'
                                height={0}
                                width={0}
                                className='h-4 w-4'
                            />
                            <p className='font-normal text-white text-xs font-lato'>+91 – 80 – 42552555</p>
                        </span>
                        <span className='flex gap-2 items-center'>
                            <Image
                                src={message}
                                alt='location'
                                height={0}
                                width={0}
                                className='h-4 w-4'
                            />
                            <p className='font-normal text-white text-xs font-lato'>info@gem-paints.com</p>
                        </span>
                    </div>
                </div>
                <div className='flex flex-col gap-10'>
                    <div className='flex lg:flex-row flex-col gap-3' >
                        <span>
                            <h6 className='font-bold text-xs text-[#EEDBB1]'>Sign Up To Our Newsletter</h6>
                            <p className='font-normal text-white text-xs'>Lorem ipsum dolor sit amet consectetur. </p>
                        </span>
                        <div className='flex'>
                            <input
                                className='border border-[#EEDCB2] rounded-[30px] lg:w-[98%]   py-2 px-4 h-fit bg-transparent'
                                placeholder='Enter your email'
                            />
                            <button
                                className='bg-[#0060AF] rounded-[30px] ml-[-30px] p-1 px-4 w-fit text-white text-xs font-semibold'
                            >Enquire Now</button>
                        </div>
                    </div>
                    <div className='flex gap-16'>
                        <span className='flex flex-col gap-3'>
                            <h6 className='font-bold text-xs text-[#EEDBB1]'>About</h6>
                            <Link href='#'><p className='font-normal text-white text-xs'>About Astrals </p></Link>
                            <Link href='#'><p className='font-normal text-white text-xs'>About Jourey </p></Link>
                            <Link href='#'><p className='font-normal text-white text-xs'>About Astrals </p></Link>
                        </span>
                        <span className='flex flex-col gap-3'>
                            <h6 className='font-bold text-xs text-[#EEDBB1]'>Category</h6>
                            <Link href='#'><p className='font-normal text-white text-xs'>About Astrals </p></Link>
                            <Link href='#'><p className='font-normal text-white text-xs'>About Jourey </p></Link>
                            <Link href='#'><p className='font-normal text-white text-xs'>About Astrals </p></Link>
                        </span>
                        <span className='flex flex-col gap-3'>
                            <h6 className='font-bold text-xs text-[#EEDBB1]'>Services</h6>
                            <Link href='#'><p className='font-normal text-white text-xs'>About Astrals </p></Link>
                            <Link href='#'><p className='font-normal text-white text-xs'>About Jourey </p></Link>
                            <Link href='#'><p className='font-normal text-white text-xs'>About Astrals </p></Link>
                        </span>
                        <span className='flex flex-col gap-3'>
                            <h6 className='font-bold text-xs text-[#EEDBB1]'>Downloads</h6>
                            <h6 className='font-bold text-xs text-[#EEDBB1]'>Become A Dealer</h6>
                            <h6 className='font-bold text-xs text-[#EEDBB1]'>Blogs</h6>
                            <h6 className='font-bold text-xs text-[#EEDBB1]'>Contact</h6>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer