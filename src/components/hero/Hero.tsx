import AnimatedParagraph from './AnimateParagraph';

const Hero = () => {
  return (
    <main
      id="home"
      className="dark:bg-primary-dark dark:text-white flex justify-center z-10 relative flex-col lg:scale-x-105  items-center mb-20"
    >
      {/* Banner Image */}
      <div
        className="w-full h-48 md:h-[500px] lg:h-[750px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/landing/deeproot-banner.jpg')",
        }}
      ></div>

      {/* Title */}
      <div className="inline-block">
        <div style={{ opacity: 1, transform: 'none' }}>
          <h1 className="font-extrabold text-lg text-center md:text-4xl lg:text-6xl shadow-sm shadow-[#0085a8] leading-[55px] my-5 lg:leading-normal mb-3 bg-gradient-to-r from-[#AD1AAF] dark:via-[#0085a8] to-[#0085a8] dark:to-[#0085a8] bg-clip-text font-orbitron text-transparent">
            HELLO FUTURE BY DEEP ROOTS
          </h1>
        </div>
      </div>

      {/* Right blur effect (desktop only) */}
      <div className="z-0 hidden lg:flex text-lg">
        <div className="w-60 h-60 absolute lg:bottom-16 lg:right-0 bg-[#0085a8] lg:blur-[300px] rounded-full"></div>
      </div>

      {/* Left blur effect (desktop only) */}
      <div className="z-0 text-lg">
        <div className="w-60 h-60 absolute lg:bottom-16 lg:left-0 bg-[#0085a8] hidden lg:flex lg:blur-[300px] rounded-full"></div>
      </div>

      {/* Description */}
      <div className="inline-block">
        <AnimatedParagraph />
      </div>

      {/* CTA Button */}
      <button className="cursor-pointer mt-6 mx-5 md:w-[70vw] px-6 font-orbitron py-3 bg-gradient-to-r from-[#ad1aaf] to-[#0085a8] text-center relative font-bold hover:bg-gradient-to-l from-[#7947df] to-[#0085a8] transition-all hover:delay-1000 hover:ease-in-out text-white rounded-2xl w-[80vw] lg:w-[30vw] text-lg md:text-3xl md:my-6 tracking-wider">
        Join the Movement
      </button>
    </main>
  );
};

export default Hero;
