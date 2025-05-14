import { heroSectionWords } from '@/constants/sectionData';
import AnimatedWord from './AnimatedWord';

export default function AnimatedParagraph() {
  return (
    <p className="md:text-xl text-sm font-sans tracking-wide text-center w-[90vw] my-10 lg:w-[60vw] leading-loose mx-2 md:px-5 md:w-[100vw]">
      {heroSectionWords.map((word, i) => (
        <AnimatedWord key={i} text={word} delayOffset={i * 4} />
      ))}
    </p>
  );
}
