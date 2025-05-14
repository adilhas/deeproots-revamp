import React from 'react';

const JoinUs = () => {
  return (
    <section className="text-center py-16 w-full max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#0085a8] to-[#ad1aaf]">
        Ready to Build the Future With Us?
      </h2>
      <p className="text-xl dark:text-white mb-10 max-w-2xl mx-auto">
        Join thousands of builders shaping the decentralized world of tomorrow.
      </p>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <button className="group relative px-8 py-4 bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-white rounded-full font-bold text-lg transition-all duration-300">
          <span className="relative z-10">Join the Movement</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </button>
      </div>
    </section>
  );
};

export default JoinUs;
