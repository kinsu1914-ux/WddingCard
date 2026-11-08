import React from 'react';

interface CardFrameProps {
  children: React.ReactNode;
}

export const CardFrame: React.FC<CardFrameProps> = ({ children }) => {
  return (
    <main className="w-full max-w-4xl card-frame rounded-2xl overflow-hidden my-auto transition-all duration-500">
      {/* Marigold Decor Header Banner */}
      <div className="h-7 sm:h-8 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 flex justify-between items-center px-2 sm:px-4 relative overflow-hidden border-b-2 border-gold">
        <div className="flex gap-1">
          <span className="text-base sm:text-xl">🌼</span>
          <span className="text-base sm:text-xl">🌸</span>
          <span className="text-base sm:text-xl">🌼</span>
        </div>
        <span className="font-bold text-[10px] sm:text-xs tracking-wider sm:tracking-widest text-maroon-900 uppercase font-serif">
          || શ્રી ગણેશાય નમઃ ||
        </span>
        <div className="flex gap-1">
          <span className="text-base sm:text-xl">🌼</span>
          <span className="text-base sm:text-xl">🌸</span>
          <span className="text-base sm:text-xl">🌼</span>
        </div>
      </div>

      {children}
    </main>
  );
};

