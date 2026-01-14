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
    /* Global container for price and description prices */
    <div
      id='prices'
      className='flex flex-col items-center mb-24 w-full h-[4294px] '
    >
      {/* Title price */}
      <h3 className='text-white text-[28px] md:text-5xl font-nunito mb-12'>
        {translations['prices_and_services']}
      </h3>
      <p className='text-white text-[16px] md:w-[700px] lg:w-[760px] leading-6 '>
        {translations['prices_and_services_text']}
      </p>
      {/* Container for prices card */}

      <div className='flex flex-col items-center gap-8 relative'>
        {priceData.map((item) => {
          return (
            <div
              key={item.id}
              className={`w-[1296px] h-[636px] flex justify-between  ${item.id % 2 === 0 ? 'flex-row-reverse' : ''}  not-md:w-[684px] not-md:h-[468px] mt-8 `}
            >
              {/* Container img circle price in card */}
              <div className='relative flex justify-center items-center w-[636px] h-[636px] '>
                {/* Container only for img */}
                <div className='not-md:w-[332px] not-md:h-[332px] flex justify-center items-center not-md:w-332px not-md:h-332px relative '>
                  <img
                    className={` absolute ${item.id % 2 === 0 ? '[animation-direction:reverse]' : ''}`}
                    style={{ animationDuration: '100s' }}
                    src='/assets/images/circle_layer2.png'
                    alt=''
                  />
                  <img
                    className={` ${item.id % 2 !== 0 ? '[animation-direction:reverse]' : ''}   `}
                    style={{ animationDuration: '100s' }}
                    src='/assets/images/circle_layer1.png'
                    alt=''
                  />
                </div>
                {/* The price name is in the middle of the circle card */}
                <h2 className='text-white text-4xl absolute not-md:text-[20px] w-[280px] text-center '>
                  {translations[item.name]}
                </h2>
              </div>
              <div className='flex flex-col gap-8 h-full justify-center not-md:text-[20px]'>
                <h3 className='text-white text-2xl ${pacifico.className}'>
                  {translations[item.title]}
                </h3>
                {/* Price number */}
                <div className='w-[192px] h-[32px] border border-[#A93CFF] py-[4px] px-2 rounded-lg  flex justify-center items-center shadow-[-2px_0_8px_0_rgb(169,60,255,0.1),2px_0_8px_0_rgb(169,60,255,0.1),0_-2px_8px_0_rgb(169,60,255,0.1),0_2px_8px_0_rgb(169,60,255,0.1)]'>
                  <p className='${merriweather.className} text-white text-center flex not-md:text-[16px] '>
                    <img className='w-6 h-6 mr-2.5' src={coins} alt='' />{' '}
                    {translations['from']} {item.price} {translations['uah']}
                  </p>
                </div>
                {/* Description price list */}
                <div className='flex flex-col gap-2 ${merriweather.className} not-md:text-[16px]'>
                  {item.features.map((feature, index) => (
                    <div key={index}>
                      <div className='flex items-center gap-2'>
                        <img src={cursor} alt='' className='w-6 h-6' />
                        <p className='text-white'>{translations[feature]}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Button for buy packet */}
                <div>
                  <button className='flex text-[#FFA157] gap-1 justify-center items-center text-[16px] ${merriweather.className}'>
                    {translations[item.buttonText]} <img src={buy} alt='' />
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Price;
