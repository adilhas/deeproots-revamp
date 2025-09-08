'use client';

import NotificationModal from '@/Shared/NotificationModal';
import { Bell, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import type {
  AnnouncementType,
  // NotificationItemType,
} from '@/types/application';
import { useApplication } from '@/context/ApplicationContext';

const SeederNotification = () => {
  const { application } = useApplication();
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<AnnouncementType[]>([
    {
      id: 'cmf1',
      message: 'Foundation Seat Seeding is now live — secure your seat today.',
      createdAt: '2025-09-08T08:35:29.524Z',
      updatedAt: '2025-09-08T08:35:29.524Z',
    },
    {
      id: 'cmf2',
      message:
        'Only 100 Foundation Seats available! Join the Foundation Circle before allocations close.',
      createdAt: '2025-09-08T08:35:29.524Z',
      updatedAt: '2025-09-08T08:35:29.524Z',
    },
    {
      id: 'cmf3',
      message: 'Pre-Approval in progress — check your dashboard for updates.',
      createdAt: '2025-09-08T08:35:29.524Z',
      updatedAt: '2025-09-08T08:35:29.524Z',
    },
    {
      id: 'cmf4',
      message:
        'Welcome to DeepRoots Foundation — your voice helps shape the future. Together we rise: secure your Foundation Seat and build DeWorld.',
      createdAt: '2025-09-08T08:35:29.524Z',
      updatedAt: '2025-09-08T08:35:29.524Z',
    },
  ]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchNotifications = async () => {
  //     try {
  //       const res = await fetch(`/api/announcement`);
  //       const data = await res.json();
  //       setNotifications((prevState) => [...data, ...prevState]);
  //     } catch (err) {
  //       console.error('Error fetching notifications', err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchNotifications();
  // }, [application?.id]);

  useEffect(() => {
    let didCancel = false;

    const fetchNotifications = async () => {
      try {
        const res = await fetch(`/api/announcement`);
        const data: AnnouncementType[] = await res.json();

        if (!didCancel) {
          setNotifications((prevState) => {
            const all = [...prevState, ...data];
            const unique = all.filter(
              (item, index, self) =>
                index === self.findIndex((n) => n.id === item.id)
            );
            return unique;
          });
        }
      } catch (err) {
        if (!didCancel) {
          console.error('Error fetching notifications', err);
        }
      } finally {
        if (!didCancel) {
          setLoading(false);
        }
      }
    };

    fetchNotifications();

    return () => {
      didCancel = true; // ✅ prevents state updates after unmount
    };
  }, [application?.id]);

  // const unreadedNotification = notifications.filter(
  //   (noti) => noti.isRead === false
  // );

  // const latest = unreadedNotification[0];

  console.log(notifications);

  return (
    <div className="my-5 bg-white p-2 rounded-4xl flex flex-row items-center w-full justify-between gap-2">
      <div className="indicator">
        {notifications.length > 0 && (
          <span className="indicator-item badge badge-error badge-xs text-white translate-y-[-2px]">
            {notifications.length}
          </span>
        )}
        <div className="w-fit rounded-full bg-[#DBEAFE] p-2">
          <Bell className="w-6 h-6 text-[#3B82F6]" />
        </div>
      </div>
      <div className="w-full marquee-wrapper h-[30px]">
        {loading ? (
          <div>Loading notifications...</div>
        ) : notifications.length > 0 ? (
          <div className="notification-marquee-track text-[#111827] font-medium gap-12">
            {notifications.map((noti, idx) => (
              <div key={noti.id || idx} className="mx-6 flex-shrink-0">
                {noti.message}
              </div>
            ))}
          </div>
        ) : (
          <div>No new notifications</div>
        )}
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
