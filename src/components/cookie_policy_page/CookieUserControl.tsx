import { cookirUserControlData } from './data';
import { Settings } from 'lucide-react';

const CookieUserControl = () => {
  return (
    <section className="mb-12 bg-gradient-to-br from-[#0085a8]/10 to-[#ad1aaf]/10 dark:from-[#0085a8]/20 dark:to-[#ad1aaf]/20 p-8 rounded-2xl border border-[#0085a8]/30 dark:border-[#ad1aaf]/30">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <Settings className="w-8 h-8 text-[#ad1aaf] mr-3" />
        <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
          Your Control
        </span>
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        You can manage cookies in these ways:
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {cookirUserControlData.map((item, index) => (
          <div
            key={index}
            className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center mb-2">
              <div className="mr-2">{item.icon}</div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CookieUserControl;
