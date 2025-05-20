import Image from 'next/image';
import Link from 'next/link';

const PodcastSection = () => {
  return (
    <section className="py-12 px-4 bg-gray-400 dark:bg-transparent">
      <h1 className="lg:text-5xl text-4xl font-orbitron font-bold text-center mb-10 bg-gradient-to-t from-neutral-950 to-[#CF9345] dark:from-[#FDB91A] dark:to-[#626159] text-transparent bg-clip-text">
        Our Podcast
      </h1>
      <div className="container lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-8 mx-auto">
        <div className="space-y-4 lg:w-1/2 lg:pr-9">
          <h2 className="text-3xl font-orbitron font-semibold">
            <span className="bg-gradient-to-t from-neutral-950 to-[#CF9345] dark:from-[#FDB91A] dark:to-[#626159] text-transparent bg-clip-text">
              Saxophone{' '}
            </span>
            Live Podcast <br /> For Blockchain Insights
          </h2>
          <div className="lg:hidden flex lg:w-1/2">
            <Image
              src="/landing/podcast.webp"
              alt="Podcast Mobile"
              width={600}
              height={337}
              className="w-full h-auto rounded-2xl shadow-lg"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Explore Deep Roots and the future of blockchain and DeWorld. Join us
            to shape the future, gain exclusive insights, collaborate with
            innovators, and be part of the community.
          </p>
          <Link href="https://saxophone.earth/">
            <button className="hover:scale-105 bg-[#CF9345] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#b8833d] transition duration-300">
              Join the Conversation
            </button>
          </Link>
        </div>
        <div className="hidden lg:flex lg:w-1/2 pl-9">
          <Image
            src="/landing/podcast.webp"
            alt="Podcast Desktop"
            width={800}
            height={450}
            className="w-full h-auto rounded-2xl shadow-lg"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
