import React from 'react';
import MenuItemsList from './MenuItemsList';
import { MenuTranslationProps } from '@/utils/types';

const Footer = ({ translations }: MenuTranslationProps) => {

	return (
		<div id='footer'>
			{/* Десктоп і планшет */}
			<div className="hidden md:flex w-full h-[284px] bg-[#0A0819] justify-center">
				<div className="mt-[40px]">
				<MenuItemsList translations={translations} />
				<div className="mt-[15px] w-full flex justify-center">
					<img src="/logo.svg" alt="Логотип" className="h-[120px] w-[120px]" />
				</div>
				<p className="mt-[15px] text-center text-white">
					© 2025 Neoma Web Studio. Всі права захищені
				</p>
				</div>
			</div>

			{/* Мобільна версія */}
			<div className="block md:hidden w-full bg-[#0A0819]">
				<div className="m-10 pt-[40px] pb-[40px]">
					<MenuItemsList translations={translations} />
					<div className="mt-[15px] w-full flex justify-center">
					<img src="/logo.svg" alt="Логотип" className="h-[120px] w-[120px]" />
					</div>
					<p className="mt-[15px] text-center text-white">
					© 2025 Neoma Web Studio. Всі права захищені
					</p>
				</div>
				
			</div>
		</div>
			
	);
}

export default Footer;
