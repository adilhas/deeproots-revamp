import { termSections } from './data';
import { AlertTriangle, CheckCircle2, Compass } from 'lucide-react';

const TermsSection = () => {
  return (
    <>
      {termSections.map((section, index) => (
        <section
          key={index}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm"
        >
          <div className="flex items-center mb-6">
            <div className="mr-3">{section.icon}</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {section.title}
            </h2>
          </div>
          <ul className="space-y-4 grid md:grid-cols-2">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start">
                <div className="mr-3 mt-0.5">
                  {index === 0 ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : index === 1 ? (
                    <Compass className="w-5 h-5 text-blue-500" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  )}
                </div>
                <p className="text-gray-700 dark:text-gray-300">{item}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
};

export default TermsSection;
