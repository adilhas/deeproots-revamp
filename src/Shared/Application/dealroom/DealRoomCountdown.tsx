import { useApplication } from '@/context/ApplicationContext';
import React, { useEffect, useState } from 'react';

const DealRoomCountdown = () => {
  const { application } = useApplication();

  const expiryTimestamp = application?.preApprovalUpdatedAt
    ? new Date(application.preApprovalUpdatedAt).getTime() + 24 * 60 * 60 * 1000
    : null;

  const getTimeLeft = () => {
    if (!expiryTimestamp) return { hours: '00', mins: '00', secs: '00' };
    const diff = Math.max(0, expiryTimestamp - Date.now());
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    return {
      hours: String(hours).padStart(2, '0'),
      mins: String(mins).padStart(2, '0'),
      secs: String(secs).padStart(2, '0'),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    if (!expiryTimestamp) {
      setTimeLeft({ hours: '00', mins: '00', secs: '00' });
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [expiryTimestamp]);

  return (
    <div className="mx-auto my-8 bg-white rounded-4xl overflow-hidden border border-[#D4D4D4]">
      <div className="text-center p-4 bg-[#E9E9E9]">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-gradient-from2 to-gradient-to2 w-fit mx-auto bg-clip-text text-transparent">
          Time to Secure Your Seat
        </h1>
      </div>

      <div className=" text-[#525252] mx-auto px-2 py-4">
        <div className="w-fit mx-auto justify-between items-start md:items-center">
          <div className="flex justify-center space-x-4  text-center">
            {[timeLeft.hours, timeLeft.mins, timeLeft.secs].map((val, idx) => (
              <div key={idx}>
                <div className="text-3xl font-bold font-orbitron w-[2.5ch]">
                  {val}
                </div>
                <div className="text-lg">{['Hours', 'Mins', 'Secs'][idx]}</div>
              </div>
            ))}
          </div>
          <div className="text-lg md:text-xl max-w-[700px] mx-auto mt-8 flex flex-col gap-y-2 px-2">
            <h2 className="text-2xl font-semibold">Security Notice</h2>
            <p>This is a private allocation.</p>
            <p>
              Access to this page will automatically expire in 24 hours for
              security purposes. Please complete your payment within the time
              limit.
            </p>
            <p>All information is encrypted and securely processed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealRoomCountdown;
