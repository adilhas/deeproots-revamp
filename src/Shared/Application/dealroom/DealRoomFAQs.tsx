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
      question: 'When does the blockchain launch?',
      answer:
        'We’re already live with on-chain smart contracts and testnet functionality. Full mainnet deployment is scheduled during the campaign rollout phases.',
    },
    {
      question: 'Is this secure and compliant?',
      answer:
        'Yes. DeepRoots is operated by a fully registered U.S. legal entity. All ecosystem contributions are handled via verified multisig wallets and follow strict compliance and access protocols.',
    },
    {
      question: 'What do I receive after contributing?',
      answer:
        'You will receive a confirmation email, a secure seeding receipt, and access to your private Foundation Seeder Page. This page outlines your participation tier, ecosystem access rights, and includes real-time updates on blockchain timelines and connected Web3 products',
    },
    {
      question: 'Can I contribute more later?',
      answer:
        'Yes — if Foundation Seats are still available. Early contributors receive priority access. A one-time option to refill your original seat may be granted, but seat upgrades are not permitted once confirmed.',
    },
    {
      question: 'Why is this opportunity private?',
      answer:
        'To protect the integrity of the ecosystem, ensure alignment with long-term contributors, and preserve the governance structure of the DeepRoots network.',
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
              className={`mt-6 p-[2px] pb-[3px] rounded-[15px] ${isOpen ? 'bg-gradient-to-r' : 'bg-none'} from-gradient-from to-gradient-to mx-auto transition-all duration-300`}
            >
              <div
                className={`w-full py-2 px-3 rounded-xl ${isOpen ? 'bg-white' : 'bg-none'}  text-[#303030]  cursor-pointer`}
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
