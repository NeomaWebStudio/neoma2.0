'use client';
import React, {useState, useEffect} from 'react';
import Nav from './nav';
import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
	ssr: false,
});

interface HeaderProps {
	translations: Record<string, string>;
}

export function Header({ translations }: HeaderProps) {
	const params = useParams();
	const locale = params?.locale ?? 'uk';
	const [isSplineLoaded, setIsSplineLoaded] = useState(false);
	const [showPlaceholder, setShowPlaceholder] = useState(true);

	// useEffect(() => {
	// 	// Preload the placeholder image
	// 	const img = new Image();
	// 	img.src = '/phone.png';
	// }, []);

	return (
		<div className='xl:h-screen mb:12 md:mb-24 flex flex-col'>
			<Nav translations={translations} />
			<div className='flex flex-col md:flex-row gap-6 mt-12 xl:mt-40'>
				<div className='md:w-2/3 lg:w-1/2'>
					<h1 className='text-[38px] xl:text-[64px] tracking-[3%] xl:leading-[68px] text-white'>{translations['main_block_title']}</h1>
					<p className='text-[20px] xl:text-[32px] leading-9.5 tracking-0 text-white mt-4'>{translations['main_block_description']}</p>
					<div className='flex flex-col xl:flex-row mt-20 md:mt-10 gap-6'>
						<button className='text-[#FFA157] text-xl w-full px-4 py-4 border border-[#ffa157] rounded-[50px] shadow-[inset_4px_4px_0_rgba(255,255,255,0.25),inset_4px_4px_12px_rgba(255,255,255,0.1),inset_-4px_-4px_4px_rgba(0,0,0,0.15)] hover:shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25),inset_4px_4px_12px_rgba(255,255,255,0.1),inset_-4px_-4px_4px_rgba(0,0,0,0.15),4px_4px_8px_4px_rgba(252,125,23,0.5)]
             transition-shadow duration-300 ease-in-out bg-[#05040D]'>{translations['our_projects']}</button>
						<button className='text-black text-xl w-full px-4 py-4 border border-[#FFA157] rounded-[50px] text-center shadow-[inset_4px_4px_0_rgba(255,255,255,0.25),inset_4px_4px_12px_rgba(255,255,255,0.1),inset_-4px_-4px_4px_rgba(0,0,0,0.15)] hover:shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25),inset_4px_4px_12px_rgba(255,255,255,0.1),inset_-4px_-4px_4px_rgba(0,0,0,0.15),4px_4px_8px_4px_rgba(252,125,23,0.5)]
             transition-shadow duration-300 ease-in-out bg-[#FFA157]'>{translations['contact_btn']}</button>
					</div>
				</div>
				<div className="relative md:w-1/3 lg:w-1/2 flex justify-center pointer-events-none scale-75 xs:scale-90 h-[660px] md:h-auto md:scale-65 lg:scale-75 xl:scale-90 overflow-visible! md:mt-[-120px] md:ml-[80px] lg:ml-0">
					{showPlaceholder && (
						<div 
							className={`absolute top-2.5 transition-opacity duration-500 ${
								isSplineLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
							}`}
						>
							<img src="/phone.png" alt="Phone" className='object-cover mt-[40px]' />
						</div>
					)}
					<div 
						className={`transition-all duration-1000 ease-out ${
							isSplineLoaded 
								? 'opacity-100 translate-y-0' 
								: 'opacity-0 translate-y-8'
						}`}
					>
						<Spline 
							scene='/phone.splinecode' 
							onLoad={() => {
								setIsSplineLoaded(true);
								// Hide placeholder after fade transition
								setTimeout(() => setShowPlaceholder(false), 500);
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
