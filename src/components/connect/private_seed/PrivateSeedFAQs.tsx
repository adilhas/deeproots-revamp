'use client';

import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

const PrivateSeedFAQs = () => {
  const { t } = useTranslation('connect/private_seed');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqs = [
    {
      question: t('faqs.q1.question'),
      answer: t('faqs.q1.answer'),
    },
    {
      question: t('faqs.q2.question'),
      answer: t('faqs.q2.answer'),
    },
    {
      question: t('faqs.q3.question'),
      answer: t('faqs.q3.answer'),
    },
    {
      question: t('faqs.q4.question'),
      answer: t('faqs.q4.answer'),
    },
    {
      question: t('faqs.q5.question'),
      answer: t('faqs.q5.answer'),
    },
  ];

  return (
    <div>
      <h2 className="text-[36px] text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text w-fit mx-auto font-orbitron font-bold">
        {t('faqs.heading')}
      </h2>
      {/* <div className="text-center mt-4 text-2xl">{t('faqs.subheading')}</div> */}
      <div>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`mt-6 p-[2px] rounded-xl ${isOpen ? 'bg-gradient-to-r' : 'bg-none'} from-gradient-from to-gradient-to max-w-[600px] mx-auto transition-all duration-300`}
            >
              <div
                className={`w-full py-2 px-3 rounded-xl ${isOpen ? 'bg-white dark:bg-[#1C1C1C]' : 'bg-none'} text-[#303030] dark:text-[#F8FAFC] cursor-pointer`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="font-medium flex flex-row justify-between items-center">
                  <div>{faq.question}</div>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {isOpen && (
                  <div className="mt-2 dark:text-[#F1F5F9] text-[#696969]">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrivateSeedFAQs;
