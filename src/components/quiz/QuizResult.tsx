'use client';

import { BsPatchCheckFill } from 'react-icons/bs';
import { FaRedo } from 'react-icons/fa';

interface AnswerRecord {
  quizTitle: string;
  question: string;
  selected: number | null;
  correct: number;
  options: string[];
}

interface Props {
  answers: AnswerRecord[];
  onRestart: () => void;
}

const QuizResult = ({ answers, onRestart }: Props) => {
  const correctCount = answers.filter((a) => a.selected === a.correct).length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2 text-green-600">
          <BsPatchCheckFill /> Quiz Completed!
        </h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mt-2">
          ✅ You got <strong>{correctCount}</strong> out of{' '}
          <strong>{answers.length}</strong> correct!
        </p>
      </div>

      <div className="space-y-6">
        {answers.map((a, idx) => (
          <div
            key={idx}
            className="p-5 border rounded-xl bg-white/90 dark:bg-[#1f1f1f]/80"
          >
            <p className="text-xs font-medium text-blue-500">{a.quizTitle}</p>
            <p className="font-semibold mt-1 mb-2">{a.question}</p>
            <p>
              Your Answer:{' '}
              <span
                className={
                  a.selected === a.correct ? 'text-green-600' : 'text-red-600'
                }
              >
                {a.selected !== null
                  ? `${String.fromCharCode(65 + a.selected)}. ${a.options[a.selected]}`
                  : 'No answer'}
              </span>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Correct Answer:{' '}
              <span className="text-green-700 font-medium">
                {`${String.fromCharCode(65 + a.correct)}. ${a.options[a.correct]}`}
              </span>
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={onRestart}
          className="bg-gradient-to-r from-gradient-from to-gradient-to text-white px-8 py-3 text-lg rounded-full hover:scale-105 transition flex items-center justify-center gap-2"
        >
          <FaRedo /> Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizResult;
