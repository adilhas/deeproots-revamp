import React from 'react';

const VisionMission = () => {
  return (
    <section className="mb-24 w-full max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#0085a8] to-[#ad1aaf]">
        Our Vision & Mission
      </h2>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        <div className="group">
          <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-900/90 to-gray-800/80 h-full rounded-3xl border border-gray-700 hover:border-[#0085a8]/50 shadow-xl transition duration-300 transform group-hover:-translate-y-2">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-[#0085a8]/20 flex items-center justify-center mr-4">
                <span className="text-2xl">🔭</span>
              </div>
              <h3 className="text-3xl font-bold text-[#0085a8]">Our Vision</h3>
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
                  <span className="text-[#0085a8] text-xl mr-3">•</span>
                  <span className="text-gray-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="group">
          <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-900/90 to-gray-800/80 h-full rounded-3xl border border-gray-700 hover:border-[#ad1aaf]/50 shadow-xl transition duration-300 transform group-hover:-translate-y-2">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-[#ad1aaf]/20 flex items-center justify-center mr-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold text-[#ad1aaf]">Our Mission</h3>
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
                  <span className="text-[#ad1aaf] text-xl mr-3">•</span>
                  <span className="text-gray-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
