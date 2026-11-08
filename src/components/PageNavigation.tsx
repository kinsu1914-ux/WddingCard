import React from 'react';

interface PageNavigationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const PageNavigation: React.FC<PageNavigationProps> = ({ currentPage, onPageChange }) => {
  const tabs = [
    { id: 1, labelMobile: '૧. પૃષ્ઠ', labelDesktop: '૧. મુખ્ય પૃષ્ઠ', icon: '📄' },
    { id: 2, labelMobile: '૨. લગ્ન', labelDesktop: '૨. શુભ લગ્ન', icon: '💍' },
    { id: 3, labelMobile: '૩. પ્રસંગ', labelDesktop: '૩. મંગલ પ્રસંગ', icon: '🌼' },
    { id: 4, labelMobile: '૪. સ્થળ', labelDesktop: '૪. રાસ ગરબા/સ્થળ', icon: '🥁' },
  ];

  return (
    <nav className="w-full max-w-4xl grid grid-cols-4 gap-1 sm:gap-2 mb-2 sm:mb-3 z-40">
      {tabs.map((tab) => {
        const isActive = currentPage === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onPageChange(tab.id)}
            className={`tab-btn py-1 sm:py-2 px-0.5 sm:px-2 rounded-lg transition-all flex items-center justify-center gap-1 shadow-sm text-center ${
              isActive
                ? 'bg-gold text-maroon-950 font-bold border-2 border-amber-300 scale-102 shadow-md'
                : 'bg-maroon-900/90 text-gold hover:bg-maroon-800 border border-gold/40'
            }`}
          >
            <span className="text-xs sm:text-sm">{tab.icon}</span>
            <span className="text-[10px] xs:text-[11px] sm:text-sm font-semibold truncate">
              <span className="inline sm:hidden">{tab.labelMobile}</span>
              <span className="hidden sm:inline">{tab.labelDesktop}</span>
            </span>
          </button>
        );
      })}
    </nav>
  );
};
