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
        text: "Розробка односторінкового сайту для бренду елітних годинників. Створено стильний лендінг, який підкреслює преміальність продукту та формує відчуття цінності часу."
    },
    {
        id: uuidv4(),
        src: '/assets/images/random-img-7.jpg',
        title: "EcoTravel",
        text: "Дизайн і запуск платформи для бронювання екологічних турів. Реалізовано інтерактивну карту, особистий кабінет користувача та систему онлайн-оплати."
    },
    {
        id: uuidv4(),
        src: '/assets/images/random-img-8.jpg',
        title: "BookNest",
        text: "Створення онлайн-бібліотеки з адаптивним пошуком і рекомендаціями. Особливу увагу приділено зручності навігації та сучасному UI."
    },
    {
        id: uuidv4(),
        src: '/assets/images/random-img-9.jpg',
        title: "FitLife App",
        text: "Розробка мобільного додатку для фітнесу з персональними тренуваннями, трекінгом прогресу та інтеграцією з розумними годинниками."
    },
    {
        id: uuidv4(),
        src: '/assets/images/random-img-10.jpg',
        title: "UrbanArt Gallery",
        text: "Віртуальна галерея сучасного мистецтва з 3D-туром, можливістю купівлі робіт та інтеграцією відеоекскурсій."
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
                            {SlideDescriptions[selectedIndex].text}
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
  onWheel={(e) => {
    // передаємо скрол сторінці
    window.scrollBy({ top: e.deltaY, behavior: 'auto' });
  }}
>
  <Spline
    scene='/tablet_new.splinecode'
    onLoad={onLoad}
    ref={splineRef}
  />
</div>
            </div>
        </section>

    );
};

export default OurProjects;
