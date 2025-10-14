import React from "react";
import { priceData } from "./data/priceData";
import { priceDataEN } from "./data/priceDataEN";

interface TranslationProps {
  translations: Record<string, string>;
  locale: string;
}

const Price = ({ translations, locale }: TranslationProps) => {
 const priceDataLocalized = locale === 'en' ? priceDataEN : priceData;   
 return (
  <div className="flex flex-col items-center h-[1146px] py-12">
   <h3 className="text-white text-5xl text-nutito">{translations["prices_and_services"]}</h3>
   <p className="text-white text-[16px] w-[760px] mt-10 leading-6 ">
    {translations["prices_and_services_text"]}
   </p>
   <div className="flex gap-6 mt-16 flex-wrap w-[1296px]">
    {priceDataLocalized.map((item, id) => (
     <div
      key={item.id}
      className="w-[416px] ${item.height} bg-[#0A081A] text-white p-4 rounded-2xl border border-[#A93CFF] font-nunito flex	flex-col"
     >
      <h4 className="flex justify-center text-4xl mb-6">{item.title}</h4>
      <hr />
      <div className="flex justify-center items-center gap-2 my-2">
       <img src={item.icon} alt="" className="w-[36px] h-9" />
       <p className="text-2xl">{item.price}</p>
      </div>
      {item.time && (
							<div className="flex justify-center items-center gap-2 my-2 ">
       <img src={item.timeIcon} alt="" className="w-9 h-9" />
       <p className="text-2xl">{item.time}</p>
      </div>
						)}
      <hr />
      <div className="flex flex-col my-6 mb-[24px] leading-6 w-[384px]">
       {item.features.map((features, index) => (
        <ul key={index} className="">
         <li className="text-[16px] list-disc ml-4 font-s">{features}</li>
        </ul>
       ))}
      </div>
						<a href={item.buttonLink} className="flex justify-center gap-2 text-[16px] text-[#FFA157] mt-auto">{item.buttonText} <img src={item.buyIcon} alt="" /> </a>
     </div>
    ))}
   </div>
  </div>
 );
};

export default Price;
