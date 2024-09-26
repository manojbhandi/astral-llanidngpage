'use client'
import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import clsx from 'clsx'
import CarouselText from '../carouselText'
import rainbow from '../../public/rainbow.svg'

type PropType = {
    slides: any
    options?: EmblaOptionsType,
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container relative">
                    {slides.map((img: any, index: number) => (
                        <div className="embla__slide" key={index}>
                            <div className=" ">
                                <CarouselText />
                                <Image
                                    src={img}
                                    // loader={externalImageLoader}
                                    width="0"
                                    height="0"
                                    // sizes="100vw"
                                    // style={{ width: "100%", height:'100%'}}
                                    className='w-full h-[600px]'
                                    alt={`carousel Image${index}`}
                                />
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    {/* <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} /> */}
                </div>

                <div className="embla__dots relative">
                    <div className='absolute bottom-[23rem] flex flex-col gap-2 right-10'>
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={clsx("bg-white bg-opacity-50 w-2 h-10 rounded-full transition-all ease-in-out duration-300 ", {
                                    "bg-opacity-100": index == selectedIndex
                                })}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
