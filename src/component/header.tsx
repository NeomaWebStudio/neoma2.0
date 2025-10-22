'use client';
import React from 'react';
import Nav from './nav';
import Spline from '@splinetool/react-spline';
import { useParams } from 'next/navigation'; // замість next/router

interface HeaderProps {
  translations: Record<string, string>;
}

export function Header({ translations }: HeaderProps) {
	const params = useParams(); 
	console.log(translations)
  	const locale = params?.locale ?? 'uk'; // fallback, якщо undefined
	
	return (
		<div className='flex w-full flex-col h-screen relative border '> {/* Загальний контейнер */}
			<div className=''>
				<Nav translations={translations}/>
			</div>
			<div className='w-full flex'>
<div className=' mt-[120px] bg-[#05040D] relative flex flex-row '>
				<div className=' w-[676px] '>
					<h1 className='text-[64px] tracking-[3%] leading-[68px] text-white'>{translations['main_block_title']}</h1>
					<p className='text-[32px] leading-9.5 tracking-0 text-white mt-4'>{translations['main_block_description']}</p>
					<div className='mt-[32px] flex gap-6'>
						<button className='text-[#FFA157] w-[311px] h-10 px-4 py-2 border border-[#ffa157] rounded-[24px] shadow-[inset_4px_4px_4px_0_rgba(253,136,10,0.06),inset_4px_4px_12px_0_rgba(255,255,255,0.08),inset_-4px_-4px_4px_0_rgba(0,0,0,0.45)] bg-[#05040D]'>{translations['our_projects']}</button>
						<button className='text-black w-[311px] h-10 px-4 py-2 border border-[#FFA157] rounded-[24px] shadow-[inset_4px_4px_4px_0_rgba(255,255,255,0.25),inset_4px_4px_12px_0_rgba(255,255,255,0.1),inset_-4px_-4px_4px_0_rgba(0,0,0,0.15)] bg-[#FFA157] flex items-center justify-center'>{translations['contact_btn']}</button>
					</div>
				</div>
			</div>
			<div className='z-10 w-[540px]	h-[690px] right-0 top-[70px] '>
				<Spline scene='/phone.splinecode' className="pointer-events-none"/>
			</div>
			</div>
			 
		</div>
	);
}

export default Header;
