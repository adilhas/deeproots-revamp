import React from 'react';
import { JSX } from 'react/jsx-runtime';

interface FeatureItem {
  icon: JSX.Element;
  label: string;
}

interface FeatureListProps {
  title: string;
  icon: JSX.Element;
  features: FeatureItem[];
  color: 'red' | 'green';
}

const FeatureList: React.FC<FeatureListProps> = ({
  title,
  icon,
  features,
  color,
}) => {
  const colorClasses = {
    red: {
      bg: 'bg-red-100 dark:bg-neutral-900',
      text: 'text-red-700 dark:text-red-300',
      icon: 'text-red-600',
      itemText: 'text-red-600 dark:text-red-200',
    },
    green: {
      bg: 'bg-green-100 dark:bg-neutral-900',
      text: 'text-green-700 dark:text-green-300',
      icon: 'text-green-600',
      itemText: 'text-green-600 dark:text-green-200',
    },
  };

  return (
    <div className={`${colorClasses[color].bg} p-6 rounded-3xl shadow-lg`}>
      <h3
        className={`text-2xl font-semibold font-orbitron ${colorClasses[color].text} mb-8 flex items-center`}
      >
        {React.cloneElement(icon, {
          className: `mr-6 ${colorClasses[color].icon}`,
          size: 30,
        })}
        {title}
      </h3>
      <ul className="space-y-2">
        {features.map(({ icon, label }, idx) => (
          <li
            key={idx}
            className={`flex items-center mb-5 ${colorClasses[color].itemText} font-medium hover:scale-105`}
          >
            {React.cloneElement(icon, {
              className: `mr-5 ${colorClasses[color].icon}`,
              size: 20,
            })}
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;
