import React from 'react';
import MenuItemsList from './MenuItemsList';

interface TranslationProps {
  translations: Record<string, string>;
}

const Footer = ({ translations }: TranslationProps) => {

	return (
		<div className='w-full h-[284px] bg-[#0A0819] flex justify-center'>
			<div className='mt-[40px]'>
				<MenuItemsList translations={translations}/>
				<div className='mt-[15px] w-full flex justify-center'>
					<img src="/logo.svg" alt="Логотип" className="h-[120px] w-[120px]" />
				</div>
				<p className='mt-[15px] text-center text-white'>© 2025 Neoma Web Studio. Всі права захищені</p>
			</div>
		</div>
	);
}

export default Footer;
