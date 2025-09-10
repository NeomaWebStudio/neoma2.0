import React from 'react';

const About = () => {
	return (
		<div className='flex flex-col items-center h-[531px] '>
			<h2 className="text-5xl mb-6 text-white py-12">Про нас</h2>
			<div className='flex gap-20 flex-row'>
				<img src="/Logo3D.svg" alt="" className='w-[636px] h-[333px]'/>
				<p className='text-white flex items-center w-[636px] h-[333px] text-4 font-nunito'>
					Ми — веб-студія, яка створює сучасні сайти для малого та великого бізнесу. Наша місія — поєднати стильний дизайн та досвід розробників у результат, який справді працює на клієнта. <br/> <br/>Ми віримо, що сайт має бути не просто красивим, а приносити користь — продавати, залучати клієнтів, будувати імідж. Саме тому ми об’єднуємо швидкість, зручність і стиль в одному продукті.
				</p>
			</div>
		</div>
	);
}

export default About;
