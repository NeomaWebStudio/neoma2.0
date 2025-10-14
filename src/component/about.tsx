import React from 'react';

const About = () => {
	return (
		<div className='hidden xs:block mb-24'>
			<h2 className="text-[28px] md:text-4xl lg:text-5xl text-center md:mb-6 text-white py-12 font-nutino">Про нас</h2>

			<div className='flex flex-col md:flex-row gap-4 md:gap-20 '>
				<div className='flex items-center md:flex-1'>
					<img src="/Logo3D.svg" alt="" className='' />
				</div>
				<p className='text-white text-4 font-nunito md:flex-1'>
					Ми — веб-студія, яка створює сучасні сайти для малого та великого бізнесу. Наша місія — поєднати стильний дизайн та досвід розробників у результат, який справді працює на клієнта. <br /> <br />Ми віримо, що сайт має бути не просто красивим, а приносити користь — продавати, залучати клієнтів, будувати імідж. Саме тому ми об’єднуємо швидкість, зручність і стиль в одному продукті.
				</p>

			</div>
		</div>
	);
}

export default About;
