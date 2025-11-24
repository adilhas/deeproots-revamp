export default function CountdownTimer() {
  // const [timeLeft, setTimeLeft] = useState({
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 0,
  // });

  // useEffect(() => {
  //   // start date (16 Oct 2025)
  //   const startDate = new Date('2025-10-16T00:00:00');
  //   // Target = start date + 60 days
  //   const targetDate = new Date(startDate.getTime() + 60 * 24 * 60 * 60 * 1000);

  //   const updateCountdown = () => {
  //     const now = new Date();
  //     const difference = targetDate.getTime() - now.getTime();

  //     if (difference <= 0) {
  //       setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  //       return;
  //     }

  //     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor(
  //       (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  //     setTimeLeft({ days, hours, minutes, seconds });
  //   };

  //   updateCountdown();
  //   const interval = setInterval(updateCountdown, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  // const timeUnits = [
  //   { label: 'DAYS', value: timeLeft.days },
  //   { label: 'HR', value: timeLeft.hours.toString().padStart(2, '0') },
  //   { label: 'MIN', value: timeLeft.minutes.toString().padStart(2, '0') },
  //   // { label: 'SEC', value: timeLeft.seconds.toString().padStart(2, '0') },
  // ];

  const timeUnits = [
    { label: 'DAYS', value: '22' },
    { label: 'HR', value: '02' },
    { label: 'MIN', value: '26' },
    // { label: 'SEC', value: timeLeft.seconds.toString().padStart(2, '0') },
  ];

  return (
    <div className="w-fit">
      <div className="text-xs w-fit justify-center text-center mx-auto text-[#696969] dark-text-white font-semibold">
        Launching On
      </div>
      <div className="flex justify-between gap-1 items-center flex-nowrap">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex flex-row items-end">
            <div className="flex flex-col items-center">
              <span className="flex flex-col justify-center items-center">
                {/* <div className="text-xs w-fit justify-center text-center mx-auto text-[#696969] dark-text-white font-semibold">
                  {unit.label}
                </div> */}
                <div className="w-fit text-2xl mx-auto text-center font-bold dark:text-[#8F8F8F] text-black">
                  {unit.value}
                </div>
              </span>
            </div>
            {index < 2 && (
              <span className="mx-1 text-2xl select-none dark:text-[#8F8F8F] text-black">
                |
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
