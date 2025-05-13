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
      <Navbar />

      {/* Hero Section with Animated Background */}
      <main className="relative w-full">
        {/* Particle Background with Overlay */}
        <div className="fixed inset-0 z-0 bg-[url('/academy/particle-bg.webp')] bg-cover" />
        <div className="fixed inset-0 z-0 dark:bg-primary-dark backdrop-blur-sm" />

        <div className="relative z-10 w-full">
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
                <p className="text-xl md:text-3xl text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed">
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
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-gray-400 mb-2">Discover More</span>
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </svg>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <div className="w-full px-4 sm:px-6 lg:px-8 py-20">
            {/* What is Deep Roots - Side-by-side with Image */}
            <section className="mb-24 w-full max-w-7xl mx-auto">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center mr-5">
                  <span className="text-3xl">🌍</span>
                </div>
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-400 to-blue-500">
                  What is Deep Roots?
                </h2>
              </div>

              <div className="flex flex-col lg:flex-row gap-10 items-center">
                {/* Content Side */}
                <div className="lg:w-1/2">
                  <div className="p-8 sm:p-10 bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-3xl border border-gray-700 hover:border-green-500/30 shadow-xl transition duration-300 h-full">
                    <div className="space-y-6 text-xl text-gray-300">
                      <p className="leading-relaxed">
                        Deep Roots is{' '}
                        <span className="text-green-400 font-semibold">
                          not just a blockchain
                        </span>
                        . It's a movement. A bold shift from centralized control
                        to open collaboration. From silence to voice. From
                        gatekeeping to possibility.
                      </p>
                      <p className="leading-relaxed">
                        We call it{' '}
                        <span className="font-bold text-blue-400">DeWorld</span>{' '}
                        — the decentralized internet, rebuilt for people,
                        powered by blockchain and AI.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="lg:w-1/2 relative group">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-600 via-blue-600 to-green-600 blur-xl opacity-50 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src="/academy/about-deeproots.jpeg"
                      alt="Deep Roots Team"
                      width={1200}
                      height={675}
                      className="w-full transform group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Building the Future
                      </h3>
                      <p className="text-gray-300">
                        The Deep Roots team pioneering decentralized solutions
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
                  <div className="text-8xl text-green-500/20 mb-6 font-serif">
                    "
                  </div>
                  <blockquote className="text-2xl sm:text-3xl italic mb-8 text-white leading-relaxed">
                    We seed visions in the earth's roots — and harvest deep
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
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join thousands of builders shaping the decentralized world of
                tomorrow.
              </p>

              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full font-bold text-lg transition-all duration-300">
                  <span className="relative z-10">Join the Movement</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </button>

                <button className="group relative px-8 py-4 bg-transparent border border-gray-600 hover:border-green-400 text-white rounded-full font-bold text-lg transition-all duration-300">
                  <span className="relative z-10">Learn More</span>
                </button>
              </div>

              {/* Social Proof */}
              <div className="mt-16 flex flex-wrap justify-center items-center gap-8 sm:space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">
                    10K+
                  </div>
                  <div className="text-gray-400">Community Members</div>
                </div>
                <div className="hidden sm:block h-12 w-px bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">
                    50+
                  </div>
                  <div className="text-gray-400">Countries</div>
                </div>
                <div className="hidden sm:block h-12 w-px bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">
                    100%
                  </div>
                  <div className="text-gray-400">Decentralized</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
