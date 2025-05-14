import React from 'react';

const FounderNote = () => {
  return (
    <section className="mb-24 w-full max-w-7xl mx-auto">
      <div className="p-8 sm:p-12 bg-gradient-to-br from-gray-900/90 to-black rounded-3xl border border-gray-700 shadow-2xl">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-8xl text-[#0085a8] mb-6 font-serif">&quot;</div>
          <blockquote className="text-2xl sm:text-3xl italic mb-8 text-white leading-relaxed">
            We seed visions in the earth&apos;s roots — and harvest deep
            solutions for life.
          </blockquote>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400">— Deep Roots Founder</p>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;
