import React, { useState, useEffect } from 'react';
import { coupleData } from '../data/weddingData';

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    isCompleted: false
  });

  useEffect(() => {
    const targetDate = new Date(coupleData.weddingDate.isoTimestamp).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft(prev => ({ ...prev, isCompleted: true }));
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
        isCompleted: false
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="countdown-container" className="w-full max-w-4xl bg-maroon-800 text-gold py-2 px-4 rounded-lg border border-gold/30 mb-4 text-center shadow-md">
      <p className="text-xs font-semibold uppercase tracking-wider text-amber-200 mb-1">
        શુભ લગ્ન મુહૂર્ત ગણતરી (૬ ડિસેમ્બર ૨૦૨૬)
      </p>
      {timeLeft.isCompleted ? (
        <p className="font-yatra text-base text-gold">શુભ લગ્ન પ્રસંગ સંપન્ન થયો છે! 🎉</p>
      ) : (
        <div id="countdown" className="flex justify-center items-center gap-2 sm:gap-3 font-mono text-sm sm:text-base font-bold text-white">
          <div className="bg-maroon-900 px-2.5 py-1 rounded border border-gold/30">
            <span>{timeLeft.days}</span> <span className="text-xs font-sans text-gold">દિવસ</span>
          </div>
          :
          <div className="bg-maroon-900 px-2.5 py-1 rounded border border-gold/30">
            <span>{timeLeft.hours}</span> <span className="text-xs font-sans text-gold">કલાક</span>
          </div>
          :
          <div className="bg-maroon-900 px-2.5 py-1 rounded border border-gold/30">
            <span>{timeLeft.minutes}</span> <span className="text-xs font-sans text-gold">મિનિટ</span>
          </div>
          :
          <div className="bg-maroon-900 px-2.5 py-1 rounded border border-gold/30">
            <span>{timeLeft.seconds}</span> <span className="text-xs font-sans text-gold">સેકન્ડ</span>
          </div>
        </div>
      )}
    </div>
  );
};

