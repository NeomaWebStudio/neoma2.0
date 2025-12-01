import React from 'react';

interface TranslationProps {
	translations: Record<string, string>;
}

const About = ({ translations }: TranslationProps) => {
	return (
		<div id='about' className='xs:block mb-24'>
			<h2 className="text-[28px] md:text-4xl lg:text-5xl text-center text-white font-nutino">{translations["about_us"]}</h2>
			<div className='flex flex-col md:flex-row gap-4 md:gap-20 '>
				<div className='flex items-center md:flex-1'>
					<video autoPlay loop muted playsInline>
						<source src="/Logo_spin.webm" type="video/webm" />
					</video>
				</div>
				<p className='text-white text-4 font-nunito md:flex-1 xl:self-center'
					dangerouslySetInnerHTML={{ __html: translations["about_us_text"] }} />
			</div>
		</div>
	);
}

export default About;
