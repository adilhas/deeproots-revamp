import { AiToolsFeaturesData } from './constant';

const AiToolsFeatures = () => {
  return (
    <section className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
          What Our AI Tools Do
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AiToolsFeaturesData.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-[#0085a8]/50 dark:hover:border-[#ad1aaf]/50 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex items-center mb-3">
              <div className="mr-3">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 ml-9">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AiToolsFeatures;
