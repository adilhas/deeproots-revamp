import { featuresCardItems } from '@/constants/sectionData';

const Features = () => {
  return (
    <main className="md:my-10 my-5 relative py-10 md:py-20 flex bg-neutral-200 dark:bg-neutral-950 justify-center flex-col items-center w-full">
      <div className="mt-10 lg:w-[80vw] gap-10 md:gap-x-6 w-full px-4 md:px-4 grid md:grid-cols-2 grid-cols-1">
        {featuresCardItems.map((card, index) => (
          <div key={index} className="inline-block">
            <div className="flex items-center cursor-pointer justify-center">
              <div className="dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0] shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8] rounded-md">
                <a href={'#'} rel="noopener noreferrer">
                  {card.icon}
                </a>
              </div>
              <div className="flex items-start w-[80vw] md:w-[60vw] ml-6 flex-col">
                <h2 className="font-bold text-md md:text-lg text-center leading-[55px] lg:leading-normal bg-gradient-to-r from-[#AD1AAF] via-[#0085a8] to-[#0085a8] to-neutral-500 dark:bg-gradient-to-r dark:from-[#AD1AAF] dark:via-[#0085a8] dark:to-neutral-500 bg-clip-text font-orbitron text-transparent">
                  {card.title}
                </h2>
                <p className="font-sans text-sm w-full">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-60 h-60 absolute lg:bottom-16 lg:left-0 bg-[#ad1aa0] blur-[300px] md:blur-[300px] hidden lg:flex rounded-full" />
    </main>
  );
};

export default Features;
