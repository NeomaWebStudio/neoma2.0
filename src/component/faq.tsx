"use client";
import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

const items = [
  { q: "Чому самописні сайти дорожчі за ті, що на шаблонах?", a: " Тому що ми пишемо код з нуля під ваш бізнес. Це означає: більше швидкості (сайт працює без зайвого “сміття”),унікальний дизайн,легке масштабування під майбутні потреби." },
  { q: "Скільки коштує сайт?", a: "tettss" },
  { q: "Скільки часу займає розробка?", a: "tettss" },
  { q: "Чи робите ви дизайн?", a: "tettss" },
  { q: "Чи можна внести зміни після запуску?", a: "tettss" },
  { q: "Чи входить SEO у вартість?", a: "tettss" },
  { q: "Як відбувається оплата?", a: "tettss" },
  { q: "Чи робите ви Telegram-ботів та додатки?", a: "tettss" },
  { q: "Ви працюєте тільки з Україною?", a: "tettss" },
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
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-white font-nanito text-5xl">Faq</h3>
      <div className="flex flex-row">
        <div className="w-[636px] h-[744px]">
          <Spline scene="/sphere.splinecode" />
        </div>

        <div id="accordion" className="w-[636px] h-[744px] text-white flex flex-col gap-3 mt-10">
          {items.map((it, idx) => (
            <details
              key={idx}
              open={openIndex === idx}
              className="h-auto text-[24px] border border-[#A93CFF] bg-[#0A081A] p-4 rounded-2xl shadow-[inset_4px_4px_16px_0px_RGBA(255,255,255,0.05),inset_4px_4px_8px_0px_RGBA(217,77,180,0.1),inset_-4px_-4px_8px_0px_RGBA(0,0,0,0.4),4px_4px_8px_0px_RGBA(0,0,0,0.25)]"
            >
              <summary
                className="list-none cursor-pointer"
                onClick={(e) => { e.preventDefault(); toggle(idx); }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(idx);
                  }
                }}
              >
                {/* The question text */}
                {it.q}
              </summary>

              {/* The answer text */}
              <div className="mt-2">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
	}