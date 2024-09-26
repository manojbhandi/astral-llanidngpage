import Image from 'next/image'
import React from 'react'
import about from '../public/aboutAstral.png'
import rainbow from '../public/rainbow.svg'
import './about.css'
function About() {
    return (
        <div className='relative'>
            {/* <Image
                src={rainbow}
                height={0}
                width={0}
                className="absolute bottom-[20rem] right-0 w-[2000px] "
                alt="rainbow"
            /> */}
            <div className='flex p-20 flex-wrap gap-3 flex-col lg:flex-row lg:flex-nowrap ' >
                <div className='flex flex-col gap-3 lg:w-1/2'>
                    <h6 className='font-medium text-lg'>About Astral Paints</h6>
                    <h3 className='font-bold text-3xl heading mb-2'>Bringing Your Dreams To Life</h3>
                    <span className='text-[#656565] font-normal text-base lg:w-4/5'>
                        <p className='mb-2'>Lorem ipsum dolor sit amet consectetur. Placerat elementum lobortis phasellus porttitor amet odio tempor. Ac molestie fames id urna dui posuere ultricies aliquam. Gravida et ac ac donec. Lacus est diam at in pharetra velit luctus id pellentesque.</p>
                        
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Placerat elementum lobortis phasellus porttitor amet odio tempor. Ac molestie fames id urna dui posuere ultricies aliquam. Gravida et ac ac donec. Lacus est diam at in pharetra velit luctus id pellentesque.
                        </p>
                    </span>
                    
                    <button className='border-2 w-fit mt-12 rounded-full p-1 px-4 border-[#E70000] text-[#E70000]'>Read More</button>
                </div>
                <div>
                    <Image
                        src={about}
                        alt='about'
                        width={0}
                        height={0}
                        className='h-[34rem] w-[38rem]'
                    />
                </div>
            </div>
        </div>
    )
}

export default About