'use client';
import Nav from './nav';
import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Link } from 'react-scroll';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
	ssr: false,
});

interface HeaderProps {
	translations: Record<string, string>;
}

export function Header({ translations }: HeaderProps) {
	const params = useParams();
	const locale = params?.locale ?? 'uk';

	return (
		<div className='xl:h-screen mb-24'>
			<Nav translations={translations} />
			<div className='flex gap-6 mt-12 xl:mt-40'>
				<div className='md:w-[55%] aos-desktop-only'
					data-aos="fade-right"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine">
					<h1 className='text-[38px] xl:text-[64px] tracking-[3%] xl:leading-[68px] text-white'>{translations['main_block_title']}</h1>
					<p className='text-[20px] xl:text-[32px] leading-9.5 tracking-0 text-white mt-4'>{translations['main_block_description']}</p>
					<div className='flex flex-col xl:flex-row mt-20 md:mt-10 xl:mt-20 gap-6'>
						<Link
							to={'portfolio'}
							smooth={true}
							offset={-40}
							style={{ width: '100%', fontFamily: 'inherit'}}
						>
							<button className='text-[#FFA157] text-xl w-full px-4 py-4 border border-[#ffa157] rounded-[50px] shadow-[inset_4px_4px_0_rgba(255,255,255,0.25),inset_4px_4px_12px_rgba(255,255,255,0.1),inset_-4px_-4px_4px_rgba(0,0,0,0.15)] hover:shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25),inset_4px_4px_12px_rgba(255,255,255,0.1),inset_-4px_-4px_4px_rgba(0,0,0,0.15),4px_4px_8px_4px_rgba(252,125,23,0.5)]
             transition-shadow duration-300 ease-in-out bg-[#05040D]'>{translations['our_projects']}</button>
						</Link>
						<Link
							to={'contact'}
							smooth={true}
							offset={-40}
							style={{ width: '100%', fontFamily: 'inherit' }}
						>
							<button className='text-black text-xl w-full px-4 py-4 border border-[#FFA157] rounded-[50px] text-center shadow-[inset_4px_4px_0_rgba(255,255,255,0.25),inset_4px_4px_12px_rgba(255,255,255,0.1),inset_-4px_-4px_4px_rgba(0,0,0,0.15)] hover:shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25),inset_4px_4px_12px_rgba(255,255,255,0.1),inset_-4px_-4px_4px_rgba(0,0,0,0.15),4px_4px_8px_4px_rgba(252,125,23,0.5)]
             transition-shadow duration-300 ease-in-out bg-[#FFA157]'>{translations['contact_btn']}</button>
						</Link>
					</div>
				</div>
				<div className="hidden md:flex md:justify-center w-[45%] aos-desktop-only"
					data-aos="fade-zoom-in"
					data-aos-easing="ease-in-back"
					data-aos-delay="300"
					data-aos-offset="0"
					data-aos-duration="3000">

					<Spline
						scene='/phone.splinecode'
						className="pointer-events-none scale-75 xs:scale-90 md:scale-65 lg:scale-75 xl:scale-90 overflow-visible! md:mt-[-120px] md:ml-[-80px] lg:ml-0"
					/>
				</div>
			</div>
		</div>
	);
}

export default Header;
