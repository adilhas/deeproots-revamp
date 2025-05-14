import { doList } from '@/components/identity/privacy_policy_page/data';
import { Shield } from 'lucide-react';
import React from 'react';

const PrivacyDoes = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        <span className="flex items-center">
          <Shield className="w-8 h-8 text-green-500 mr-3" />
          What We Do
        </span>
      </h2>

      <div className="space-y-4">
        {doList.map((item, index) => (
          <div
            key={index}
            className="flex items-start p-4 rounded-lg bg-green-50/50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30"
          >
            <div className="mr-3 mt-0.5">{item.icon}</div>
            <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyDoes;
