"use client";

import { useState } from "react";

import { ChevronDown } from "lucide-react";
import theme from "../theme";
import { constants } from "../constants";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-8"
      style={{ backgroundColor: theme.colors.white }}
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-8">
          <h2
            style={{ color: theme.colors.black }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            {constants.faq.title}
          </h2>
          <div
            className="w-24 h-1 mx-auto mt-2 rounded"
            style={{ backgroundColor: theme.colors.primary, opacity: 0.5 }}
          ></div>
        </div>

        {/* Lista FAQ */}
        <div className="space-y-4 pb-16">
          {constants.faq.faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-2xl shadow-sm overflow-hidden transition-all"
              style={{
                borderColor: theme.colors.lightBlue,
                backgroundColor: theme.colors.primary,
              }}
            >
              {/* Pergunta */}
              <button
                onClick={() => toggleFAQ(index)}
                className={`flex items-center justify-between w-full px-6 py-4 text-left text-lg font-semibold transition-colors duration-200 ${
                  activeIndex === index ? "text-white" : ""
                }`}
                style={{
                  color: theme.colors.white,
                }}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  color={theme.colors.white}
                />
              </button>

              {/* Resposta */}
              {activeIndex === index && (
                <div
                  className="px-7 pb-6 pt-2 text-base leading-relaxed"
                  style={{
                    backgroundColor: theme.colors.background,
                    color: theme.colors.text,
                    borderTop: `1px solid ${theme.colors.lightBlue}`,
                  }}
                >
                  <div className="space-y-3">{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Texto Inferior */}
        <div
          className="pt-4 mb-4 px-2"
          style={{ borderColor: theme.colors.lightBlue }}
        >
          <div className="text-left">
            <h3
              className="mb-4"
              style={{
                color: theme.colors.black,
                fontWeight: 700,
                fontStyle: "normal",
                fontSize: "32px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              {constants.faq.bottomText.mainText}{" "}
              <span
                className="font-bold"
                style={{
                  color: theme.colors.black,
                  fontWeight: 700,
                  fontSize: "32px",
                }}
              >
                {constants.faq.bottomText.highlightedText}
              </span>
            </h3>
            <p
              style={{
                color: theme.colors.text,
                fontStyle: "normal",
              }}
            >
              {constants.faq.bottomText.subText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
