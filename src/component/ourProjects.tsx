'use client';
import { useRef } from 'react';
// import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from '@/component/EmblaCarousel/EmblaCarousel';
import Spline from '@splinetool/react-spline';

const OurProjects = () => {
    const splineRef = useRef<any>(null);

    const onLoad = (splineApp: any) =>{
        splineRef.current = splineApp;
    }

    const triggerAnimation = () =>{
        splineRef.current.emitEvent('mouseDown', 'Text');
    }

    return (
        <section className='mb-44'>
            <h1 className='text-white font-nunito text-5xl mt-12 mb-10 text-center'>
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
                
                <div className='flex-6/12 flex justify-center items-center'></div>

                <Spline
                    scene='https://prod.spline.design/2-WT6wQTY0UGXc6z/scene.splinecode'
                    onLoad={onLoad}
                    className='absolute'
                />
            </div>
        </section>
    );
};

export default OurProjects;
