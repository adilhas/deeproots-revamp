import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="text-center">
      <div className="bg-gradient-to-r from-[#0085a8]/10 to-[#ad1aaf]/10 dark:from-[#0085a8]/40 dark:to-[#ad1aaf]/40 p-6 rounded-xl mb-8 border border-[#0085a8]/20 dark:border-[#0085a8]/30">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Join the Future of Finance?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
          dRC is more than utility—it&apos;s a movement towards true
          decentralized ownership and participation.
        </p>
        <button className="bg-gradient-to-r to-[#0085a8] from-[#ad1aaf] text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto">
          Get dRC Now <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default CTASection;
