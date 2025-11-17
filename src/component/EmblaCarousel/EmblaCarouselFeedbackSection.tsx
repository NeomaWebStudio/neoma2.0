'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import FeedbackCard, { FeedbackCardProps } from '../feedback-card'

type PropType = {
    slides: FeedbackCardProps[]
    options?: EmblaOptionsType
}

const EmblaCarouselFeedback: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container-feedback">
                    {slides.map((slide, index) => (
                        <FeedbackCard {...slide} key={index} />
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons-feedback">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </section>
    )
}

export default EmblaCarouselFeedback
