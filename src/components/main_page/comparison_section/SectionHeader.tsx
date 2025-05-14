const SectionHeader = () => (
  <div className="md:flex justify-around hidden items-center">
    {['Centralized', 'Comparison', 'Decentralized'].map((text, idx) => (
      <div className="inline-block" key={idx}>
        <h1 className="font-extrabold text-2xl text-center md:text-3xl md:mb-20 mb-10 lg:leading-normal bg-gradient-to-r from-[#0085a8] to-[#a45204] bg-clip-text font-orbitron text-transparent">
          {text}
        </h1>
      </div>
    ))}
  </div>
);

export default SectionHeader;
