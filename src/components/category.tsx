import React from 'react'
import './category.css'
import Image from 'next/image'
import categoryImg1 from '../public/categoryMain1.png'
import categoryImg2 from '../public/categoryMain2.png'
import categoryImg3 from '../public/categoryMain3.png'
import categoryImg4 from '../public/categoryMain4.png'
import categoryImg5 from '../public/categoryMain5.png'
function Category() {
    return (
        <div className='p-20 flex flex-col gap-5'>
            <div className='flex flex-col gap-3 lg:w-1/2'>
                <h6 className='font-medium text-lg'>About Astral Paints</h6>
                <h3 className='font-bold text-3xl heading mb-2'>Bringing Your Dreams To Life</h3>
            </div>
            <div className='flex lg:flex-row justify-between flex-col gap-3'>
                <div className="image-container">
                    <Image
                        src={categoryImg1}
                        width={0}
                        height={0}
                        alt='categoryImg1'
                        className='h-full w-full image'
                    />
                    <h6 className='font-semibold z-50 text-white text-xl absolute bottom-2 left-4'>Interior Paints</h6>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-3'>
                        <div className="image-container">
                            <Image
                                src={categoryImg2}
                                width={0}
                                height={0}
                                alt='categoryImg1'
                                className='h-full w-full image'
                            />
                            <h6 className='font-semibold z-50 text-white text-xl absolute bottom-2 left-4'>Exterior Paints</h6>

                        </div>
                        <div className="image-container">
                            <Image
                                src={categoryImg3}
                                width={0}
                                height={0}
                                alt='categoryImg1'
                                className='h-full w-full image'
                            />
                            <h6 className='font-semibold z-50 text-white text-xl absolute bottom-2 left-4'>Water Proofing</h6>

                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className="image-container">
                            <Image
                                src={categoryImg4}
                                width={0}
                                height={0}
                                alt='categoryImg1'
                                className='h-full w-full image'
                            />
                            <h6 className='font-semibold z-50 text-white text-xl absolute bottom-2 left-4'>Undercoats</h6>

                        </div>
                        <div className="image-container">
                            <Image
                                src={categoryImg5}
                                width={0}
                                height={0}
                                alt='categoryImg1'
                                className='h-full w-full image'
                            />
                            <h6 className='font-semibold z-50 text-white text-xl absolute bottom-2 left-4'>Painting Tools</h6>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category