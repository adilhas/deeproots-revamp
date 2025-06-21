'use client';

import { RocketIcon } from 'lucide-react';
import { clsx } from 'clsx';

export interface PhaseCardProps {
  phase: string;
  title: string;
  subtitle: string;
  timeline: string;
  items: string[];
  isCurrent?: boolean;
  className?: string;
  titleContainerClassname?: string;
}

export default function PhaseCard({
  phase,
  title,
  subtitle,
  timeline,
  items,
  isCurrent = false,
  className,
  titleContainerClassname,
}: PhaseCardProps) {
  return (
    <div
      className={clsx(
        ' p-2 rounded-2xl shadow-md w-full max-w-3xl mx-auto text-[#303030]',
        className
      )}
    >
      <div
        className={clsx(
          'flex justify-between items-start mb-4 border p-3 rounded-2xl ',
          titleContainerClassname
        )}
      >
        <div>
          <div className="flex flex-row items-center gap-3 mb-1">
            <h2 className="text-2xl font-semibold font-orbitron">{phase}</h2>
            {isCurrent && (
              <span className="inline-block text-sm text-[#2563EB] bg-[#DBEAFE] px-2 py-0.5 rounded-md font-sans">
                Current phase
              </span>
            )}
          </div>
          <div className="text-xl font-orbitron">{title}</div>
          <div className="text-sm text-[#4B3863]">{subtitle}</div>
        </div>
        <p className="font-orbitron font-semibold md:text-2xl text-right">
          {/* <span className="text-[#c6613f] font-sans">Q</span> */}
          {timeline}
        </p>
      </div>

      {/* Items */}
      <ul className="mt-6 space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm md:text-base">
            <RocketIcon className="w-4 h-4 mt-1 text-purple-800" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
