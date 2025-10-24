"use client";
import { useState } from "react";

interface HeaderProps {
  translations?: {
    menu?: Record<string, string>;
    [key: string]: any;
  };
}

const MenuItemsList = ({ translations }: HeaderProps) => {
  const [active, setActive] = useState("Головна");

  const menuItems = Object.values(translations?.menu || {});

  return (
    <div className="flex  text-white mb-4 xs:px-[18px]">
      <ul className="flex flex-wrap md:gap-6 justify-between">
        {menuItems.map((item) => (
          <li key={item} className='w-1/2 md:w-auto mb-6 justify-start'>
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
  );
};

export default MenuItemsList;
