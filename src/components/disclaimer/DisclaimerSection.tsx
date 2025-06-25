import { JSX } from 'react';

interface DisclaimerSectionProps {
  icon: string;
  title: string;
  content: string | JSX.Element;
}

const DisclaimerSection = ({
  icon,
  title,
  content,
}: DisclaimerSectionProps) => (
  <div className="my-10">
    <h3 className="font-bold flex items-center gap-2 text-3xl mb-6">
      <span>{icon}</span> {title}
    </h3>
    <div className="text-gray-700 text-xl dark:text-gray-300 bg-[#D4D4D4] dark:bg-[#1C1C1C] p-4 rounded-2xl border dark:border-[#737373] border-[#F1F1F1]">
      {content}
    </div>
  </div>
);

export default DisclaimerSection;
