import React, { useState, useEffect } from 'react';
import { coupleData } from '../data/weddingData';

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    isCompleted: false,
  });

  useEffect(() => {
    const targetDate = new Date(coupleData.weddingDate.isoTimestamp).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft((prev) => ({ ...prev, isCompleted: true }));
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
        isCompleted: false,
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="countdown-container"
      className="w-full max-w-4xl bg-maroon-800 text-gold py-1.5 px-2 sm:py-2 sm:px-4 rounded-lg border border-gold/30 mb-2 sm:mb-3 text-center shadow-md"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3">
        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-200">
          ⏳ લગ્ન મુહૂર્ત (૬ ડિસેમ્બર ૨૦૨૬):
        </p>

        {timeLeft.isCompleted ? (
          <p className="font-yatra text-xs sm:text-base text-gold">શુભ લગ્ન પ્રસંગ સંપન્ન થયો છે! 🎉</p>
        ) : (
          <div
            id="countdown"
            className="flex justify-center items-center gap-1 sm:gap-2 font-mono text-xs sm:text-base font-bold text-white"
          >
            <div className="bg-maroon-900 px-1.5 sm:px-2 py-0.5 rounded border border-gold/30 flex items-center gap-0.5">
              <span>{timeLeft.days}</span>
              <span className="text-[9px] sm:text-xs font-sans text-gold">દિ</span>
            </div>
            :
            <div className="bg-maroon-900 px-1.5 sm:px-2 py-0.5 rounded border border-gold/30 flex items-center gap-0.5">
              <span>{timeLeft.hours}</span>
              <span className="text-[9px] sm:text-xs font-sans text-gold">ક</span>
            </div>
            :
            <div className="bg-maroon-900 px-1.5 sm:px-2 py-0.5 rounded border border-gold/30 flex items-center gap-0.5">
              <span>{timeLeft.minutes}</span>
              <span className="text-[9px] sm:text-xs font-sans text-gold">મિ</span>
            </div>
            :
            <div className="bg-maroon-900 px-1.5 sm:px-2 py-0.5 rounded border border-gold/30 flex items-center gap-0.5">
              <span>{timeLeft.seconds}</span>
              <span className="text-[9px] sm:text-xs font-sans text-gold">સે</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
