import NotificationModal from '@/Shared/NotificationModal';
import { Bell, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

const SeederNotification = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-5 bg-white p-2 rounded-4xl flex flex-row items-center w-full justify-between  gap-2">
      <div className="w-fit rounded-full bg-[#DBEAFE] p-2">
        <Bell className="w-6 h-6 text-[#3B82F6]" />
      </div>
      <div className="w-full overflow-hidden text-nowrap">
        <div>Founders call coming up on 16th August 2025, Get registered.</div>
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className="w-fit rounded-full bg-[#DBEAFE] p-2"
      >
        <ChevronRight className="w-6 h-6 text-[#3B82F6]" />
      </button>
      <NotificationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default SeederNotification;
