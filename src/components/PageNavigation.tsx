import React from 'react';

interface PageNavigationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const PageNavigation: React.FC<PageNavigationProps> = ({ currentPage, onPageChange }) => {
  const tabs = [
    { id: 1, label: '૧. મુખ્ય પૃષ્ઠ', icon: '📄' },
    { id: 2, label: '૨. શુભ લગ્ન', icon: '💍' },
    { id: 3, label: '૩. મંગલ પ્રસંગ', icon: '🌼' },
    { id: 4, label: '૪. રાસ ગરબા / સ્થળ', icon: '🥁' },
  ];

  return (
    <nav className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 z-40">
      {tabs.map((tab) => {
        const isActive = currentPage === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onPageChange(tab.id)}
            className={`tab-btn py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-md ${
              isActive
                ? 'bg-gold text-maroon-950 font-bold border-2 border-amber-300 scale-102'
                : 'bg-maroon-900 text-gold hover:bg-maroon-800 border border-gold/40'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

