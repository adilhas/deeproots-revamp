import { Shield } from 'lucide-react';

const CPIntro = () => {
  return (
    <section className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm mb-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-shrink-0 bg-[#0085a8]/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center">
          <Shield className="w-8 h-8 text-[#0085a8]" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Cookie Policy
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            At Deep Roots, we believe in privacy by design — not intrusive
            tracking. We use cookies sparingly, only where they improve your
            experience or help us protect the platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CPIntro;
