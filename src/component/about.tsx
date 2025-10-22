import React from 'react';

interface TranslationProps {
  translations: Record<string, string>;
}

const About = ({ translations }: TranslationProps) => {
	return (
		<div className='flex flex-col items-center h-[531px] '>
			<h2 className="text-5xl mb-6 text-white py-12">{translations["about_us"]}</h2>
			<div className='flex gap-20 flex-row'>
				<img src="/Logo3D.svg" alt="" className='w-[636px] h-[333px]'/>
				<p className='text-white flex items-center w-[636px] h-[333px] text-4 font-nunito'
					dangerouslySetInnerHTML={{ __html: translations["about_us_text"] }} />
			</div>
		</div>
	);
}

export default About;
