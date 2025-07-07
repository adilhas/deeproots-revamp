'use client';

import { FaPlay } from 'react-icons/fa';
import { PiExamFill } from 'react-icons/pi';

interface Props {
  onStart: () => void;
}

const QuizIntro = ({ onStart }: Props) => {
  return (
    <div className="max-w-3xl mx-auto text-center py-20 px-3">
      <div className="bg-gradient-to-br from-gradient-from to-gradient-to text-white p-10 rounded-3xl shadow-xl backdrop-blur-md">
        <div className="text-5xl mb-4 flex justify-center text-white">
          <PiExamFill />
        </div>
        <h1 className="text-4xl font-bold mb-2 font-orbitron">
          DEEPQUEST – Quiz Hub
        </h1>
        <p className="text-lg">DEEPROOTS Knowledge Center</p>
        <p className="text-lg mb-6">
          A gateway to test your knowledge of Web3, DEEPROOTS, and the future.
        </p>
        <button
          onClick={onStart}
          className="bg-gradient-to-r w-fit mx-auto from-[#00c6ff] to-[#0072ff] text-white px-8 py-3 text-lg rounded-full shadow-lg hover:scale-105 transition flex items-center justify-center gap-2"
        >
          <FaPlay /> Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizIntro;
