'use client';

import React from 'react';
import { X } from 'lucide-react';
import { AnnouncementType } from '@/types/application';
import { formatDistanceToNow } from 'date-fns';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: AnnouncementType[];
  setNotifications: React.Dispatch<React.SetStateAction<AnnouncementType[]>>;
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  isOpen,
  onClose,
  notifications,
  // setNotifications,
}) => {
  if (!isOpen) return null;
  // const markAsRead = async (id: string) => {
  //   try {
  //     await fetch('/api/notifications/read', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ id }),
  //     });

  //     setNotifications((prev) =>
  //       prev.map((notif) =>
  //         notif.id === id ? { ...notif, isRead: true } : notif
  //       )
  //     );
  //   } catch (err) {
  //     console.error('Failed to mark notification as read', err);
  //   }
  // };

  return (
    <div className="fixed inset-0 px-4 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[707px] h-[60vh] overflow-y-auto  p-6 relative">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
            <svg
              className="w-3.5 h-3.5 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a6 6 0 00-6 6v2.586l-.707.707A1 1 0 004 13h12a1 1 0 00.707-1.707L16 10.586V8a6 6 0 00-6-6zm0 16a2 2 0 001.995-1.85L12 16H8a2 2 0 001.85 1.995L10 18z" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-gray-800">Notification</h2>
        </div>

        <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
          {notifications.length === 0 ? (
            <div className="text-center">No Notifications</div>
          ) : (
            notifications &&
            notifications.map((notif: AnnouncementType, index) => (
              <div
                key={index}
                className="flex justify-between items-start cursor-pointer"
                // onClick={() => markAsRead(notif.id)}
              >
                <div className="flex items-start gap-2">
                  {/* <span
                    className={`w-2.5 h-2.5 rounded-full mt-1 ${
                      notif.isRead ? 'bg-gray-300' : 'bg-blue-600'
                    }`}
                  /> */}
                  <div>
                    {/* <h3 className={`text-sm font-semibold `}>{notif.message}</h3> */}
                    <p className="text-xs text-gray-500 mt-1 leading-snug">
                      {notif.message}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {formatDistanceToNow(new Date(notif.updatedAt), {
                    addSuffix: true,
                  })}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
