import React from 'react';

const About = () => {
	return (
		<div className='flex flex-col items-center md:h-[531px] '>
			<h2 className="text-[28px] md:text-5xl md:mb-6 text-white py-12 font-nutino">Про нас</h2>
			<div className='flex flex-col gap-4 md:gap-20 md:flex-row'>
				<img src="/Logo3D.svg" alt="" className='md:w-[636px] md:h-[333px]'/>
				<p className='text-white md:w-[636px] md:h-[333px] text-4 font-nunito'>
					Ми — веб-студія, яка створює сучасні сайти для малого та великого бізнесу. Наша місія — поєднати стильний дизайн та досвід розробників у результат, який справді працює на клієнта. <br/> <br/>Ми віримо, що сайт має бути не просто красивим, а приносити користь — продавати, залучати клієнтів, будувати імідж. Саме тому ми об’єднуємо швидкість, зручність і стиль в одному продукті.
				</p>
			</div>
		</div>
	);
}

export default About;
