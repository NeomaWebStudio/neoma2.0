"use client";
import { useState } from "react";
import Spline from '@splinetool/react-spline';
interface TranslationProps {
	translations: Record<string, string>;
}
const FeedbackForm = ({ translations }: TranslationProps) => {
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	return (
		<div className='w-full text-white mb-24'>
			<h2 className='font-nunito text-[28px] md:text-5xl text-white text-center mb-12'>{translations['contacts']}</h2>

			<div className="feedback_form-container">


				<div className="flex flex-col gap-3" style={{ gridArea: "socials" }}>
					<h4 className='text-4 text-white'>{translations["contacts_text_1"]}</h4>
					<div className='flex flex-col'>
						<a href="#"
							className="flex py-2 px-4 gap-1 items-center
										text-[#FFA157]
										hover:text-[#FFC08F]
										active:text-[#CC8146]
										[&>svg]:stroke-current
										[&>svg]:text-[#FFA157]
										hover:[&>svg]:text-[#FFC08F]
										active:[&>svg]:text-[#CC8146]
										transition-colors duration-150">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M18.1181 14.702L13.9998 15.5C11.2181 14.1038 9.49985 12.5 8.49985 10L9.2698 5.8699L7.81436 2L4.06344 2C2.9359 2 2.04799 2.93178 2.21639 4.04668C2.63679 6.83 3.87638 11.8765 7.49985 15.5C11.305 19.3052 16.7856 20.9564 19.8019 21.6127C20.9666 21.8662 21.9998 20.9575 21.9998 19.7655L21.9998 16.1812L18.1181 14.702Z"
									stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							<span className='ml-1'>+380684837709</span>
						</a>
						<a href='#' className='flex py-2 px-4 gap-1 items-center
										text-[#FFA157]
										hover:text-[#FFC08F]
										active:text-[#CC8146]
										[&>svg]:stroke-current
										[&>svg]:text-[#FFA157]
										hover:[&>svg]:text-[#FFC08F]
										active:[&>svg]:text-[#CC8146]
										transition-colors duration-150'>
							<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.5 9L12.5 12.5L17.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M2.5 17V7C2.5 5.89543 3.39543 5 4.5 5H20.5C21.6046 5 22.5 5.89543 22.5 7V17C22.5 18.1046 21.6046 19 20.5 19H4.5C3.39543 19 2.5 18.1046 2.5 17Z" stroke="currentColor" strokeWidth="1.5" />
							</svg>
							<span className='ml-1'>neomawebstudio@gmail.com</span>
						</a>
						<div className='flex md:flex-col gap-2'>
							<a href='#' className='flex py-2 px-4 gap-1 items-center
										text-[#FFA157]
										hover:text-[#FFC08F]
										active:text-[#CC8146]
										[&>svg]:stroke-current
										[&>svg]:text-[#FFA157]
										hover:[&>svg]:text-[#FFC08F]
										active:[&>svg]:text-[#CC8146]
										transition-colors duration-150'>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<span className='hidden md:inline-block ml-1'>Telegram</span>
							</a>
							<a href='#' className='flex py-2 px-4 gap-1 items-center
										text-[#FFA157]
										hover:text-[#FFC08F]
										active:text-[#CC8146]
										[&>svg]:stroke-current
										[&>svg]:text-[#FFA157]
										hover:[&>svg]:text-[#FFC08F]
										active:[&>svg]:text-[#CC8146]
										transition-colors duration-150'>
								<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M6.54688 4.01562V4.0166C6.64898 4.02911 6.74477 4.07479 6.81836 4.14648C6.82133 4.14996 6.82457 4.15485 6.8291 4.16016C6.8417 4.17493 6.86014 4.19689 6.88281 4.22363C6.92809 4.27703 6.99097 4.35108 7.06055 4.43457C7.20107 4.60319 7.36632 4.80581 7.47461 4.9502L7.48535 4.96387L7.49805 4.97656C7.58742 5.06594 7.68713 5.21151 7.79004 5.37988C7.8809 5.52857 7.98361 5.71109 8.06055 5.82812V5.8291C8.13633 5.95562 8.15024 6.09615 8.12402 6.2207C8.09628 6.35211 8.03101 6.43693 7.98633 6.4668L7.97559 6.47461L7.96484 6.4834L7.51465 6.8584L7.50586 6.86523L7.49805 6.87305C7.34605 7.02505 7.2731 7.19987 7.2373 7.33105C7.21926 7.39723 7.20976 7.4549 7.20508 7.49707C7.20274 7.51814 7.20184 7.53566 7.20117 7.54883C7.20084 7.55541 7.2003 7.56108 7.2002 7.56543V7.60742L7.20801 7.63867L7.4502 7.5752L7.20801 7.63965L7.20898 7.64062V7.64258C7.20945 7.6443 7.21014 7.64657 7.21094 7.64941L7.24609 7.76367C7.271 7.83965 7.30896 7.9475 7.3623 8.07812C7.46903 8.33942 7.63863 8.69476 7.88867 9.07227C8.38845 9.82682 9.22044 10.6827 10.5342 11.041L10.5664 11.0498H10.627C10.6413 11.0492 10.6611 11.0471 10.6846 11.0449C10.7311 11.0405 10.7959 11.0325 10.8672 11.0146C10.9951 10.9826 11.1888 10.9089 11.3164 10.7344L11.3174 10.7354L11.6924 10.2852L11.708 10.2637C11.7378 10.219 11.8227 10.1538 11.9541 10.126C12.0788 10.0997 12.2201 10.1135 12.3467 10.1895L12.3506 10.1924C12.8637 10.4856 13.5942 10.9976 14.0234 11.4268L14.0361 11.4395L14.0498 11.4502C14.2529 11.6025 14.2973 11.8459 14.2012 12.0381C14.0294 12.3815 13.7544 12.7242 13.4434 12.9512C13.1297 13.1801 12.8174 13.2667 12.5469 13.1855L12.541 13.1836L12.3848 13.1357C11.9925 13.005 11.4127 12.7417 10.7852 12.3994C10.0719 12.0104 9.31698 11.5306 8.73242 11.0557L8.72461 11.0498C8.14197 10.6128 7.56097 10.0303 7.20312 9.5293L7.19824 9.52246L7.19238 9.51465L6.91797 9.16113C6.64287 8.78397 6.3545 8.33233 6.01465 7.82227C5.60841 7.12033 5.37007 6.60697 5.23438 6.27246C5.16649 6.10509 5.12448 5.98218 5.09961 5.90332C5.08718 5.86389 5.07899 5.83512 5.07422 5.81738C5.07186 5.8086 5.07019 5.80231 5.06934 5.79883V5.79688L5.06641 5.78516L5.04199 5.66699C5.0053 5.39123 5.10164 5.11696 5.29688 4.85645C5.52163 4.55666 5.86381 4.29759 6.21289 4.12305L6.2334 4.1123L6.25195 4.09766C6.336 4.03365 6.44194 4.00376 6.54688 4.01562ZM9.55566 3.3252C11.0708 3.28912 12.4285 3.793 13.4062 4.75293C14.3831 5.71202 15 7.14488 15 9C15 9.01689 14.9972 9.0255 14.9961 9.02832L14.9951 9.03027C14.9939 9.03079 14.9912 9.03125 14.9873 9.03125C14.9799 9.03122 14.978 9.02888 14.9795 9.03027C14.9801 9.03091 14.9794 9.03049 14.9785 9.02832C14.9774 9.02541 14.9746 9.01672 14.9746 9C14.9746 7.17796 14.3532 5.75988 13.3516 4.79785C12.3522 3.83805 10.9931 3.34961 9.5498 3.34961C9.53248 3.34959 9.52402 3.34674 9.52148 3.3457H9.52051C9.52013 3.34503 9.51862 3.34267 9.51855 3.33789C9.51855 3.33235 9.52029 3.32946 9.52051 3.3291H9.52148C9.52407 3.32805 9.53257 3.32521 9.5498 3.3252H9.55566ZM10.0264 4.82031L10.0459 4.82422L10.0674 4.8252C11.206 4.86084 12.0764 5.28574 12.6543 5.93262C13.1976 6.54101 13.497 7.36186 13.5029 8.28125L13.5 8.46582V8.47461C13.5 8.48744 13.4972 8.49284 13.4971 8.49316C13.4968 8.49363 13.4964 8.494 13.4951 8.49512C13.4932 8.49674 13.4892 8.49955 13.4824 8.50195C13.4798 8.50286 13.4765 8.50233 13.4736 8.50293L13.4746 8.48535C13.5146 7.52574 13.2147 6.65252 12.6123 5.99902C12.0099 5.34555 11.1214 4.92943 10.0176 4.85059L10.0088 4.84961H10.0039C10.004 4.8475 10.0036 4.8452 10.0039 4.84277C10.005 4.83479 10.0072 4.82739 10.0098 4.82227C10.0105 4.82085 10.0111 4.81924 10.0117 4.81836C10.0145 4.81834 10.0196 4.81895 10.0264 4.82031ZM10.2754 6.25H10.2998C10.8454 6.25 11.245 6.41883 11.5176 6.69922C11.7915 6.98099 11.9628 7.40248 11.999 7.95605C11.9985 7.96903 11.9969 7.97557 11.9961 7.97754C11.9943 7.9785 11.9891 7.98138 11.9785 7.98145C11.9626 7.98145 11.9442 7.97526 11.9297 7.96387C11.9187 7.9552 11.9062 7.94007 11.8984 7.91113C11.8921 7.43893 11.7703 7.0275 11.4961 6.73047C11.2113 6.42193 10.7988 6.27539 10.2998 6.27539C10.2886 6.27538 10.2835 6.27301 10.2822 6.27246C10.2817 6.27223 10.2806 6.27204 10.2793 6.27051C10.2777 6.26857 10.2749 6.26384 10.2725 6.25684C10.2716 6.25434 10.2711 6.2517 10.2705 6.24902L10.2754 6.25ZM5.75 15.792L5.5752 15.7363C4.21186 15.3058 3.49032 14.7371 3.18848 14.5098C1.92322 13.3826 1.10132 11.1525 1.25 7.50977V7.50781C1.32427 5.20659 1.84393 3.33897 3.12207 2.13184L3.12305 2.12988C4.01029 1.27826 5.30567 0.803695 6.58105 0.544922C7.85122 0.287226 9.07023 0.25 9.77539 0.25H10.375C13.9951 0.250012 15.898 1.32296 16.5908 1.81934L16.8145 1.99219C17.8038 2.92179 18.5741 4.56012 18.7275 7.00488L18.75 7.50684C18.75 7.96126 18.7484 8.38159 18.6797 8.72559L18.6748 8.75V8.77539C18.6747 11.2205 18.1553 13.0907 16.873 14.373C15.9859 15.2226 14.6927 15.6966 13.4189 15.9551C12.1487 16.2128 10.9298 16.25 10.2246 16.25H8.43359L8.36035 16.3711C8.25935 16.5394 8.12138 16.7141 7.94531 16.918C7.85766 17.0195 7.76272 17.1257 7.66016 17.2412L7.33496 17.6123C7.20552 17.7424 7.08406 17.8721 6.97363 17.9893C6.85759 18.1123 6.75338 18.2211 6.65332 18.3125C6.45554 18.4931 6.31389 18.5657 6.19238 18.5723C6.18792 18.5701 6.18149 18.5673 6.17383 18.5635C6.15733 18.5552 6.12664 18.5397 6.09375 18.5273C6.07391 18.5199 6.0487 18.5123 6.01953 18.5068C5.92514 18.4696 5.84752 18.3599 5.79785 18.1777C5.77454 18.0922 5.76198 18.0086 5.75586 17.9453C5.75285 17.9142 5.75169 17.8889 5.75098 17.8721C5.75062 17.8637 5.75008 17.8573 5.75 17.8535V15.792ZM17.6748 7.41602C17.6367 6.31229 17.4839 5.33144 17.2217 4.52539C16.9632 3.73091 16.5915 3.08921 16.1006 2.67285H16.1016C15.8961 2.46764 14.328 1.1748 10.2998 1.1748H9.625C9.16919 1.1748 8.10301 1.19415 6.94824 1.39453C5.80295 1.5933 4.5247 1.97762 3.68262 2.73926L3.67285 2.74805L3.66504 2.75684C2.86381 3.63818 2.40341 4.90023 2.25098 6.72949L2.25 6.73926V7.5C2.17535 8.97574 2.28822 10.2724 2.55762 11.3213C2.8266 12.3684 3.25771 13.1928 3.83691 13.6895C4.02911 13.8771 4.62935 14.3702 6 14.7422V18.3291L6.36133 18.1484C6.4305 18.1139 6.49405 18.0626 6.54395 18.0166C6.59649 17.9682 6.64859 17.9119 6.69727 17.8584C6.80353 17.7415 6.8818 17.6475 6.95215 17.5771L6.96875 17.5596L6.9834 17.5391L7.12109 17.3301L7.86035 16.5186L7.86133 16.5156L8.9873 15.25H10.2998C10.7557 15.25 11.8226 15.2307 12.9775 15.0303C14.1227 14.8315 15.4002 14.4471 16.2422 13.6855L16.251 13.6777L16.2588 13.6699C17.2197 12.6289 17.6743 11.0543 17.75 8.7832V8.77539C17.75 8.55187 17.7499 8.16734 17.6748 7.70508V7.41602Z" fill="#FFA157" stroke="currentColor" strokeWidth="0.5" />
								</svg>
								<span className='hidden md:inline-block ml-1'>Viber</span>
							</a>
							<a href='#' className='flex py-2 px-4 gap-1 items-center
										text-[#FFA157]
										hover:text-[#FFC08F]
										active:text-[#CC8146]
										[&>svg]:stroke-current
										[&>svg]:text-[#FFA157]
										hover:[&>svg]:text-[#FFC08F]
										active:[&>svg]:text-[#CC8146]
										transition-colors duration-150'>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="currentColor" strokeWidth="1.5" />
									<path d="M17.5 6.51L17.51 6.49889" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<span className='hidden md:inline-block ml-1'>Instagram</span>
							</a>
							<a href='#' className='flex py-2 px-4 gap-1 items-center
										text-[#FFA157]
										hover:text-[#FFC08F]
										active:text-[#CC8146]
										[&>svg]:stroke-current
										[&>svg]:text-[#FFA157]
										hover:[&>svg]:text-[#FFC08F]
										active:[&>svg]:text-[#CC8146]
										transition-colors duration-150'>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<span className='hidden md:inline-block ml-1'>Facebook</span>
							</a>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-4" style={{ gridArea: "inputs" }}>
					<p>Залиште заявку, і ми запропонуємо найкращий варіант</p>
					<div className="w-full rounded-full transition-all duration-300
					    focus-within:p-[2px] focus-within:bg-gradient-to-r focus-within:from-[#1298FF] focus-within:to-[#A93CFF]">

						<div className="flex items-center w-full border border-orange-500 rounded-full px-4 py-3 bg-[#05040d]
							focus-within:border-transparent
							hover:border-[#FFC08F]
							focus-within:[&>svg]:text-[#FFC08F]
					      hover:[&>svg]:text-[#FFC08F] transition-all duration-300">

							<svg xmlns="http://www.w3.org/2000/svg"
								className={`w-5 h-5 mr-3 transition-colors duration-300 ${name ? "text-orange-400" : "text-white"
									}`}
								width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M5 20V19C5 15.134 8.13401 12 12 12C15.866 12 19 15.134 19 19V20"
									stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
									stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>

							<input type="text"
								placeholder="Ім’я"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="bg-transparent w-full outline-none text-[16px]
					                      placeholder:text-white hover:placeholder:text-[#FFC08F]
										  hover:text-[#FFC08F]
										  text-orange-400
										  focus:text-white
					                      focus:placeholder:text-white transition-colors duration-300"/>
						</div>
					</div>

					<div className="relative w-full rounded-full transition-all duration-300
					    focus-within:p-[2px] focus-within:bg-gradient-to-r focus-within:from-[#1298FF] focus-within:to-[#A93CFF]">

						<div className="flex items-center w-full border border-orange-500 rounded-full px-4 py-3 bg-[#05040d]
							focus-within:border-transparent
							hover:border-[#FFC08F]
							focus-within:[&>svg]:text-[#FFC08F]
					      hover:[&>svg]:text-[#FFC08F] transition-all duration-300">
							{/* Phone icon */}
							<svg
								width="24"
								height="24"
								viewBox="0 0 22 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className={`w-5 h-5 mr-3 transition-colors duration-300 ${phone ? "text-orange-400" : "text-white"
									}`}
							>
								<path
									d="M17.1181 13.702L12.9998 14.5C10.2181 13.1038 8.49985 11.5 7.49985 9L8.2698 4.8699L6.81436 1L3.06344 1C1.9359 1 1.04799 1.93178 1.21639 3.04668C1.63679 5.83 2.87638 10.8765 6.49985 14.5C10.305 18.3052 15.7856 19.9564 18.8019 20.6127C19.9666 20.8662 20.9998 19.9575 20.9998 18.7655L20.9998 15.1812L17.1181 13.702Z"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>

							<input
								type="text"
								placeholder={translations["form_phone"]}
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className="bg-transparent w-full outline-none text-[16px] 
					                      placeholder:text-white hover:placeholder:text-[#FFC08F]
										  hover:text-[#FFC08F]
										  focus:text-white
					                      focus:placeholder:text-white transition-colors duration-300
										  text-orange-400"
							/>
						</div>
					</div>

					<div className="relative w-full rounded-full transition-all duration-300
    				    focus-within:p-[2px] focus-within:bg-gradient-to-r focus-within:from-[#1298FF] focus-within:to-[#A93CFF]">

						<div className="flex items-center w-full border border-orange-500 rounded-full px-4 py-3 bg-[#05040d]
    				      focus-within:border-transparent 
						  focus-within:[&>svg]:text-[#FFC08F]
						  hover:[&>svg]:text-[#FFC08F]
						  hover:border-[#FFC08F] transition-all duration-300">

							<svg width="24" height="24"
								className={`w-5 h-5 mr-3 transition-colors duration-300 ${email ? "text-orange-400" : "text-white"
									}`}
								viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7 9L12 12.5L17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"
									stroke="currentColor" strokeWidth="1.5" />
							</svg>

							<input
								type="email"
								placeholder={translations["form_email"]}

								onChange={(e) => setEmail(e.target.value)}
								className="bg-transparent w-full outline-none text-[16px]
    				                 placeholder:text-white hover:placeholder:text-[#FFC08F]
									 focus:text-white
    				                 text-orange-400 focus:placeholder:text-white 
									 transition-colors 
									 duration-300"
							/>
						</div>
					</div>

					<div className="relative w-full transition-all duration-300
					    focus-within:p-[2px] focus-within:bg-gradient-to-r 
						focus-within:from-[#1298FF] focus-within:to-[#A93CFF] rounded-3xl">

						<div className="flex items-center w-full border border-orange-500 px-4 py-3 bg-[#05040d]
							focus-within:border-transparent
							hover:border-[#FFC08F]
							focus-within:[&>svg]:text-[#FFC08F]
					      hover:[&>svg]:text-[#FFC08F] transition-all duration-300 rounded-3xl">
							<textarea name="" id="" placeholder={translations["form_text"]} className='resize-none w-full h-[120px] 
								text-[16px] bg-transparent outline-none 
					                      placeholder:text-white hover:placeholder:text-[#FFC08F]
										  hover:text-[#FFC08F]
										  text-orange-400
										  focus:text-white
					                      focus:placeholder:text-white transition-colors duration-300
										'></textarea>
						</div>
					</div>

					<button
						type="button"
						className="
						bg-gradient-to-b from-[#FFC08F] to-[#FF9F50]
						hover:from-[#FFE6C9] hover:to-[#FFB789]
						active:from-[#E6A06B] active:to-[#C9733A]
						text-black text-[16px] font-semibold
						rounded-3xl w-full leading-[40px]
						cursor-pointer
						shadow-inner active:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.5)]
						active:translate-y-[1px]
						transition-all duration-150
						"
					>
						{translations["form_submit_btn"]}
					</button>
				</div>

				<div className="" style={{ gridArea: "spline" }}>
					<Spline scene="/robot_316_426.spline" className='flex w-full justify-center items-center' />
				</div>
			</div>
		</div>
	);
}

export default FeedbackForm;
