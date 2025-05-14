import { Code2 } from 'lucide-react';

const HackathonInro = () => {
  return (
    <section className="bg-white dark:bg-gray-800/90 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl transition-colors duration-300">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0 bg-[#0085a8]/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center">
          <Code2 className="w-8 h-8 text-[#0085a8]" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Internal Hackathon — Where Ideas Take Root
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>The Deep Roots Internal Hackathon isn’t just a coding event</p>
            <p>
              In just 48 hours, we turn sparks into systems. No pitch decks. No
              panels. Just people building what matters.
            </p>
            <p className="font-medium">
              The best pieces of DeWorld have come from our internal sprints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonInro;
