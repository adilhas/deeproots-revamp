import Image from 'next/image';
import {
  PiChartBar,
  PiLightbulbFilament,
  PiListStar,
  PiMonitor,
} from 'react-icons/pi';

const RootCoreSection = () => {
  const features = [
    {
      icon: PiListStar,
      title: 'Full Operations Control',
      text: 'Manage every workflow, task, and project operation from one unified dashboard built for clarity and speed.',
    },
    {
      icon: PiChartBar,
      title: 'Advanced Performance Tracking',
      text: 'Monitor engagement, platform reach, and campaign results across all Web3 channels in real time.',
    },
    {
      icon: PiMonitor,
      title: 'Project Health Monitoring',
      text: 'Instantly detect weak points and strong areas with visual heatmaps, diagnostics, and traffic flow analysis.',
    },
    {
      icon: PiListStar,
      title: 'Unified Dashboard Experience',
      text: 'Run operations and marketing side by side — everything you need, always on one screen.',
    },
    {
      icon: PiLightbulbFilament,
      title: 'Actionable Insights for Growth',
      text: 'Drive smarter decisions with intelligent reports and optimization tools designed for scale.',
    },
  ];

  return (
    <section className="px-6 lg:px-12 gap-10 bg-gradient-to-b  from-[#92AECC] to-[#8CA9C8] dark:from-[#06243E] dark:to-[#06243E] relative overflow-hidden ">
      <div className="max-w-[1200px] relative mx-auto flex flex-col py-20 lg:flex-row items-center  ">
        <div className="absolute top-[-100px] right-[30px] w-[600px] h-[400px] bg-[#FECBB7] dark:bg-[#E76D65] blur-[150px] opacity-60 dark:opacity-50 pointer-events-none z-0" />
        <div className="absolute bottom-[-100px] left-[-200px] w-full md:w-[600px] h-[50%] bg-[#FED5C6] dark:bg-[#0C375F] blur-3xl opacity-20 dark:opacity-20 rounded-full z-0" />
        <div className="absolute bottom-[-100px] right-[30px] w-[600px] h-[400px] bg-[#CDD2E2] dark:bg-[#418AC1] blur-[150px] opacity-60 dark:opacity-50 pointer-events-none z-0" />

        <div className="lg:w-1/2 w-full text-gray-900 dark:text-gray-200 relative z-10 lg:pl-9">
          <h1 className="text-5xl lg:text-4xl font-extrabold font-orbitron leading-tight w-fit text-[#CE5C5E] dark:text-[#D25D5C] mb-4">
            ROOTCORE
          </h1>
          <div className="block lg:hidden my-4 w-full max-w-md mx-auto">
            <Image
              src="/landing/rootcore.png"
              alt="rootcore Mobile"
              width={600}
              height={337}
              className="w-full h-auto rounded-2xl"
              priority
            />
          </div>
          <h1 className="text-xl font-extrabold font-orbitron leading-tight w-fit text-[#0977E6] dark:text-[#208FFF] mb-4">
            One Dashboard. Total Web3 project Control.
          </h1>
          <ul className="space-y-6 text-base">
            {features.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-3">
                  <Icon className="w-8 h-8 text-[#0977E6] dark:text-[#2090FF]" />
                  <span className="font-semibold text-md text-[#CE3325] dark:text-[#FC8B81] font-orbitron">
                    {title}
                  </span>
                </div>
                <p className="text-[#20507E] dark:text-[#E0EAF6]">{text}</p>
              </li>
            ))}
          </ul>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href={'https://rootcore.earth/'}
          >
            <button
              className="hover:scale-105 mt-8 px-6 py-3 bg-gradient-to-r from-[#FCAAA7] to-[#0977E6] dark:from-[#CF748D] dark:to-[#8D4A40] font-bold rounded-lg text-white transition"
              style={{ boxShadow: `0px 4px 17px 0px #00000040` }}
            >
              Explore RootCore
            </button>
          </a>
        </div>

        {/* Desktop Image (Only shows on desktop) */}
        <div className="hidden lg:block lg:w-1/2 mx-auto p-8 z-10">
          <Image
            src="/landing/rootcore.png"
            alt="RootChat Desktop"
            width={800}
            height={450}
            className="w-full h-auto rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default RootCoreSection;
