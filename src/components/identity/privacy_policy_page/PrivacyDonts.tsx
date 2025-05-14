import { dontDoList } from '@/components/identity/privacy_policy_page/data';
import { EyeOff } from 'lucide-react';
import React from 'react';

const PrivacyDonts = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        <span className="flex items-center">
          <EyeOff className="w-8 h-8 text-red-500 mr-3" />
          What We Don&apos;t Do
        </span>
      </h2>

      <div className="space-y-4">
        {dontDoList.map((item, index) => (
          <div
            key={index}
            className="flex items-start p-4 rounded-lg bg-red-50/50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30"
          >
            <div className="mr-3 mt-0.5">{item.icon}</div>
            <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyDonts;
