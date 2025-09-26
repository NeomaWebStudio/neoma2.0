'use client';
import { useRef } from 'react';
import EmblaCarousel from '@/component/EmblaCarousel/EmblaCarousel';
import Spline from '@splinetool/react-spline';

const OurProjects = () => {
  const splineRef = useRef<any>(null);

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
      <h1 className='text-white font-nunito text-5xl mt-12 mb-10 text-center'>
        Наші проекти
      </h1>
      <div className='flex items-stretch relative'>
        <div className='flex flex-col flex-6/12 gap-24 z-30'>
          <div className='text-white'>
            <h2 className='mb-6 font-nunito text-2xl'>TimeCrafters</h2>
            <p className='text-base font-merriweather'>
              Проєкт розробки односторінкового сайту для бренду елітних годинників. 
              Основна задача полягала у створенні стильного та водночас функціонального лендінгу, 
              який підкреслює преміальність продукту та формує відчуття цінності часу.
            </p>
          </div>
          <div className='relative index-1'>
            {/* Передаємо triggerAnimation в EmblaCarousel */}
            <EmblaCarousel triggerAnimation={triggerAnimation} />
          </div>
        </div>

        <div className='flex-6/12 flex justify-center items-center'>
          <div className='absolute w-[636px] h-[628px] right-0 top-0'>
            <Spline
              scene='/tabled.splinecode'
              onLoad={onLoad}
              className='absolute'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
