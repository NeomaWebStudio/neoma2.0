'use client'

import React, { useState, useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import { DotButton, useDotButton } from './EmblaCarouselDotButtons'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { SlideDescriptions } from '../ourProjects'
import PortfolioCardMock from '../portfolio-card-mock'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const EmblaCarouselOurProjectsMobile: React.FC<PropType> = ({ slides, options }) => {
    const ourProjectsSlides = [
        'Frame 334.png',
        'https://picsum.photos/600/950?v=1',
        'https://picsum.photos/600/950?v=2',
        'https://picsum.photos/600/950?v=3',
        'https://picsum.photos/600/950?v=4'
    ]

    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])
    const [currentSlide, setCurrentSlide] = useState(0)

    // ✅ Додаємо управління кнопками
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

    useEffect(() => {
        setCurrentSlide(selectedIndex)
    }, [selectedIndex])

    return (
        <div className="embla w-full">
            <div className="embla__viewport w-full" ref={emblaRef}>
                <PortfolioCardMock author="" subTitle="" feedbackText="" />

                {/* <div className="embla__container w-full">
                    {slides.map((index) => (

                        <div className="embla__slide w-full" key={index}>

                            <div
                                className="embla__slide__img w-full h-[600px] bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url('${ourProjectsSlides[index]}')`,
                                    width: '100vw',
                                    marginLeft: 'calc(-50vw + 50%)',
                                    marginRight: 'calc(-50vw + 50%)'
                                }}
                            />
                        </div>
                    ))}
                </div> */}
            </div>

            {/* ✅ Блок керування як у робочому варіанті */}
            <div className="embla__controls mt-6">
                <div className="embla__buttons-feedback">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>

            {/* ✅ Текстовий блок */}
            {/* <div className="mt-6 min-h-40 text-white text-center px-4">
                <h2 className="mb-4 font-nunito text-2xl">
                    {SlideDescriptions[currentSlide]?.title}
                </h2>
                <p className="text-base font-merriweather">
                    {SlideDescriptions[currentSlide]?.text}
                </p>
            </div> */}
        </div>
    )
}

export default EmblaCarouselOurProjectsMobile

