"use client";
import { MenuTranslationProps } from '@/utils/types';
import { useState } from "react";
import { Link } from "react-scroll";
import { v4 as uuidv4 } from 'uuid';

const MenuItemsList = ({ translations }: MenuTranslationProps) => {
  const [active, setActive] = useState("Головна");

  const menuItems = translations?.menu || [];

  return (
    <div className="flex justify-center items-center text-white xs:px-[18px]">
      <ul className="flex flex-wrap md:gap-6 justify-between">
        {menuItems.map(({menuItem, id}, i) => {
          return (
            <li key={uuidv4()} className='w-1/2 md:w-auto mb-6 md:mb-0 justify-start aos-desktop-only'
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration={500 + i * 300}
            >
              <Link
                to={id}
                smooth={true}
                offset={-40}
                onClick={() => setActive(menuItem)}
                className={`scroll-mt-10
                  relative px-1 py-1 cursor-pointer
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px]
                  after:bg-gradient-to-r after:from-[#1298FF] after:to-[#A93CFF]
                  after:scale-x-0 after:origin-left after:transition-transform after:duration-500 after:ease-in-out 
                  ${active === menuItem ? "after:scale-x-100 text-[#A463B2]" : ""}
                  hover:after:scale-x-100 hover:text-[#EA8DFF] hover:transition-all hover:duration-300 
                `}
              >
                {menuItem}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuItemsList;
