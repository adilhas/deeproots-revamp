import { BrainCircuit } from 'lucide-react';

const AiRoolsInto = () => {
  return (
    <section className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl transition-colors duration-300">
      <div className="flex flex-col md:flex-row gap-8 items-center w-fit mx-auto">
        <div className="flex-shrink-0 bg-[#0085a8]/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center">
          <BrainCircuit className="w-8 h-8 text-[#0085a8]" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            AI Tools — Powering the Mind of DeWorld
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              From smart suggestions to automated systems, our AI tools are
              built to empower people — not replace them.
            </p>
            <p>
              We use AI to boost creativity, not control it. To simplify tasks,
              not complicate lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiRoolsInto;
