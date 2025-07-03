"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import theme from "../theme";
import { constants } from "../constants";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16" style={{ backgroundColor: theme.colors.white }}>
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
        <div className="space-y-4">
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
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <ChevronDown className="w-5 h-5" color={theme.colors.white} />
                </motion.div>
              </button>

              {/* Resposta */}
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                    className="px-7 pb-6 pt-2 text-base leading-relaxed"
                    style={{
                      backgroundColor: theme.colors.background,
                      color: theme.colors.text,
                      borderTop: `1px solid ${theme.colors.lightBlue}`,
                    }}
                  >
                    <div className="space-y-3">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
