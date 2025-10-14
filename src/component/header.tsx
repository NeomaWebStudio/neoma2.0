import React from 'react';
import Nav from './nav';
import Spline from '@splinetool/react-spline';

const Header = () => {
	return (
		<div className='flex flex-col h-screen'> {/* Загальний контейнер */}
			<div className=''>
				<Nav />
			</div>
			{/* <div className=' mt-[54px] md:mt-[140px] md:w-[636px] bg-[#05040D] relative md:flex flex-col   '>
				<div className=' w-full '>
					<h1 className='text-[38px] md:text-[64px] tracking-[3%] leading-[68px] text-white'>Цифрові рішення, <br /> що залучають <br /> клієнтів</h1>
					<p className='text-[20px] md:text-[32px] leading-9.5 tracking-0 text-white mt-4'>Кожна функція створена для <br /> ефективності та зростання вашого бренду</p>
					<div className='flex flex-col md:flex-row mt-[32px]  gap-6'>
						<button className='text-[#FFA157] w-full md:w-[311px] h-10 px-4 py-2 border border-[#ffa157] rounded-[24px] shadow-[inset_4px_4px_4px_0_rgba(253,136,10,0.06),inset_4px_4px_12px_0_rgba(255,255,255,0.08),inset_-4px_-4px_4px_0_rgba(0,0,0,0.45)] bg-[#05040D]'>Наші проекти</button>
						<button className='text-black w-full md:w-[311px] h-10 px-4 py-2 border border-[#FFA157] rounded-[24px] shadow-[inset_4px_4px_4px_0_rgba(255,255,255,0.25),inset_4px_4px_12px_0_rgba(255,255,255,0.1),inset_-4px_-4px_4px_0_rgba(0,0,0,0.15)] bg-[#FFA157] flex items-center justify-center'>Зв'язатися з нами</button>
					</div>
				</div>
			</div> */}
			{/* <div className='md:absolute z-10 md:w-[700px] md:h-[570px] bottom-5 right-[-83px] after:content-[""] after:absolute after:bottom-3 after:right-5 after:w-[138px] after:h-[45px] after:bg-[#05040D] '>
				<Spline scene='https://prod.spline.design/iAnALJoO3-LokGfj/scene.splinecode' className="pointer-events-none" />
			</div> */}
			{/* <div className='w-[480px] h-[1970px] bg-amber-500'>
				<Spline scene='https://prod.spline.design/iAnALJoO3-LokGfj/scene.splinecode' className="pointer-events-none w-280px" />
			</div> */}
		</div>
	);
}

export default Header;
