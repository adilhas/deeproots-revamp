import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { IoMdFunnel } from 'react-icons/io';

const options = ['All'];

const Filter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('All');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="mb-8 px-4 flex flex-col gap-3 md:flex-row justify-between w-full">
      <div className="relative inline-block text-left w-full md:max-w-60">
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-100 bg-white dark:bg-[#2F2F31] border dark:border-[#2F2F31] rounded-lg border-[#FFFFFF]  transition"
        >
          <span>Category: {selected}</span>
          {isOpen ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>

        {isOpen && (
          <ul className="absolute z-10 mt-1 w-full bg-white dark:bg-[#2F2F31] border border-gray-300 dark:border-gray-600 rounded-md shadow-lg">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className="cursor-pointer px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex flex-row gap-1 items-center">
        <div className="relative w-full md:max-w-md">
          <input
            type="text"
            placeholder="Search App"
            className="w-full px-4 py-[7px] text-sm text-gray-900 dark:text-gray-100 bg-white dark:bg-[#2F2F31] border dark:border-[#2F2F31] rounded-lg border-[#FFFFFF] placeholder-gray-700 dark:placeholder-gray-300"
          />
        </div>

        <div className="bg-white dark:bg-[#2F2F31] h-[37px] w-10 flex items-center justify-center rounded-lg border dark:border-[#2F2F31] border-[#FFFFFF]">
          <IoMdFunnel className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
