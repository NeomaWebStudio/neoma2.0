'use client';
import { useRef } from 'react';
// import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from '@/component/EmblaCarousel/EmblaCarousel';
import Spline from '@splinetool/react-spline';

const OurProjects = () => {
    const splineRef = useRef<any>(null);
    const myRef = useRef<any>(null);

    const handleCustomClick = () => {
        // console.log('🚀 ~ splineRef.current:', splineRef.current);
        // if (!splineRef.current) return;
        // const obj = splineRef.current.findObjectByName('Forward'); // replace with real name
        // console.log('🚀 ~ obj:', obj);
        // if (obj) {
        //     splineRef.current.emitEvent('mouseDown', obj.name);
        // }
    };

    function onLoad(splineApp: any) {
        splineRef.current = splineApp;

        console.log('Spline loaded:', splineApp);

        if (splineApp.getAllObjects) {
            const objects = splineApp.getAllObjects();
            const object = splineApp.findObjectByName('Forkward');
            console.log('🚀 ~ object:', object);
            console.log('All objects:', objects);
            if (object) {
                splineRef.current.emitEvent('mouseDown', object.name);
            }
            if (Array.isArray(objects)) {
                const a = objects.find((obj) => obj.name === 'Forward');
                console.log('🚀 ~ a:', a);
            }
        }
    }

    return (
        <section className='mb-44'>
            <h1 className='text-white font-nunito text-5xl mt-12 mb-10 text-center'>
                Наші проекти
            </h1>
            <div className='flex items-stretch'>
                <div className='flex flex-col flex-6/12 gap-24'>
                    <div className='text-white '>
                        <h2 className='mb-6 font-nunito text-2xl'>TimeCrafters</h2>
                        <p className='text-base'>
                            Проєкт розробки односторінкового сайту для бренду елітних
                            годинників. Основна задача полягала у створенні стильного та
                            водночас функціонального лендінгу, який підкреслює преміальність
                            продукту та формує відчуття цінності часу.
                        </p>
                        {/* <div className="w-fit ml-auto">Детальніше</div> */}
                    </div>
                    <div className=''>
                        <EmblaCarousel handleCustomClick={handleCustomClick} />
                    </div>
                </div>

                <div className='flex-6/12 flex justify-center items-center'>
                    <Spline
                        scene='https://prod.spline.design/2-WT6wQTY0UGXc6z/scene.splinecode'
                        ref={splineRef}
                        onLoad={onLoad}
                    />
                </div>
            </div>
        </section>
    );
};

export default OurProjects;
