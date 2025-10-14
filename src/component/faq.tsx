"use client";
import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

const items = [
 {
  q: "Скільки коштує сайт?",
  a: [
   "Лендінг від 20 000 грн",
   " корпоративний сайт від 35 000 грн",
   " інтернет-магазин від 65 000 грн.",
   "Ціна залежить від функціоналу та складності."
  ]
 },
 {
  q: "Скільки часу займає розробка?",
  a: { text: "В середньому:" ,
  list: [
   " Лендінг — 2–3 тижні",
   "Корпоративний сайт — 4–6 тижнів",
   " Інтернет-магазин — 2–3 місяці. ",
   "Але все залежить від швидкості узгодження."
  ]
	}
 },
 { q: "Чи робите ви дизайн?", a: "Так, ми створюємо дизайн. У вас буде унікальний макет без копіювання шаблонів." },
 { q: "Чи можна внести зміни після запуску?", a: "Так. Ми надаємо техпідтримку і можемо доопрацьовувати сайт після релізу." },
 { q: "Чи входить SEO у вартість?", a: "Ми робимо базову SEO-оптимізацію (структура, швидкість, теги). Для комплексного просування можемо підключити спеціалістів." },
 { q: "Як відбувається оплата?", a: "Зазвичай 50% передоплати та 50% після завершення проєкту." },
 { q: "Чи робите ви Telegram-ботів та додатки?", a: "Так. Ми можемо розробити бота для замовлень, консультацій чи автоматизації бізнесу." },
 { q: "Ви працюєте тільки з Україною?", a: "Ні, ми відкриті до клієнтів з будь-яких країн. Оплата приймається в зручній валюті." }
];

/**
 * Faq component
 *
 * This component renders a list of faq items with a toggleable details element.
 *
 * @returns {JSX.Element} The Faq component
 */
export default function Faq() {
 const [openIndex, setOpenIndex] = useState<number | null>(null);

 /**
  * Toggle the details element of the given index
  * @param {number} idx The index of the details element to toggle
  */
 const toggle = (idx: number) => {
  setOpenIndex((prev) => (prev === idx ? null : idx));
 };

 return (
  <div className="flex flex-col items-center">
     <h3 className="text-[28px] md:text-5xl text-white font-nanito">Faq</h3>
   <div className="flex flex-col md:flex-row">
       <div className="md:w-[636px] md:h-[744px] mt-[40px] md:mt-[150px]">
     <Spline scene="/sphere.splinecode" />
    </div>

    <div
     id="accordion"
     className="md:w-[636px] h-[744px] text-white flex flex-col gap-3 mt-10"
    >
         <details className="text-[20px] h-auto md:text-[24px] border border-[#A93CFF] bg-[#0A081A] p-4 rounded-2xl shadow-[inset_4px_4px_16px_0px_RGBA(255,255,255,0.05),inset_4px_4px_8px_0px_RGBA(217,77,180,0.1),inset_-4px_-4px_8px_0px_RGBA(0,0,0,0.4),4px_4px_8px_0px_RGBA(0,0,0,0.25)]">
      <summary className="list-none cursor-pointer">
       {" "}
       Чому самописні сайти дорожчі за ті, що на шаблонах?{" "}
      </summary>
      <div className="text-[16px] mt-4 ">
       <p className="">
        Тому що ми пишемо код з нуля під ваш бізнес. Це означає:
       </p>{" "}
       <br />
       <li className="ml-10">
        більше швидкості (сайт працює без зайвого “сміття”)
       </li>
       <li className="ml-10">унікальний дизайн</li>
       <li className="ml-10">легке масштабування під майбутні потреби</li>
      </div>
     </details>
     {items.map((it, idx) => (
      <details
       key={idx}
       open={openIndex === idx}
         className="text-[20px] h-auto md:text-[24px] border border-[#A93CFF] bg-[#0A081A] p-4 rounded-2xl shadow-[inset_4px_4px_16px_0px_RGBA(255,255,255,0.05),inset_4px_4px_8px_0px_RGBA(217,77,180,0.1),inset_-4px_-4px_8px_0px_RGBA(0,0,0,0.4),4px_4px_8px_0px_RGBA(0,0,0,0.25)] transition-all duration-300 ease-in-out"
      >
       <summary
        className="list-none cursor-pointer select-none"
        onClick={(e) => {
         e.preventDefault();
         toggle(idx);
        }}
        onKeyDown={(e) => {
         if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle(idx);
         }
        }}
       >
        {it.q}
       </summary>

       <div
        className={`text-[16px] mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
         openIndex === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
       >
        {/* Якщо відповідь — об'єкт із текстом і списком */}
        {typeof it.a === "object" && !Array.isArray(it.a) ? (
         <div>
          <p>{it.a.text}</p>
          <ul className="list-disc ml-10 space-y-2 mt-2">
           {it.a.list.map((point, i) => (
            <li key={i}>{point}</li>
           ))}
          </ul>
         </div>
        ) : Array.isArray(it.a) ? (
         <ul className="list-disc ml-10 space-y-2">
          {it.a.map((point, i) => (
           <li key={i}>{point}</li>
          ))}
         </ul>
        ) : (
         <p>{it.a}</p>
        )}
       </div>
      </details>
     ))}
    </div>
   </div>
  </div>
 );
}
