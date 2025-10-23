'use client';
import { useRef, useState } from 'react';
import EmblaCarousel from '@/component/EmblaCarousel/EmblaCarousel';
import Spline from '@splinetool/react-spline';

const SlideDescriptions = [
    {
        title: "TimeCrafters",
        text: "Розробка односторінкового сайту для бренду елітних годинників. Створено стильний лендінг, який підкреслює преміальність продукту та формує відчуття цінності часу."
    },
    {
        title: "EcoTravel",
        text: "Дизайн і запуск платформи для бронювання екологічних турів. Реалізовано інтерактивну карту, особистий кабінет користувача та систему онлайн-оплати."
    },
    {
        title: "BookNest",
        text: "Створення онлайн-бібліотеки з адаптивним пошуком і рекомендаціями. Особливу увагу приділено зручності навігації та сучасному UI."
    },
    {
        title: "FitLife App",
        text: "Розробка мобільного додатку для фітнесу з персональними тренуваннями, трекінгом прогресу та інтеграцією з розумними годинниками."
    },
    {
        title: "UrbanArt Gallery",
        text: "Віртуальна галерея сучасного мистецтва з 3D-туром, можливістю купівлі робіт та інтеграцією відеоекскурсій."
    }
];

const OurProjects = () => {
    const splineRef = useRef<any>(null);

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
        <section className='mb-44'>
            <h1 className='text-white font-nunito text-[28px] md:text-5xl mt-12 mb-10 text-center'>
                Наші проекти
            </h1>
            <div className='flex z-30'>
                <div className='flex-[50%]'>
                    <div
                        className={`text-white transition-opacity ${fade ? 'opacity-0' : 'opacity-100'} min-h-50`}
                        style={{ transitionProperty: 'opacity' }}
                    >
                        <h2 className='mb-6 font-nunito text-2xl'>
                            {SlideDescriptions[selectedIndex].title}
                        </h2>
                        <p className='text-base font-merriweather'>
                            {SlideDescriptions[selectedIndex].text}
                        </p>
                    </div>
                    <div>
                        <EmblaCarousel
                            triggerAnimation={triggerAnimation}
                            onSlideChange={onSlideChange}
                        />
                    </div>
                </div>
                <div className='hidden relative flex-[50%] xl:flex justify-center items-center 
                after:content-[""] after:absolute after:top-1/2  after:-translate-y-1/2 after:left-10 
                after:w-[138px] after:h-[80px] after:bg-[#05040D]'>
                    <Spline
                        scene='https://prod.spline.design/2-WT6wQTY0UGXc6z/scene.splinecode'
                        onLoad={onLoad}
                    />
                </div>

            </div>
        </section>
    );
};

export default OurProjects;
