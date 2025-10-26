import React from 'react';
import MenuItemsList from './MenuItemsList';

interface TranslationProps {
  translations: Record<string, string>;
}

const Footer = ({ translations }: TranslationProps) => {

	return (
			<div className='m-10'>
				<MenuItemsList translations={translations}/>
				<div className='mt-[15px] w-full flex justify-center'>
					<img src="/logo.svg" alt="Логотип" className="h-[120px] w-[120px]" />
				</div>
				<p className='mt-[15px] text-center text-white'>© 2025 Neoma Web Studio. Всі права захищені</p>
			</div>
	);
}

export default Footer;
