"use client";
import React, { useState } from "react";
import Image from 'next/image';
const logo = '/logo.svg'

import MenuItemsList from './MenuItemsList'
import LanguageSwitcher from './LanguageSwitcher'
import { Link } from 'react-scroll'

interface TranslationProps {
  translations: Record<string, string>
}

const Nav = ({ translations }: TranslationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <div className='flex flex-row items-center justify-between h-22 text-white sticky font-kurale'>
        <div className='xs:order-2 xs:mx-auto 2xl:order-none 2xl:mx-0'>
          <img src={logo} alt='Логотип' />
        </div>

        <div className='hidden 2xl:block'>
          <MenuItemsList translations={translations} />
        </div>

        <div className='hidden 2xl:flex flex-row justify-center items-center gap-2'>
          <LanguageSwitcher />
        </div>

        <Link
          to={'contact'}
          smooth={true}
          offset={-40}
          className='hidden xs:block order-3'
          style={{ fontFamily: 'inherit' }}
        >
          <button
            className=' text-black bg-[#FFA157] cursor-pointer w-49 h-10 rounded-[24px] text-center 
             shadow-[inset_4px_4px_0_rgba(255,255,255,0.25),inset_4px_4px_12px_rgba(255,255,255,0.1),inset_-4px_-4px_4px_rgba(0,0,0,0.15)] ml-6 
             hover:shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25),inset_4px_4px_12px_rgba(255,255,255,0.1),inset_-4px_-4px_4px_rgba(0,0,0,0.15),4px_4px_8px_4px_rgba(252,125,23,0.5)]
             transition-shadow duration-300 ease-in-out'
          >
            {translations['contact_btn_short']}
          </button>
        </Link>

        <div className='ml-auto xs:ml-0 xs:mr-auto xs:order-1 2xl:order-none 2xl:hidden'>
          <Image
            src={'/menu.png'}
            width={24}
            height={24}
            alt='menu-icon'
            className=' cursor-pointer'
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Side Menu Overlay */}
      {isMenuOpen && (
        <div
          className='fixed inset-0 backdrop-blur-md z-50'
          onClick={closeMenu}
        />
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-85 bg-[#05040D] z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex flex-col h-full'>
          {/* Menu Header */}
          <div className='flex items-center justify-between p-6 border-b border-gray-700'>
            <img src='/logo.svg' alt='Логотип' className='h-12 w-12' />
            <button
              onClick={closeMenu}
              className='text-white text-2xl hover:text-gray-300'
            >
              ×
            </button>
          </div>

          {/* Menu Items */}
          <div className='flex-1 p-6'>
            <MenuItemsList translations={translations} />
          </div>

          {/* Menu Footer */}
          <div className='p-6 border-t border-gray-700'>
            <div className='flex items-center gap-2 mb-4'>
              <LanguageSwitcher position='top' />
            </div>
            <button
              className='w-full text-black bg-[#FFA157] cursor-pointer h-10 rounded-[24px] text-center 
            shadow-[inset_4px_4px_0_rgba(255,255,255,0.25),inset_4px_4px_12px_rgba(255,255,255,0.1),inset_-4px_-4px_4px_rgba(0,0,0,0.15)] 
            hover:shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25),inset_4px_4px_12px_rgba(255,255,255,0.1),inset_-4px_-4px_4px_rgba(0,0,0,0.15),4px_4px_8px_4px_rgba(252,125,23,0.5)]
            transition-shadow duration-300 ease-in-out'
            >
              {translations['contact_btn_short']}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav;
