'use client';

import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const DealRoomFAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqs = [
    {
      question: 'When will the blockchain launch?',
      answer:
        'A Foundation Seat with 12% on-chain rewards, governance rights, and private round access.',
    },
    {
      question: 'Is it secure and compliant?',
      answer:
        'Yes, DEEPROOTS is U.S.-registered; funds go to verified multisig wallets.',
    },
    {
      question: 'What do I receive after contributing?',
      answer:
        'A confirmation email, official receipt, and access to your private Seeder Dashboard.',
    },
    {
      question: 'Can I increase my allocation later?',
      answer:
        'Yes, if seats are still available; early contributors get upgrade priority.',
    },
    {
      question: 'Why is this private?',
      answer:
        'To protect the ecosystem and prioritize aligned, long-term participants.',
    },
  ];

  return (
    <div className="w-full max-w-[1026px] mx-auto">
      <h2 className="text-4xl text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text w-fit mx-auto font-orbitron font-bold">
        FAQs
      </h2>
      {/* <div className="text-center mt-4 text-2xl">{t('faqs.subheading')}</div> */}
      <div>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="mt-6 p-[2px] rounded-xl bg-gradient-to-r from-gradient-from to-gradient-to mx-auto transition-all duration-300"
            >
              <div
                className="w-full py-2 px-3 rounded-xl bg-white  text-[#303030]  cursor-pointer"
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
                  <div className="mt-2  text-[#696969]">{faq.answer}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DealRoomFAQs;
