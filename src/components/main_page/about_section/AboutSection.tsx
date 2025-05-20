import { aboutItems } from '@/constants/sectionData';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const AboutSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <div className="inline-block">
        <div>
          <h1 className="font-extrabold text-2xl text-center lg:text-start lg:text-3xl my-5 lg:leading-normal mb-10 bg-gradient-to-r from-[#0085a8] to-orange-400 bg-clip-text font-orbitron text-transparent">
            ABOUT DEEPROOTS
          </h1>
        </div>
      </div>

      <div className="md:space-y-6 space-y-4">
        {aboutItems.map((item, index) => (
          <div
            key={index}
            className="border border-[#0085a8] rounded-lg cursor-pointer hover:scale-105 transition-all"
          >
            <Link href={item.link}>
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-4 py-3 flex justify-between items-center cursor-pointer"
              >
                <span className="font-semibold">{item.question}</span>
                <span>
                  <ArrowUpRight />
                </span>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
