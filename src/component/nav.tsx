"use client";
import React, { useState } from "react";
import Image from 'next/image';

import MenuItemsList from './MenuItemsList';

interface TranslationProps {
  translations: Record<string, string>;
}

const Nav = ({ translations }: TranslationProps) => {

  return (
    <div className="flex flex-row items-center justify-between h-22 bg-[#05040D] text-white  sticky font-kurale" >
      <div className='xs:order-2 xs:mx-auto 2xl:order-none 2xl:mx-0'>
        <img src="/logo.svg" alt="Логотип" className="h-16 w-16 " />
      </div>
      <div className='hidden 2xl:block'>
        
      <MenuItemsList translations={translations} />
</div>

      <div className="hidden 2xl:flex flex-row justify-center items-center gap-2">
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

      <div className='ml-auto xs:ml-0 xs:mr-auto xs:order-1 2xl:order-none 2xl:hidden'><Image src={'/menu.png'} width={24} height={24} alt='menu-icon' /></div>

    </div>
  );
};

export default Nav;
