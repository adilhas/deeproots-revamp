import React from 'react';
import { FiCheck, FiCheckCircle } from 'react-icons/fi';

const RULES = [
  'Only submit original, responsibly disclosed vulnerabilities',
  'Do **not perform** denial-of-service attacks',
  'Do **not access private data or users’ funds**',
  'Simulate attacks in testnet where possible',
  'Give clear PoC, steps, and suggested fixes',
];

const BountyRules = () => {
  return (
    <section className="py-16">
      <div className="max-w-[700px] w-full mx-auto p-6 rounded-2xl bg-white dark:bg-[#1C1C1C] border border-white dark:border-[#303030]">
        <header className="flex items-center gap-3 text-3xl font-semibold mb-8">
          <FiCheckCircle className="text-[#10B981]" />
          <h2 className="text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
            Rules
          </h2>
        </header>

        <ul className="space-y-4">
          {RULES.map((rule, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <FiCheck className="text-[#10B981] w-5 h-5 mt-1" />
              <p
                className="text-base"
                dangerouslySetInnerHTML={{
                  __html: rule.replace(
                    /\*\*(.*?)\*\*/g,
                    '<span class="font-semibold">$1</span>'
                  ),
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BountyRules;
