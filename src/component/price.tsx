import React from "react";
import { priceData } from "./data/priceData";

const Price = () => {
    return (
        <div className="flex flex-col items-center md:h-[1146px] py-12">
            <h3 className="text-white text-[28px] md:text-5xl font-nunito">Ціни та послуги</h3>
            <p className="text-white text-[16px] md:w-[760px] mt-10 leading-6 ">
                Ми не працюємо за шаблоном — кожен сайт чи додаток створюється під конкретні
                цілі. Тому вартість завжди індивідуальна і залежить від рівня складності та
                потрібних функцій. Ми можемо підключитися на будь-якому етапі — від
                технічного завдання до запуску. Надішліть нам свій запит, і ми запропонуємо
                оптимальний варіант.
            </p>
            <div className="flex flex-col md:flex-row gap-6 mt-16 flex-wrap w-full max-w-full md:w-[1296px]">
                {priceData.map((item, id) => (
                    <div
                        key={item.id}
                        className="w-full md:w-[416px] md:${item.height} bg-[#0A081A] text-white p-4 rounded-2xl border border-[#A93CFF] font-nunito"
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
                                <p className="text-xl md:text-2xl">{item.time}</p>
                            </div>
                        )}
                        <hr />
                        <div className="flex flex-col my-6 mb-[24px] leading-6 md:w-[384px]">
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
