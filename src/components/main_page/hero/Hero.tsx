const Hero = () => {
  return (
    <main
      id="home"
      className="min-h-screen pt-[70px] md:pt-[88px] lg:pt-[95px] dark:bg-primary-dark dark:text-white flex justify-center z-10 relative flex-col lg:scale-x-105 items-center"
    >
      {/* Banner Image */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/landing/deeproots-banner.png')",
          height: 'calc(100vh - 95px)',
        }}
      >
        <style jsx>{`
          @media (min-width: 768px) {
            div[style] {
              height: calc(100vh - 88px);
            }
          }
          @media (min-width: 1024px) {
            div[style] {
              height: calc(100vh - 93px);
            }
          }
        `}</style>
      </div>

      <div className="flex flex-col py-[70px] text-center px-3">
        <h1 className="font-extrabold  text-2xl md:text-4xl text-center w-fit mx-auto bg-gradient-to-r from-[#9E2CA9]  to-[#3B82A4]  bg-clip-text font-orbitron text-transparent">
          HELLO FUTURE BY DEEP ROOTS
        </h1>

        <div className="inline-block text-lg my-6 max-w-[619px] mx-auto">
          From impossible to possible - A platform for innovative DeWorld Apps
          on the First Truly Dynamic Blockchain Network.
        </div>

        <button className="mx-auto cursor-pointer px-6 font-orbitron py-3 bg-gradient-to-r from-[#9E2CA9] to-[#3B82A4] text-center relative font-bold hover:bg-gradient-to-l  transition-all hover:delay-1000 hover:ease-in-out text-white rounded-2xl  text-lg">
          Join the Movement
        </button>
      </div>
    </main>
  );
};

export default Hero;
