"use client";
import React, { useState } from "react";
import MenuItemsList from './MenuItemsList';

interface TranslationProps {
  translations: Record<string, string>;
}

const Nav = ({ translations }: TranslationProps)  => {

 return (
  <div className="flex flex-row items-center h-22 bg-[#05040D] text-white  sticky font-kurale" >
   <img src="/logo.svg" alt="Логотип" className="h-16 w-16 " />

   <MenuItemsList  translations={translations}/>

   <div className="flex flex-row justify-center items-center gap-2">
    <p>En</p>
    <img
     src="/assets/icon/nav-arrow-down.svg"
     alt="navArrowDown"
     className="w-6 h-6"
    />
   </div>

   <button
  className="text-black bg-[#FFA157] cursor-pointer w-49 h-10 rounded-[24px] text-center 
             shadow-[inset_4px_4px_0_rgba(255,255,255,0.25),inset_4px_4px_12px_rgba(255,255,255,0.1),inset_-4px_-4px_4px_rgba(0,0,0,0.15)] ml-6 
             hover:shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25),inset_4px_4px_12px_rgba(255,255,255,0.1),inset_-4px_-4px_4px_rgba(0,0,0,0.15),4px_4px_8px_4px_rgba(252,125,23,0.5)]
             transition-shadow duration-300 ease-in-out"
>
  {translations['contact_btn_short']}
</button>

  </div>
 );
};

export default Nav;
