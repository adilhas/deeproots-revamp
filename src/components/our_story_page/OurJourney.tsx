import { Globe } from 'lucide-react';

const OurJourney = () => {
  return (
    <section className="mb-24">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:order-2 flex-shrink-0 bg-[#ad1aaf]/10 p-6 rounded-2xl">
          <Globe className="w-12 h-12 text-[#ad1aaf]" />
        </div>
        <div className="md:order-1">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-[#ad1aaf] to-[#0085a8] text-transparent bg-clip-text">
              The Journey So Far
            </span>
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
            <p>
              We began with one mission: make blockchain simple, powerful, and
              useful in real life.
            </p>
            <p>We built tools — not just for developers, but for people.</p>
            <p>
              From one token, we grew an ecosystem. From one idea, we formed a
              movement.
            </p>
            <p className="font-bold">
              Every product in Deep Roots was designed for one thing: to bring
              freedom back to everyday technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
