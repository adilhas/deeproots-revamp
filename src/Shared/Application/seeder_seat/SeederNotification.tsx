'use client';

import NotificationModal from '@/Shared/NotificationModal';
import { Bell, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import type { NotificationItemType } from '@/types/application';
import { useApplication } from '@/context/ApplicationContext';

const SeederNotification = () => {
  const { application } = useApplication();
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItemType[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch(
          `/api/notifications?submissionId=${application?.id}`
        );
        const data = await res.json();
        setNotifications(data);
      } catch (err) {
        console.error('Error fetching notifications', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [application?.id]);

  const unreadedNotification = notifications.filter(
    (noti) => noti.isRead === false
  );

  const latest = unreadedNotification[0];

  return (
    <div className="my-5 bg-white p-2 rounded-4xl flex flex-row items-center w-full justify-between gap-2">
      <div className="indicator">
        {unreadedNotification.length > 0 && (
          <span className="indicator-item badge badge-error badge-xs text-white translate-y-[-2px]">
            {unreadedNotification.length}
          </span>
        )}
        <div className="w-fit rounded-full bg-[#DBEAFE] p-2">
          <Bell className="w-6 h-6 text-[#3B82F6]" />
        </div>
      </div>
      <div className="w-full overflow-hidden text-nowrap">
        <div>
          {loading
            ? 'Loading notification...'
            : latest?.message || 'No new notifications'}
        </div>
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className="w-fit rounded-full bg-[#DBEAFE] p-2"
      >
        <ChevronRight className="w-6 h-6 text-[#3B82F6]" />
      </button>
      <NotificationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        notifications={notifications}
        setNotifications={setNotifications}
      />
    </div>
  );
};

export default SeederNotification;
