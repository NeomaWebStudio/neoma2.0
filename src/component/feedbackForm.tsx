import React from 'react';
import Spline from '@splinetool/react-spline';

const FeedbackForm = () => {
	return (
		<div className='mt-12 flex w-full text-white border border-amber-200 mb-100'>
				<h2 className='border border-amber-500 font-nunito text-5xl text-white flex justify-center items-center mb-10'>Контакти</h2>
			<div>
			<div className='flex flex-col gap-3 border border-amber-900'>
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
			{/* <div className='absolute left-[50%] transform translateX-[-50%] w-[180px] h-[314px] '>
				<Spline scene="/cursor.splinecode"></Spline>
			</div> */}
			</div>
			<div className='flex flex-col w-[416px] h-[408px] gap-4 border border-amber-600'>
				<p>Залиште заявку, і ми запропонуємо найкращий варіант</p>
				<div className="relative"> {/* Name client */}
					<input type="text" id='name' className='border border-[#FFA157] rounded-3xl w-[416px] h-[40px] gap-1'/>
					<label htmlFor="name" className='absolute'>Ім'я</label>
				</div>

				<div className="relative"> {/* Phone client */}
					<input type="text" className='border border-[#FFA157] rounded-3xl w-[416px] h-[40px] gap-1'/>
				<label htmlFor="" className='absolute'>Номер телефону</label>
				</div>

				<div className="relative"> {/* Email client */}
					<input type="text" className='border border-[#FFA157] rounded-3xl w-[416px] h-[40px] gap-1'/>
				<label htmlFor="" className='absolute'>Пошта</label>
				</div>

				<div className="relative"> {/* Textarea client */}
					<textarea name="" id="" className=' resize-none w-fyll h-[120px] border border-[#FFA157] rounded-3xl'></textarea>
					<label htmlFor="" className='absolute left-0'>Коротко опишіть свій сайт запит</label>
				</div>
				<button type='submit' className='bg-[#FFA157] rounded-3xl w-[416px] h-[40px] cursor-pointer text-black'>Відправити заявку</button>
			</div>
		</div>
	);
}

export default FeedbackForm;
