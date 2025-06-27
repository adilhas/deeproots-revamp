import React from 'react';
import { MdOutlineQuiz } from 'react-icons/md';

interface QuizHeaderProps {
  title: string;
  subtitle: string;
  current: number;
  total: number;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({
  title,
  subtitle,
  current,
  total,
}) => {
  const percentage = (current / total) * 100;

  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 text-2xl font-bold text-[#4A4A4A] dark:text-white mb-2">
        <MdOutlineQuiz className="text-[#00C6FF]" />
        <h1>{title}</h1>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{subtitle}</p>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <div
          className="h-3 rounded-full transition-all duration-300 bg-gradient-to-r from-gradient-from to-gradient-to"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        Quiz {current} of {total}
      </p>
    </div>
  );
};

export default QuizHeader;
