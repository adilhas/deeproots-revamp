import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import {
  Brain,
  Code2,
  Globe,
  Lightbulb,
  Rocket,
  Users,
  BookOpen,
} from 'lucide-react';
import ShareValueHeader from './ShareValueHeader';

const features = [
  {
    icon: <Brain size={30} className="text-[#52b797]" />,
    title: 'AI-Powered Learning',
    description:
      'Empowering anyone, anywhere to learn and innovate in the decentralized world.',
  },
  {
    icon: <Code2 size={30} className="text-[#52b797]" />,
    title: 'Decentralized Tech Resources',
    description:
      'Access tools to build on blockchain and decentralized technologies.',
  },
  {
    icon: <Globe size={30} className="text-[#52b797]" />,
    title: 'Global Access',
    description:
      'Programs for all sectors, enabling global innovation and contribution to DeWorld.',
  },
  {
    icon: <Lightbulb size={30} className="text-[#52b797]" />,
    title: 'Innovation Hub',
    description: 'A platform for hackathons, collaboration, and idea-sharing.',
  },
  {
    icon: <Rocket size={30} className="text-[#52b797]" />,
    title: 'Empowering Creators',
    description: 'Turn ideas into reality and shape the future of DeWorld.',
  },
  {
    icon: <Users size={30} className="text-[#52b797]" />,
    title: 'Mentorship & Idea Sharing',
    description:
      'Lead groups, share ideas, and gain knowledge by teaching others.',
  },
  {
    icon: <BookOpen size={30} className="text-[#52b797]" />,
    title: 'Knowledge Exchange',
    description: 'Learn by teaching, and help grow the DeWorld community.',
  },
];

const ShareValueSection = () => {
  return (
    <main className="py-16 p-6 md:p-10 bg-[#E8F4D4] dark:bg-primary-dark relative">
      <div className="absolute top-0 bg-[#47866F] left-0 w-[100px] md:w-[500px] h-[300px] blur-3xl opacity-60 pointer-events-none z-10 dark:hidden" />
      <div className="absolute bottom-[-10px] bg-[#E88874] right-[-100px] w-[200px] md:w-[500px] h-[300px] blur-3xl opacity-50 pointer-events-none rounded-full z-10 dark:hidden" />

      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-center">
        <div className="flex flex-col lg:hidden">
          <h1 className="font-extrabold w-fit text-2xl lg:text-4xl font-orbitron bg-gradient-to-r from-[#E07C76] to-[#52b797] bg-clip-text text-transparent">
            SHARE VALUE
          </h1>
        </div>

        <div className="my-8 lg:my-0">
          <div className="relative w-full lg:w-[600px] rounded-2xl overflow-hidden z-20">
            <Image
              src="/landing/share-value.webp"
              alt="Education Hub"
              width={600}
              height={500}
              className="object-cover rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 600px"
              priority
            />
          </div>
          <div className="flex flex-col lg:hidden">
            <h2 className="font-bold text-xl mt-3 w-fit font-orbitron bg-gradient-to-r from-[#E07C76] to-[#52b797] bg-clip-text text-transparent">
              Learn, Create, Innovate – A DeWorld Education Hub
            </h2>
          </div>
        </div>

        <div className="lg:w-1/2 lg:ml-24">
          <div className="hidden lg:flex flex-col mb-4">
            <ShareValueHeader />
          </div>

          <div className="flex flex-col gap-4 text-left">
            {features.map((feature, index) => (
              <p key={index} className="font-sans text-lg">
                <span className="font-bold flex items-center gap-2 font-orbitron">
                  {feature.icon} {feature.title}
                </span>
                {feature.description}
              </p>
            ))}
          </div>

          <Link href="https://sharevalue.earth/" passHref>
            <button className="mt-8 py-4 px-7 w-1/3 font-orbitron font-bold text-lg text-neutral-200 bg-gradient-to-r from-[#E07C76] to-[#52b797] hover:text-neutral-900 rounded-lg">
              Learn
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ShareValueSection;
