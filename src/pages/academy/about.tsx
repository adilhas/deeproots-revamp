import Image from 'next/image';
import Head from 'next/head';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

export default function AboutAcademy() {
  return (
    <>
      <Head>
        <title>Deep Roots | DeWorld</title>
        <meta
          name="description"
          content="We Are the Next. We Are the DeWorld. Discover Deep Roots – a bold decentralized movement reshaping the internet."
        />
      </Head>

      <div className="overflow-x-hidden">
        <Navbar />
        {/* Hero Section with Animated Background */}
        <main className="relative w-full overflow-x-hidden max-w-[100vw] z-10 dark:bg-primary-dark">
          {/* Hero Section with Animated Text */}
          <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-20 w-full">
            <div className="w-full mx-auto text-center">
              <div className="animate-fade-in mb-8">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500">
                    We Are the
                  </span>
                  <div className="overflow-hidden h-24 md:h-32 my-2">
                    <span className="block text-7xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
                      DeWorld.
                    </span>
                  </div>
                </h1>
                <p className="text-xl md:text-3xl dark:text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed">
                  A decentralized movement reshaping the internet
                  <span className="block mt-1 text-emerald-400 font-medium">
                    from its roots
                  </span>
                </p>
              </div>

              {/* Hero CTA */}
              <div className="mt-12 relative group inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <button className="relative px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
                  Join the Movement
                </button>
              </div>

              {/* Scroll Indicator */}
            </div>
            {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
              <ArrowDown className="text-green-500" />
            </div> */}
          </section>

          {/* Main Content */}
          <div className="w-full px-4 sm:px-6 lg:px-8 py-20">
            {/* What is Deep Roots - Redesigned Side-by-side with Image */}
            <section className="mb-24 w-full max-w-7xl mx-auto">
              <div className="flex items-center mb-12">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center mr-6 shadow-lg">
                  <span className="text-4xl">🌍</span>
                </div>
                <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-400 to-blue-500">
                  What is Deep Roots?
                </h2>
              </div>

              <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                {/* Content Side - Enhanced with better typography and animation */}
                <div className="lg:w-1/2 flex flex-col">
                  <div className="p-10 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-gray-800/80 rounded-3xl border border-gray-700 hover:border-green-500/40 shadow-2xl transition-all duration-500 hover:shadow-green-500/10 h-full flex flex-col justify-center">
                    <div className="space-y-8">
                      <p className="text-2xl leading-relaxed text-gray-300 font-medium">
                        Deep Roots is{' '}
                        <span className="text-green-400 font-bold">
                          not just a blockchain
                        </span>
                        . It&apos;s a movement. A bold shift from centralized
                        control to open collaboration. From silence to voice.
                        From gatekeeping to possibility.
                      </p>
                      <p className="text-2xl leading-relaxed text-gray-300 font-medium">
                        We call it{' '}
                        <span className="font-extrabold text-blue-400">
                          DeWorld
                        </span>{' '}
                        — the decentralized internet, rebuilt for people,
                        powered by blockchain and AI.
                      </p>
                    </div>
                    <div className="mt-10 pt-6 border-t border-gray-700/50">
                      <button className="group relative px-6 py-3 bg-transparent border border-gray-600 hover:border-green-400 text-gray-300 rounded-full font-medium text-lg transition-all duration-300 flex items-center">
                        <span>Discover More</span>
                        {/* <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" /> */}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Image Side - Enhanced with better hover effects */}
                <div className="lg:w-1/2 relative group h-full min-h-[400px]">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-600/40 via-blue-600/40 to-green-600/40 blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative h-full overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src="/academy/about-deeproots.jpeg"
                      alt="Deep Roots Team"
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-10">
                      <h3 className="text-3xl font-bold text-white mb-3">
                        Building the Future Together
                      </h3>
                      <p className="text-gray-300 text-lg max-w-md">
                        The Deep Roots team pioneering decentralized solutions
                        that empower communities worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Vision and Mission - Grid Layout with Cards */}
            <section className="mb-24 w-full max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                Our Vision & Mission
              </h2>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                {/* Vision Card */}
                <div className="group">
                  <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-900/90 to-gray-800/80 h-full rounded-3xl border border-gray-700 hover:border-green-500/50 shadow-xl transition duration-300 transform group-hover:-translate-y-2">
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                        <span className="text-2xl">🔭</span>
                      </div>
                      <h3 className="text-3xl font-bold text-blue-400">
                        Our Vision
                      </h3>
                    </div>

                    <ul className="space-y-4">
                      {[
                        'Decentralize the Internet – Shift power from corporations to the people.',
                        'Empower Millions – Enable daily learning, earning, and access for all.',
                        'Fuel Innovation – Support creators, coders, and breakthrough ideas.',
                        'Ensure Privacy & Security – Trustless by design, secure by default.',
                        'Promote Community Governance – Users shape and evolve the network.',
                        'Connect Seamlessly – Interoperate across chains and systems.',
                        'Deliver Real Impact – From local solutions to global change.',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-400 text-xl mr-3">•</span>
                          <span className="text-gray-300 text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Mission Card */}
                <div className="group">
                  <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-900/90 to-gray-800/80 h-full rounded-3xl border border-gray-700 hover:border-blue-500/50 shadow-xl transition duration-300 transform group-hover:-translate-y-2">
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <h3 className="text-3xl font-bold text-green-400">
                        Our Mission
                      </h3>
                    </div>

                    <ul className="space-y-4">
                      {[
                        'Build tools and products that last for generations',
                        'Make everything easy to use, quick to learn, and simple to build',
                        'Invite the world to join, shape, and grow DeWorld',
                        'Provide free access to education, opportunity, and innovation',
                        'Promote freedom, privacy, and low-cost access for everyone',
                        'Create the root system of a new digital era',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-400 text-xl mr-3">•</span>
                          <span className="text-gray-300 text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Founder's Quote - Redesigned */}
            <section className="mb-24 w-full max-w-7xl mx-auto">
              <div className="p-8 sm:p-12 bg-gradient-to-br from-gray-900/90 to-black rounded-3xl border border-gray-700 shadow-2xl">
                <div className="max-w-3xl mx-auto text-center">
                  <div className="text-8xl text-green-500 mb-6 font-serif">
                    &quot;
                  </div>
                  <blockquote className="text-2xl sm:text-3xl italic mb-8 text-white leading-relaxed">
                    We seed visions in the earth&apos;s roots — and harvest deep
                    solutions for life.
                  </blockquote>
                  <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-6"></div>
                  <p className="text-xl text-gray-400">— Deep Roots Founder</p>
                </div>
              </div>
            </section>

            {/* CTA Section - Redesigned */}
            <section className="text-center py-16 w-full max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Ready to Build the Future With Us?
              </h2>
              <p className="text-xl dark:text-white mb-10 max-w-2xl mx-auto">
                Join thousands of builders shaping the decentralized world of
                tomorrow.
              </p>

              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full font-bold text-lg transition-all duration-300">
                  <span className="relative z-10">Join the Movement</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </button>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
