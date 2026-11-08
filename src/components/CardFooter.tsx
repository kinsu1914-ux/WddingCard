import React from 'react';

interface CardFooterProps {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  onShareWhatsApp: () => void;
  onShareInvite: () => void;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
  onShareWhatsApp,
  onShareInvite,
}) => {
  return (
    <footer className="bg-amber-100 p-2 sm:p-4 border-t border-gold flex flex-wrap justify-between items-center text-xs text-maroon-900 gap-1.5 sm:gap-2">
      <div className="flex items-center gap-1.5 sm:gap-2">
        <span className="font-bold text-[11px] sm:text-xs">પેજ:</span>
        <button
          onClick={onPrevPage}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-maroon-800 text-gold flex items-center justify-center hover:bg-maroon-900 shadow-sm"
          title="પાછળનું પેજ"
        >
          <i className="fas fa-arrow-left text-xs"></i>
        </button>
        <span id="pageIndicator" className="font-bold text-xs sm:text-sm px-1">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={onNextPage}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-maroon-800 text-gold flex items-center justify-center hover:bg-maroon-900 shadow-sm"
          title="આગળનું પેજ"
        >
          <i className="fas fa-arrow-right text-xs"></i>
        </button>
        <span className="text-[10px] sm:text-[11px] text-maroon-700/80 italic hidden md:inline ml-2">
          💡 મોબાઇલમાં પેજ બદલવા ડાબે/જમણે સ્વાઇપ કરો
        </span>
      </div>

      <div className="flex items-center gap-1 sm:gap-2">
        <button
          onClick={onShareWhatsApp}
          className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md font-semibold transition flex items-center gap-1 shadow-sm text-[11px] sm:text-xs"
          title="વોટ્સએપ શેર"
        >
          <i className="fab fa-whatsapp"></i> <span className="hidden sm:inline">વોટ્સએપ</span>
        </button>
        <button
          onClick={onShareInvite}
          className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-maroon-800 hover:bg-maroon-900 text-gold rounded-md font-semibold transition flex items-center gap-1 shadow-sm text-[11px] sm:text-xs"
          title="લિંક કોપી / શેર"
        >
          <i className="fas fa-share-alt"></i> <span className="hidden sm:inline">શેર કરો</span>
        </button>
        <button
          onClick={() => window.print()}
          className="px-2 sm:px-2.5 py-1 sm:py-1.5 bg-amber-200/80 hover:bg-amber-300 text-maroon-900 border border-maroon-300 rounded-md font-semibold transition flex items-center gap-1 text-[11px] sm:text-xs"
          title="પ્રિન્ટ / PDF"
        >
          <i className="fas fa-print"></i>
        </button>
      </div>
    </footer>
  );
};

