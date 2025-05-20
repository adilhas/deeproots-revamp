import React from 'react';

const AuthLoader = () => {
  return (
    <div className="h-screen bg-[url('/landing/deeproots-banner.webp')] min-h-screen bg-center bg-cover">
      <div className="w-full h-screen flex items-center justify-center relative bg-black/30">
        <div className="flex items-center justify-center relative">
          {/* Circle 1 */}
          <div
            className="absolute rounded-full border-[3.5px] border-t-[#0085a8] border-r-[#0085a8] border-transparent animate-spin-custom"
            style={{
              width: '250px',
              height: '250px',
              animationDelay: '-0.15s',
            }}
          ></div>
          {/* Circle 2 */}
          <div
            className="absolute rounded-full border-[3.5px] border-t-[#ad1aaf] border-r-[#ad1aaf] border-transparent animate-spin-custom"
            style={{
              width: '200px',
              height: '200px',
              animationDelay: '-0.3s',
            }}
          ></div>
          {/* Circle 3 */}
          <div
            className="absolute rounded-full border-[3.5px] border-t-[#0085a8] border-r-[#0085a8] border-transparent animate-spin-custom"
            style={{
              width: '150px',
              height: '150px',
              animationDelay: '-0.45s',
            }}
          ></div>
          {/* Circle 4 */}
          <div
            className="absolute rounded-full border-[3.5px] border-t-[#ad1aaf] border-r-[#ad1aaf] border-transparent animate-spin-custom"
            style={{
              width: '100px',
              height: '100px',
              animationDelay: '-0.6s',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AuthLoader;
