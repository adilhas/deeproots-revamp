'use client';
import { ChevronDown } from 'lucide-react';
import React from 'react';

interface DropdownFieldProps {
  label: string;
  icon: React.ReactNode;
  field: string;
  options: string[];
  value: string | string[];
  onSelect: (field: string, value: string) => void;
}

export const DropdownField: React.FC<DropdownFieldProps> = ({
  label,
  icon,
  field,
  options,
  value,
  onSelect,
}) => {
  const isMulti = Array.isArray(value);
  const selectedText = isMulti ? value.join(', ') || label : value || label;

  return (
    <div className="dropdown w-full">
      <div
        tabIndex={0}
        role="button"
        className="input input-bordered bg-white dark:bg-[#303030] flex items-center justify-between rounded-full w-full"
      >
        <div className="flex items-center gap-2 text-[#4B5563] dark:text-white truncate">
          {icon}
          <span className="truncate">{selectedText}</span>
        </div>
        <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-white dark:bg-[#303030] rounded-box w-full max-h-60 overflow-y-auto"
      >
        {options.map((opt) => {
          const isSelected = isMulti
            ? (value as string[]).includes(opt)
            : value === opt;
          return (
            <li key={opt} className="w-full">
              <button
                type="button"
                onClick={() => onSelect(field, opt)}
                className="flex items-center justify-between text-[#4B5563] dark:text-white w-full px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="truncate">{opt}</span>
                <input
                  type="checkbox"
                  checked={isSelected}
                  readOnly
                  className="checkbox checkbox-sm pointer-events-none bg-white dark:bg-[#303030] border-gray-300 dark:border-gray-600 text-blue-600"
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
