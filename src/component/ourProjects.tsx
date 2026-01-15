'use client';
import { useRef, useState } from 'react';
import EmblaCarousel, { SlideImages } from '@/component/EmblaCarousel/EmblaCarousel';
import Spline from '@splinetool/react-spline';
import EmblaCarouselFeedback from './EmblaCarousel/EmblaCarouselFeedbackSection';
import { EmblaOptionsType } from 'embla-carousel';
import { feedbackData } from './data/feedbackData';
import EmblaCarouselOurProjectsMobile from './EmblaCarousel/EmblaCarouselOurProjectsMobile';
import { v4 as uuidv4 } from 'uuid';

interface TranslationProps {
    translations: Record<string, string>;
}

export const SlideDescriptions = [
    {
        id: uuidv4(),
        src: '/assets/images/random-img-6.jpg',
        title: "TimeCrafters",
        text: "slide_descriptions1"
    },
    {
        id: uuidv4(),
        src: '/assets/images/random-img-7.jpg',
        title: "EcoTravel",
        text: "slide_descriptions2"
    },
    {
        id: uuidv4(),
        src: '/assets/images/random-img-8.jpg',
        title: "BookNest",
        text: "slide_descriptions3"
    },
    {
        id: uuidv4(),
        src: '/assets/images/random-img-9.jpg',
        title: "FitLife App",
        text: "slide_descriptions4"
    },
    {
        id: uuidv4(),
        src: '/assets/images/random-img-10.jpg',
        title: "UrbanArt Gallery",
        text: "slide_descriptions5"
    }
];

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const Slides = Array.from(Array(SLIDE_COUNT).keys())

const OurProjects = ({ translations }: TranslationProps) => {
    const splineRef = useRef<any>(null);
    //   const feedbackDataLocalized = locale === 'en' ? feedbackDataEN : feedbackData;


    const [selectedIndex, setSelectedIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const onSlideChange = (index: number) => {
        setFade(true);
        setSelectedIndex(index);
        setFade(false);

    };


    // Функція, яка виконується після завантаження сцени
    const onLoad = (splineApp: any) => {
        splineRef.current = splineApp;
    };

    // Тригер анімації, перевіряємо, що сцена завантажена
    const triggerAnimation = () => {
        if (splineRef.current) {
            splineRef.current.emitEvent('mouseDown', 'Backward');
        } else {
            console.log('Spline ще не завантажено');
        }
    };

    return (
        <section id='portfolio' className="mb-44">
            <h1 className="text-white font-nunito text-[28px] md:text-5xl mt-12 mb-10 text-center">
                {translations["our_projects"]}
            </h1>

            {/* Мобільна версія */}
            <div className="md:hidden">
                <EmblaCarouselOurProjectsMobile
                    slides={Slides}
                    options={OPTIONS}
                />
            </div>

            {/* Десктопна версія */}
            <div className="flex z-30 items-center">
                {/* Ліва частина з текстом і слайдером */}
                <div className="hidden xl:flex xl:flex-col xl:flex-[50%]">
                    <div
                        className={`text-white transition-opacity ${fade ? 'opacity-0' : 'opacity-100'
                            } duration-300 min-h-50 xl:block`}
                        style={{ transitionProperty: 'opacity' }}
                    >
                        <h2 className="mb-6 font-nunito text-2xl">
                            {SlideDescriptions[selectedIndex].title}
                        </h2>
                        <p className="text-base font-merriweather">
                            {translations[SlideDescriptions[selectedIndex].text]}
                        </p>
                    </div>

                    <div className="mt-4">
                        <EmblaCarousel
                            triggerAnimation={triggerAnimation}
                            onSlideChange={onSlideChange}
                        />
                    </div>
                </div>

                {/* Права частина зі Spline */}
                <div
  className="hidden md:!flex md:flex-[50%] justify-center items-center"
  onWheelCapture={(e) => {
    e.stopPropagation();
  }}
>
  <Spline
    scene="/tablet_new.splinecode"
    onLoad={(app) => (splineRef.current = app)}
  />
</div>

            </div>
        </section>

    );
};

export default OurProjects;
