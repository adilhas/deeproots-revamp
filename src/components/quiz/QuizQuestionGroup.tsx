import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface Question {
  question: string;
  options: string[];
}

interface QuizQuestionGroupProps {
  questions: Question[];
  userSelections: Record<number, number | null>;
  // eslint-disable-next-line no-unused-vars
  onSelect: (qIndex: number, optionIndex: number) => void;
}

const QuizQuestionGroup: React.FC<QuizQuestionGroupProps> = ({
  questions,
  userSelections,
  onSelect,
}) => {
  return (
    <div className="space-y-8">
      {questions.map((q, idx) => (
        <div
          key={idx}
          className="border border-gray-200 dark:border-gray-700 p-6 rounded-xl bg-white dark:bg-[#121212] shadow-sm"
        >
          <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-[#333] dark:text-white">
            <FaCheckCircle className="text-gradient-to" />
            <span>
              {idx + 1}. {q.question}
            </span>
          </div>

          <div className="space-y-2">
            {q.options.map((opt, optIdx) => {
              const isSelected = userSelections[idx] === optIdx;
              return (
                <label
                  key={optIdx}
                  className={`flex items-center px-4 py-2 border rounded-lg cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'bg-purple-100 dark:bg-purple-900/30 border-purple-500 text-purple-700 dark:text-purple-300'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300 dark:border-gray-600'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${idx}`}
                    checked={isSelected}
                    onChange={() => onSelect(idx, optIdx)}
                    className="mr-3 accent-purple-600 scale-125"
                  />
                  <span className="text-sm sm:text-base">
                    {`${String.fromCharCode(65 + optIdx)}. ${opt}`}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizQuestionGroup;
