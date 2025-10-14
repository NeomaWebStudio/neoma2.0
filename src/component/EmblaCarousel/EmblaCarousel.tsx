'use client'
import { useCallback, useEffect, useRef } from 'react';
import type {
    EmblaCarouselType,
    EmblaEventType,
    EmblaOptionsType
} from 'embla-carousel';
import Image from 'next/image';
// import CallbackType from "embla-carousel"
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from '@/component/EmblaCarousel/EmblaCarouselArrowButtons';
import { DotButton, useDotButton } from '@/component/EmblaCarousel/EmblaCarouselDotButtons';
import useEmblaCarousel from 'embla-carousel-react';

const TWEEN_FACTOR_BASE = 0.52

const numberWithinRange = (number: number, min: number, max: number): number =>
    Math.min(Math.max(number, min), max)

type PropType = {
    // slides: number[]
    // options?: EmblaOptionsType
    // @ts-ignore
    triggerAnimation?: CallbackType,
    onSlideChange?: (index: number) => void
}

const SlideImages = [

    {
        title: "TimeCrafters",
        text: "Проєкт розробки односторінкового сайту для бренду елітних годинників. Основна задача полягала у створенні стильного та водночас функціонального лендінгу, який підкреслює преміальність продукту та формує відчуття цінності часу.",
        src: '/assets/images/random-img-1.jpg',
    },
    {
        title: "TimeCrafters",
        text: "Проєкт розробки односторінкового сайту для бренду елітних годинників. Основна задача полягала у створенні стильного та водночас функціонального лендінгу, який підкреслює преміальність продукту та формує відчуття цінності часу.",
        src: '/assets/images/random-img-2.jpg',
    },
    {
        title: "TimeCrafters",
        text: "Проєкт розробки односторінкового сайту для бренду елітних годинників. Основна задача полягала у створенні стильного та водночас функціонального лендінгу, який підкреслює преміальність продукту та формує відчуття цінності часу.",
        src: '/assets/images/random-img-3.jpg',
    },
    {
        title: "TimeCrafters",
        text: "Проєкт розробки односторінкового сайту для бренду елітних годинників. Основна задача полягала у створенні стильного та водночас функціонального лендінгу, який підкреслює преміальність продукту та формує відчуття цінності часу.",
        src: '/assets/images/random-img-4.jpg',
    },
    {
        title: "TimeCrafters",
        text: "Проєкт розробки односторінкового сайту для бренду елітних годинників. Основна задача полягала у створенні стильного та водночас функціонального лендінгу, який підкреслює преміальність продукту та формує відчуття цінності часу.",
        src: '/assets/images/random-img-5.jpg',
    }
    // '/assets/images/random-img-1.jpg',
    // '/assets/images/random-img-2.jpg',
    // '/assets/images/random-img-3.jpg',
    // '/assets/images/random-img-4.jpg',
    // '/assets/images/random-img-5.jpg'
]

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const Slides = Array.from(Array(SLIDE_COUNT).keys())

const EmblaCarousel: React.FC<PropType> = ({ triggerAnimation, onSlideChange }) => {
    // const { slides, options } = props

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const tweenFactor = useRef(0)
    const tweenNodes = useRef<HTMLElement[]>([])
    const throttleRef = useRef<NodeJS.Timeout | null>(null);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector('.embla__slide__img') as HTMLElement
        })
    }, [])

    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
    }, [])

    const tweenScale = useCallback(
        (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
            const engine = emblaApi.internalEngine()
            const scrollProgress = emblaApi.scrollProgress()
            const slidesInView = emblaApi.slidesInView()
            const isScrollEvent = eventName === 'scroll'

            emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
                let diffToTarget = scrollSnap - scrollProgress
                const slidesInSnap = engine.slideRegistry[snapIndex]

                slidesInSnap.forEach((slideIndex) => {
                    if (isScrollEvent && !slidesInView.includes(slideIndex)) return

                    if (engine.options.loop) {
                        engine.slideLooper.loopPoints.forEach((loopItem) => {
                            const target = loopItem.target()

                            if (slideIndex === loopItem.index && target !== 0) {
                                const sign = Math.sign(target)

                                if (sign === -1) {
                                    diffToTarget = scrollSnap - (1 + scrollProgress)
                                }
                                if (sign === 1) {
                                    diffToTarget = scrollSnap + (1 - scrollProgress)
                                }
                            }
                        })
                    }

                    const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
                    const scale = numberWithinRange(tweenValue, 0, 1).toString()
                    const tweenNode = tweenNodes.current[slideIndex]
                    tweenNode.style.transform = `scale(${scale})`
                })
            })
        },
        []
    )

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            if (onSlideChange) {
                onSlideChange(emblaApi.selectedScrollSnap());
            }
        };

        emblaApi.on('select', onSelect);
        // Call once on mount
        onSelect();

        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, onSlideChange]);

    useEffect(() => {
        if (!emblaApi) return

        setTweenNodes(emblaApi)
        setTweenFactor(emblaApi)
        tweenScale(emblaApi)

        emblaApi
            .on('reInit', setTweenNodes)
            .on('reInit', setTweenFactor)
            .on('reInit', tweenScale)
            .on('scroll', tweenScale)
            .on('slideFocus', tweenScale)
    }, [emblaApi, tweenScale, setTweenNodes, setTweenFactor])

    const throttledTriggerAnimation = () => {
        if (throttleRef.current) return;
        if (typeof triggerAnimation === 'function') {
            triggerAnimation();
        }
        throttleRef.current = setTimeout(() => {
            throttleRef.current = null;
        }, 2000);
    };

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {Slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div>
                                <Image
                                    width={800}
                                    height={600}
                                    alt={`Slide ${index + 1}`}
                                    className="embla__slide__img"
                                    src={SlideImages[index].src}
                                    priority
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <PrevButton onClick={() => {
                    onPrevButtonClick()
                    throttledTriggerAnimation()
                }}
                    disabled={prevBtnDisabled}
                    className='hidden md:block' />

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

                <NextButton onClick={() => {
                    onNextButtonClick()
                    throttledTriggerAnimation()
                }} disabled={nextBtnDisabled}
                    className='hidden md:block' />

            </div>
        </div>
    )
}

export default EmblaCarousel
