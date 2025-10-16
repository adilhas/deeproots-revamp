import { AnnouncementType } from '@/types/application';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const MainSiteSeederAnnouncement = () => {
  const [announcements, setAnnouncements] = useState<AnnouncementType[]>([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const res = await axios.get('/api/mainsite-announcement');
      setAnnouncements(res.data);
    } catch (err) {
      console.error('Failed to load announcements:', err);
      toast.error('Failed to load announcements');
    }
  };
  if (announcements.length <= 0) return <div></div>;

  return (
    <div className="relative w-full mx-auto my-10 overflow-hidden bg-white dark:bg-[#303030] py-2 max-w-[800px]">
      <div className="absolute left-0 top-0 h-full w-12 z-10 bg-gradient-to-r from-primary-light dark:from-primary-dark via-transparent to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-12 z-10 bg-gradient-to-l from-primary-light dark:from-primary-dark via-transparent to-transparent pointer-events-none" />

      <div className="marquee-wrapper">
        <div className="marquee-track text-lg font-medium whitespace-nowrap">
          {announcements.map((a) => (
            <React.Fragment key={a.id}>
              <span className="mx-10 ">{a.message}</span>
            </React.Fragment>
          ))}
          {announcements.map((a) => (
            <React.Fragment key={a.id}>
              <span className="mx-10 ">{a.message}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSiteSeederAnnouncement;
