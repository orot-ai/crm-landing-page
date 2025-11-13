import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate, className = '' }: CountdownTimerProps) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();

    if (difference > 0) {
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return { hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className={`inline-flex gap-4 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="bg-primary text-white text-3xl font-bold rounded-xl px-4 py-3 min-w-[70px]">
          {formatNumber(timeLeft.hours)}
        </div>
        <span className="text-sm text-neutral-gray-500 mt-2">시간</span>
      </div>
      <div className="flex items-center text-3xl font-bold text-primary">:</div>
      <div className="flex flex-col items-center">
        <div className="bg-primary text-white text-3xl font-bold rounded-xl px-4 py-3 min-w-[70px]">
          {formatNumber(timeLeft.minutes)}
        </div>
        <span className="text-sm text-neutral-gray-500 mt-2">분</span>
      </div>
      <div className="flex items-center text-3xl font-bold text-primary">:</div>
      <div className="flex flex-col items-center">
        <div className="bg-primary text-white text-3xl font-bold rounded-xl px-4 py-3 min-w-[70px]">
          {formatNumber(timeLeft.seconds)}
        </div>
        <span className="text-sm text-neutral-gray-500 mt-2">초</span>
      </div>
    </div>
  );
}
