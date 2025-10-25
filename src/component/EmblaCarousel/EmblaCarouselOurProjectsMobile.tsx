import React, { useState, useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import { DotButton, useDotButton } from './EmblaCarouselDotButtons'
import { SlideDescriptions } from '../ourProjects'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const EmblaCarouselOurProjectsMobile: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])
    const [currentSlide, setCurrentSlide] = useState(0)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    useEffect(() => {
        setCurrentSlide(selectedIndex)
    }, [selectedIndex])

    return (
        <div className="embla w-full">
            <div className="embla__viewport w-full" ref={emblaRef}>
                <div className="embla__container w-full">
                    {slides.map((index) => (
                        <div className="embla__slide w-full" key={index}>
                            <div
                                className="embla__slide__img w-full h-[600px] bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url(https://picsum.photos/600/950?v=${index})`,
                                    width: '100vw',
                                    marginLeft: 'calc(-50vw + 50%)',
                                    marginRight: 'calc(-50vw + 50%)'
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6 min-h-40 text-white">
                <h2 className='mb-6 font-nunito text-2xl'>
                    {SlideDescriptions[currentSlide].title}
                </h2>
                <p className='text-base font-merriweather'>
                    {SlideDescriptions[currentSlide].text}
                </p>
            </div>

            <div className="embla__controls">
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EmblaCarouselOurProjectsMobile
