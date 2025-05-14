import { Calendar } from 'lucide-react';

const EventsIntroSection = () => (
  <section className="bg-white dark:bg-white/5  backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-10 shadow-2xl shadow-[#ad1aaf]/10 transition-all duration-300">
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-shrink-0 bg-[#0085a8]/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center">
        <Calendar className="w-8 h-8 text-[#0085a8]" />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Events & Meetups
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Big updates. Bold ideas. Real energy. Deep Roots events are your
          chance to connect, learn, and grow with the community.
        </p>
      </div>
    </div>
  </section>
);

export default EventsIntroSection;
