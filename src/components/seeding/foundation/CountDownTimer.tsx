import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 100);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HR', value: timeLeft.hours.toString().padStart(2, '0') },
    { label: 'MIN', value: timeLeft.minutes.toString().padStart(2, '0') },
    { label: 'SEC', value: timeLeft.seconds.toString().padStart(2, '0') },
  ];

  return (
    <div className="w-fit  rounded-2xl  py-1">
      <div className="flex justify-between gap-2 items-center flex-nowrap">
        {timeUnits.map((unit) => (
          <div
            key={unit.label}
            className="flex flex-col items-center min-w-13 sm:min-w-16"
          >
            <span
              className=" flex flex-col justify-center  border border-[#FFFFFF29]  leading-tight px-6 lg:px-8 py-2 rounded-2xl"
              style={{ boxShadow: '0px 3px 8px 0px #000000BD inset' }}
            >
              <div className="w-fit mx-auto text-center text-xl lg:text-3xl md:text-2xl">
                {unit.value}
              </div>
              <div className="text-xs w-fit justify-center text-center mx-auto">
                {unit.label}
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
