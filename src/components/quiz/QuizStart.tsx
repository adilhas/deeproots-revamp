'use client';

import { useEffect, useState } from 'react';
import { quizzes } from '@/constants/quizzes';
import QuizIntro from './QuizIntro';
import QuizResult from './QuizResult';
import QuizHeader from './QuizHeader';
import QuizQuestionGroup from './QuizQuestionGroup';
import { ChevronRight } from 'lucide-react';

interface AnswerRecord {
  quizTitle: string;
  question: string;
  selected: number | null;
  correct: number;
  options: string[];
}

const QuizStart = () => {
  const [started, setStarted] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [userSelections, setUserSelections] = useState<
    Record<number, number | null>
  >({});
  const [showResult, setShowResult] = useState(false);

  const currentQuiz = quizzes[currentQuizIndex];
  const allAnswered = currentQuiz.questions.every(
    (_, idx) =>
      userSelections[idx] !== undefined && userSelections[idx] !== null
  );

  const handleOptionSelect = (qIndex: number, optionIndex: number) => {
    setUserSelections((prev) => ({ ...prev, [qIndex]: optionIndex }));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentQuizIndex, showResult]);
  const handleNextQuiz = () => {
    const quizAnswers = currentQuiz.questions.map((q, idx) => ({
      quizTitle: currentQuiz.title,
      question: q.question,
      selected: userSelections[idx] ?? null,
      correct: q.correct,
      options: q.options,
    }));

    setAnswers((prev) => [...prev, ...quizAnswers]);
    setUserSelections({});

    if (currentQuizIndex + 1 < quizzes.length) {
      setCurrentQuizIndex((prev) => prev + 1);
      // window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setShowResult(true);
      // window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentQuizIndex(0);
    setAnswers([]);
    setUserSelections({});
    setShowResult(false);
  };

  if (!started) return <QuizIntro onStart={() => setStarted(true)} />;
  if (showResult)
    return <QuizResult answers={answers} onRestart={handleRestart} />;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <QuizHeader
        title={currentQuiz.title}
        subtitle={currentQuiz.subtitle}
        current={currentQuizIndex + 1}
        total={quizzes.length}
      />
      <QuizQuestionGroup
        questions={currentQuiz.questions}
        userSelections={userSelections}
        onSelect={handleOptionSelect}
      />
      <div className="text-right mt-8">
        <button
          onClick={handleNextQuiz}
          disabled={!allAnswered}
          className={`px-8 py-3 rounded-full flex flex-row items-center text-lg font-semibold transition-all duration-300 ${
            allAnswered
              ? 'bg-gradient-to-r from-gradient-from to-gradient-to text-white hover:scale-105'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {currentQuizIndex + 1 < quizzes.length
            ? 'Next Quiz'
            : 'Finish & See Results'}
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default QuizStart;
