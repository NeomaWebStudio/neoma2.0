'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => null,
});

export default function DynamicSpline() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => setShow(true));
    } else {
      setTimeout(() => setShow(true), 300);
    }
  }, []);

  if (!show) return null;

  return (
    <div
      className="
        hidden 
        md:flex 
        md:justify-center 
        w-[45%] 
        h-[500px] 
        relative 
        aos-desktop-only
      "
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
      data-aos-duration="3000"
    >
      <Spline
        scene="/phone.splinecode"
        className="
          pointer-events-none 
          scale-75 
          xs:scale-90 
          md:scale-65 
          lg:scale-75 
          xl:scale-90 
          overflow-visible! 
          md:mt-[-120px] 
          md:ml-[-80px] 
          lg:ml-0
        "
      />
    </div>
  );
}