import React from "react";
import { priceData } from "./data/priceData";
import { priceDataEN } from "./data/priceDataEN";
const time = '../../assets/icon/clock.svg'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { FiCheck } from 'react-icons/fi'
import { features } from 'process'
const buy = '../../assets/icon/cart.svg'
const coins = '../../assets/icon/coins.svg'
const cursor = '../../assets/icon/cursor-pointer.svg'

interface TranslationProps {
  translations: Record<string, string>
  locale: string
}

const Price = ({ translations, locale }: TranslationProps) => {
  const priceDataLocalized = locale === 'en' ? priceDataEN : priceData

  return (
    <div
      id='prices'
      className='flex flex-col items-center w-full px-4 md:px-0 mb-24'
    >
      {/* Title */}
      <h3 className='text-white text-2xl md:text-5xl font-nunito mb-6 text-center'>
        {translations['prices_and_services']}
      </h3>

      <p className='text-white text-sm md:text-base md:w-[700px] lg:w-[760px] text-center mb-12'>
        {translations['prices_and_services_text']}
      </p>

      {/* Cards */}
      <div className='flex flex-col gap-16 w-full max-w-[1296px]'>
        {priceData.map((item) => (
          <div
            key={item.id}
            className={`
            flex flex-col lg:flex-row
            ${item.id % 2 === 0 ? 'lg:flex-row-reverse' : ''}
            items-center gap-8
          `}
          >
            {/* Circle */}
            <div className='relative flex justify-center items-center w-[300px] h-[300px] md:w-[332px] md:h-[332px] lg:w-[636px] lg:h-[636px]'>
              <img
                className={` animate-spin absolute w-full h-full ${
                  item.id % 2 === 0 ? '[animation-direction:reverse]' : ''
                }`}
                style={{ animationDuration: '100s' }}
                src='/assets/images/circle_layer2.png'
                alt=''
              />
              <img
                className={`animate-spin absolute w-full h-full ${
                  item.id % 2 !== 0 ? '[animation-direction:reverse]' : ''
                }`}
                style={{ animationDuration: '100s' }}
                src='/assets/images/circle_layer1.png'
                alt=''
              />

              <h2 className='absolute text-white text-lg md:text-xl lg:text-4xl text-center w-[200px] md:w-[240px]'>
                {translations[item.name]}
              </h2>
            </div>

            {/* Content */}
            <div className='flex-1 flex justify-start'>
              <div className='flex flex-col gap-6 text-center lg:text-left max-w-[520px]'>
                <h3 className='text-white text-xl lg:text-2xl text-left'>
                  {translations[item.title]}
                </h3>

                <div className='w-fit border border-[#A93CFF] py-1 px-3 rounded-lg flex items-center gap-2 shadow-[0_0_8px_rgba(169,60,255,0.3)]'>
                  <img className='w-5 h-5' src={coins} alt='' />
                  <p className='text-white text-sm'>
                    {translations['from']} {item.price} {translations['uah']}
                  </p>
                </div>

                <div className='flex flex-col gap-2 text-left'>
                  {item.features.map((feature, index) => (
                    <div key={index} className='flex items-center gap-2'>
                      <img src={cursor} alt='' className='w-5 h-5' />
                      <p className='text-white text-sm'>
                        {translations[feature]}
                      </p>
                    </div>
                  ))}
                </div>

                <button className='flex gap-1 justify-center lg:justify-start items-center text-[#FFA157] text-sm mx-auto lg:mx-0'>
                  {translations[item.buttonText]}
                  <img src={buy} alt='' />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

}

export default Price;
