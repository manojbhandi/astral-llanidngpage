import Image from 'next/image'
import React from 'react'
import serviesImg1 from '../public/categoryMain1.png'
import serviesImg2 from '../public/categoryMain2.png'
import serviesImg3 from '../public/categoryMain3.png'
function Services() {
    return (
        <div className='p-20'>
            <div className='flex flex-col gap-3 lg:w-1/2'>
                <h6 className='font-medium text-lg'>About Astral Paints</h6>
                <h3 className='font-bold text-3xl heading mb-2'>Bringing Your Dreams To Life</h3>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-3'>
                    <div className="image-container">
                        <Image
                            src={serviesImg1}
                            width={0}
                            height={0}
                            alt='categoryImg1'
                            className='h-full w-full image'
                        />
                        <h6 className='font-semibold z-50 text-blck text-xl absolute bottom-2 left-4'>Exterior Paints</h6>
                        <p className='font-lato font-normal text-base'>Lorem ipsum dolor sit amet consectetur. </p>
                        <button className='bg-white '>
                                Read More
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services