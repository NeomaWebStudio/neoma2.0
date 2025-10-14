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
            <h1 className='text-white font-nunito text-[28px] md:text-5xl mt-12 mb-10 text-center'>
                Наші проекти
            </h1>
            <div className='flex items-stretch relative'>
                <div className='flex flex-col flex-6/12 gap-24 z-30'>
                    <div className='text-white '>
                        <h2 className='mb-6 font-nunito text-2xl'>TimeCrafters</h2>
                        <p className='text-base font-merriweather'>
                            Проєкт розробки односторінкового сайту для бренду елітних
                            годинників. Основна задача полягала у створенні стильного та
                            водночас функціонального лендінгу, який підкреслює преміальність
                            продукту та формує відчуття цінності часу.
                        </p>
                    </div>
                    <div className=''>
                        <EmblaCarousel triggerAnimation={triggerAnimation} />
                    </div>
                </div>

                {/* <div className='relative flex-6/12 flex justify-center items-center 
                after:content-[""] after:absolute after:top-1/2  after:-translate-y-1/2 after:left-10 
                after:w-[138px] after:h-[80px] after:bg-[#05040D]'>
                    <Spline
                        scene='https://prod.spline.design/2-WT6wQTY0UGXc6z/scene.splinecode'
                        onLoad={onLoad}
                    />
                </div> */}

            </div>
        </section>
    );
};

export default OurProjects;
