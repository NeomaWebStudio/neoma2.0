import React from 'react';
import Spline from '@splinetool/react-spline';

const FeedbackForm = () => {
	return (
		<div className='mt-12 w-full text-white mb-100 fidback-form-main-div'>	
			<div className='text-center'>
				<h2 className='font-nunito text-5xl text-white flex justify-center items-center mb-10'>Контакти</h2>
			</div>
			<div className="flex justify-center gap-6 w-full">
				<div className="flex flex-col gap-3 w-[315px]">
					<h4 className='text-4 text-white'>Шукай нас у месенджерах та соцмережах:</h4>
					<div className='flex flex-col w-[315px] h-[280px] gap-2 left-0 relative'>
						<a href='#' className='flex py-2 px-4 text-[#FFA157] text-[16px] gap-1'><img src='assets/icon/phone.svg' alt="" />+380684837709</a>
						<a href='#' className='flex py-2 px-4 text-[#FFA157] text-[16px] gap-1'><img src='assets/icon/mail.svg' alt="" />neomawebstudio@gmail.com</a>
						<a href='#' className='flex py-2 px-4 text-[#FFA157] text-[16px] gap-1'><img src='assets/icon/telegram.svg' alt="" />Telegram</a>
						<a href='#' className='flex py-2 px-4 text-[#FFA157] text-[16px] gap-1'><img src='assets/icon/viber.svg' alt="" />Viber</a>
						<a href='#' className='flex py-2 px-4 text-[#FFA157] text-[16px] gap-1'><img src='assets/icon/instagram.svg' alt="" />Instagram</a>
						<a href='#' className='flex py-2 px-4 text-[#FFA157] text-[16px] gap-1'><img src='assets/icon/facebook.svg' alt="" />Facebook</a>
					</div>
				</div>
				<div className="flex justify-center items-center w-[608px] h-[414px]">
					<div className="flex justify-center items-center translate-y-17">
						<Spline scene="/cursor.splinecode" style={{ width: "280px", height: "454px" }}/>
					</div>
				</div>
				<div className="flex flex-col w-[416px] h-[408px] gap-4">
					<p>Залиште заявку, і ми запропонуємо найкращий варіант</p>
					<div className="flex items-center w-full max-w-md border border-orange-500 rounded-full px-4 py-3">
						<svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-white-500 mr-3' width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path d="M5 20V19C5 15.134 8.13401 12 12 12C15.866 12 19 15.134 19 19V20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<input
							type="text"
							placeholder="Ім’я"
							className="bg-transparent w-full outline-none text-[16px] placeholder:text-white text-lg"
						/>
					</div>

					<div className="flex items-center w-full max-w-md border border-orange-500 rounded-full px-4 py-3"> {/* Phone client */}
						<svg width="24" className='w-5 h-5 text-white-500 mr-3' height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17.1181 13.702L12.9998 14.5C10.2181 13.1038 8.49985 11.5 7.49985 9L8.2698 4.8699L6.81436 1L3.06344 1C1.9359 1 1.04799 1.93178 1.21639 3.04668C1.63679 5.83 2.87638 10.8765 6.49985 14.5C10.305 18.3052 15.7856 19.9564 18.8019 20.6127C19.9666 20.8662 20.9998 19.9575 20.9998 18.7655L20.9998 15.1812L17.1181 13.702Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<input type="text" placeholder='Номер телефону' className='bg-transparent w-full outline-none text-[16px] placeholder:text-white text-lg'/>
					</div>

					<div className="flex items-center w-full max-w-md border border-orange-500 rounded-full px-4 py-3"> {/* Email client */}
						<svg width="24" height="24" className="w-5 h-5 text-white mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7 9L12 12.5L17 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" stroke="white" stroke-width="1.5"/>
						</svg>
						<input type="email" placeholder='Пошта' className='bg-transparent w-full outline-none text-[16px] placeholder:text-white text-lg'/>
					</div>

					<div className="relative"> {/* Textarea client */}
						<textarea name="" id="" placeholder='Коротко опишіть свій сайт запит' className=' resize-none w-full h-[120px] text-[16px] py-2 px-4 placeholder:text-white border border-orange-500 rounded-3xl'></textarea>
					</div>
					<button type='submit' className='bg-[#FFA157] rounded-3xl w-full h-[40px] leading-[40px] cursor-pointer text-black text-[16px]'>Відправити заявку</button>
				</div>
			</div>
		</div>
	);
}

export default FeedbackForm;
