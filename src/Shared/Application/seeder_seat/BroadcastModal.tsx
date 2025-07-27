'use client';

import React, { useEffect, useRef, useState } from 'react';
import { PiMegaphoneSimple } from 'react-icons/pi';

const BroadcastModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hasHoveredDropdown, setHasHoveredDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const broadcastsData = [
    {
      type: 'personal',
      message:
        'Broadcast message to come here..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis nisi mauris, pulvinar maximus erat vestibulum et. Sed si',
      time: 'Today, 12:00 pm',
    },
    {
      type: 'general',
      message:
        'Broadcast message to come here..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis nisi mauris, pulvinar maximus erat vestibulum et. Sed si',
      time: 'Today, 12:38 pm',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !isDesktop &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDesktop]);

  const handleMouseLeaveWrapper = () => {
    if (isDesktop) {
      timeoutRef.current = setTimeout(() => {
        if (!hasHoveredDropdown) {
          setIsOpen(false);
        }
      }, 200);
    }
  };

  const handleMouseEnterDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHasHoveredDropdown(true);
  };

  const handleMouseLeaveDropdown = () => {
    if (isDesktop) {
      setIsOpen(false);
      setHasHoveredDropdown(false);
    }
  };

  return (
    <div
      className="relative dropdown-end font-archivo text-[#303030]"
      ref={wrapperRef}
      onMouseLeave={handleMouseLeaveWrapper}
    >
      <div
        role="button"
        className="cursor-pointer m-1"
        onClick={() => {
          setIsOpen((prev) => !prev);
          setHasHoveredDropdown(false);
        }}
      >
        <PiMegaphoneSimple className="w-8 h-8" />
      </div>

      {isOpen && (
        <ul
          className="fixed md:absolute max-w-[411px] w-full right-0 mt-2 menu bg-white rounded-3xl z-10 p-2 shadow-sm"
          style={{
            minWidth: '411px',
          }}
          onMouseEnter={handleMouseEnterDropdown}
          onMouseLeave={handleMouseLeaveDropdown}
        >
          {broadcastsData.map((broadcast) => (
            <li
              key={broadcast.message}
              className="bg-[#F3F3F3] p-2 text-md mb-2 rounded-2xl w-full"
            >
              <div className="flex flex-wrap justify-between gap-2">
                <div
                  className={`font-medium text-sm py-1 px-2 rounded-lg text-white ${broadcast.type === 'personal' ? 'bg-[#F97316]' : ' bg-[#3B82F6]'}`}
                >
                  {broadcast.type}
                </div>
                <div className="text-[#696969] text-sm">{broadcast.time}</div>
              </div>
              <div>{broadcast.message}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BroadcastModal;
