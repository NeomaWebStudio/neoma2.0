"use client";
import React, { useState } from "react";
import Image from 'next/image';

import MenuItemsList from './MenuItemsList';

interface TranslationProps {
  translations: Record<string, string>;
}

const Nav = ({ translations }: TranslationProps)  => {

 return (
   <div className="flex flex-row items-center h-22 bg-[#05040D] text-white  sticky font-kurale" >
     <div className='xs:order-2 xs:mx-auto xl:order-none xl:mx-0'>
        <img src="/logo.svg" alt="Логотип" className="h-16 w-16 " />
     </div>

   

   {/* <div className="hidden w-[879px] h-7 xl:flex flex-row justify-center items-center mr-6">
    <ul className="flex gap-6">
     {menuItems.map((item) => (
      <li key={item}>
       <button
        onClick={() => setActive(item)}
        className={`
                  relative px-1 py-1 cursor-pointer
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px]
                  after:bg-gradient-to-r after:from-[#1298FF] after:to-[#A93CFF]
                  after:scale-x-0 after:origin-left after:transition-transform after:duration-500 after:ease-in-out 
                  ${active === item ? "after:scale-x-100 text-[#A463B2]" : ""}
                  hover:after:scale-x-100 hover:text-[#EA8DFF] 
                `}
       >
        {item}
       </button>
      </li>
     ))}
    </ul>
   </div>
      */}



   <MenuItemsList  translations={translations}/>

   <div className="hidden xl:flex flex-row justify-center items-center gap-2">
    <p>En</p>
    <img
     src="/assets/icon/nav-arrow-down.svg"
     alt="navArrowDown"
     className="w-6 h-6"
    />
   </div>

   <button
  className="hidden xs:block order-3 text-black bg-[#FFA157] cursor-pointer w-49 h-10 rounded-[24px] text-center 
             shadow-[inset_4px_4px_0_rgba(255,255,255,0.25),inset_4px_4px_12px_rgba(255,255,255,0.1),inset_-4px_-4px_4px_rgba(0,0,0,0.15)] ml-6 
             hover:shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25),inset_4px_4px_12px_rgba(255,255,255,0.1),inset_-4px_-4px_4px_rgba(0,0,0,0.15),4px_4px_8px_4px_rgba(252,125,23,0.5)]
             transition-shadow duration-300 ease-in-out"
>



       {translations['contact_btn_short']}
     </button>
     
     <div className='ml-auto xs:ml-0 xs:mr-auto xs:order-1 xl:order-none xl:hidden'><Image src={'/menu.png'} width={24} height={24} alt='menu-icon' /></div>

  </div>
 );
};

export default Nav;
