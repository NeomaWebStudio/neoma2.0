"use client";
import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

interface TranslationProps {
  translations: Record<string, string>;
}

/**
 * Faq component
 *
 * This component renders a list of faq items with a toggleable details element.
 *
 * @returns {JSX.Element} The Faq component
 */
export default function Faq({ translations }: TranslationProps) {
  const items = [
 {
  q: translations["faq_q2"],
  a: [
   translations["faq_a21"],
   translations["faq_a22"],
   translations["faq_a23"],
   translations["faq_a24"]
  ]
 },
 {
  q: translations["faq_q3"],
  a: { text: "В середньому:" ,
  list: [
   translations["faq_a31"],
   translations["faq_a32"],
   translations["faq_a33"],
   translations["faq_a34"]
  ]
	}
 },
 { q: translations["faq_q4"], a: translations["faq_a4"] },
 { q: translations["faq_q5"], a: translations["faq_a5"] },
 { q: translations["faq_q6"], a: translations["faq_a6"] },
 { q: translations["faq_q7"], a: translations["faq_a7"] },
 { q: translations["faq_q8"], a: translations["faq_a8"] },
 { q: translations["faq_q9"], a: translations["faq_a9"] }
];
 const [openIndex, setOpenIndex] = useState<number | null>(null);

  /**
   * Toggle the details element of the given index
   * @param {number} idx The index of the details element to toggle
   */
  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="mb-24">
      <h3 className="text-center text-[28px] md:text-5xl text-white font-nanito lg:mb-12">Faq</h3>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
        <div className="mt-[40px] md:mt-[150px]">
          <Spline scene="/sphere.splinecode" className='flex justify-center items-center'/>
        </div>

        <div
          id="accordion"
          className=" text-white flex flex-col gap-3 mt-10"
        >
          <details className="text-[20px] h-auto md:text-[24px] border border-[#A93CFF] bg-[#0A081A] p-4 rounded-2xl shadow-[inset_4px_4px_16px_0px_RGBA(255,255,255,0.05),inset_4px_4px_8px_0px_RGBA(217,77,180,0.1),inset_-4px_-4px_8px_0px_RGBA(0,0,0,0.4),4px_4px_8px_0px_RGBA(0,0,0,0.25)]">
            <summary className="list-none cursor-pointer">
              {" "}
              {translations["faq_q1"]}{" "}
            </summary>
            <div className="text-[16px] mt-4 ">
              <p className="">
                {translations["faq_a1"]}
              </p>{" "}
              <br />
              <li className="ml-10">
                {translations["faq_a11"]}{" "}
              </li>
              <li className="ml-10">{translations["faq_a12"]}</li>
              <li className="ml-10">{translations["faq_a13"]}</li>
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
                className={`text-[16px] mt-4 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
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
