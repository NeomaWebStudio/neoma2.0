import React from "react";
import { priceData } from "./data/priceData";

const Price = () => {
    return (
        <div className="flex flex-col items-center mb-24 w-full">
            <h3 className="text-white text-[28px] md:text-5xl font-nunito mb-12">Ціни та послуги</h3>
            <p className="text-white text-[16px] md:w-[700px] lg:w-[760px] leading-6 ">
                Ми не працюємо за шаблоном — кожен сайт чи додаток створюється під конкретні
                цілі. Тому вартість завжди індивідуальна і залежить від рівня складності та
                потрібних функцій. Ми можемо підключитися на будь-якому етапі — від
                технічного завдання до запуску. Надішліть нам свій запит, і ми запропонуємо
                оптимальний варіант.
            </p>
            <div className="prise_items-container">
                {priceData.map((item, id) => (
                    <div
                        key={item.id}
                        className="flex flex-col justify-between bg-[#0A081A] text-white p-4 rounded-2xl border border-[#A93CFF] font-nunito"
                        style={{ gridArea: `${item.gridArea}` }}
                    >
                        <h4 className="text-center text-[28px] md:text-4xl mb-6">{item.title}</h4>
                        <hr />
                        <div className="flex justify-center items-center gap-2 my-2">
                            <img src={item.icon} alt="" className="w-[28px] h-[28px] md:w-9 md:h-9" />
                            <p className="text-xl md:text-2xl">{item.price}</p>
                        </div>
                        {item.time && (
                            <div className="flex justify-center items-center gap-2 my-2 ">
                                <img src={item.timeIcon} alt="" className="w-[28px] h-[28px] md:w-9 md:h-9" />
                                <p className="text-xl md:text-2xl text-wrap">{item.time}</p>
                            </div>
                        )}
                        <hr />
                        <div className="flex flex-col my-6 mb-[24px] leading-6 ">
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
