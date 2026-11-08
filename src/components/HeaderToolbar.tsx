import React, { useState, useRef, useEffect } from 'react';

interface HeaderToolbarProps {
  isPlaying: boolean;
  onToggleAudio: () => void;
  petalsActive: boolean;
  onTogglePetals: () => void;
  onOpenEnvelope: () => void;
  onOpenEnglishModal: () => void;
  onOpenQRModal: () => void;
  onOpenRSVPModal: () => void;
  onShareWhatsApp: () => void;
}

export const HeaderToolbar: React.FC<HeaderToolbarProps> = ({
  isPlaying,
  onToggleAudio,
  petalsActive,
  onTogglePetals,
  onOpenEnvelope,
  onOpenEnglishModal,
  onOpenQRModal,
  onOpenRSVPModal,
  onShareWhatsApp,
}) => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMoreMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full max-w-4xl bg-maroon-900/95 text-gold px-2.5 py-1.5 sm:p-3 rounded-xl border border-gold/40 mb-2 sm:mb-3 shadow-lg backdrop-blur-md z-40">
      <div className="flex items-center justify-between gap-1.5 sm:gap-2">
        {/* Title & Couple Names */}
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="text-xl sm:text-2xl text-gold animate-bounce flex-shrink-0">🕉️</span>
          <div className="min-w-0">
            <h1 className="font-yatra text-sm sm:text-lg text-gold leading-tight truncate">
              સુરેશ & કિન્નરી
            </h1>
            <p className="text-[10px] sm:text-xs text-amber-200/90 leading-none truncate hidden xs:block">
              શુભ વિવાહ આમંત્રણ
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1 sm:gap-1.5 text-xs flex-shrink-0">
          {/* Audio Toggle */}
          <button
            onClick={onToggleAudio}
            className={`w-7 h-7 sm:w-auto sm:px-3 sm:py-1.5 rounded-full border border-gold flex items-center justify-center sm:gap-1.5 transition duration-300 shadow-sm ${
              isPlaying
                ? 'bg-gold text-maroon-950 font-bold'
                : 'bg-gold/20 hover:bg-gold/40 text-gold'
            }`}
            title="લગ્ન ગીત (વેળા મિલનની) ચાલુ/બંધ કરો"
          >
            <i className={`fas ${isPlaying ? 'fa-volume-up text-xs sm:text-sm animate-pulse' : 'fa-music text-xs'}`}></i>
            <span className="hidden md:inline">{isPlaying ? 'ગીત બંધ કરો' : 'વેળા મિલનની'}</span>
          </button>

          {/* WhatsApp Share */}
          <button
            onClick={onShareWhatsApp}
            className="w-7 h-7 sm:w-auto sm:px-3 sm:py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center justify-center sm:gap-1.5 transition duration-300 shadow-md"
            title="વોટ્સએપ પર આમંત્રણ કાર્ડ મોકલો"
          >
            <i className="fab fa-whatsapp text-sm"></i>
            <span className="hidden md:inline">શેર</span>
          </button>

          {/* RSVP Button */}
          <button
            onClick={onOpenRSVPModal}
            className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-gold text-maroon-950 font-bold hover:bg-amber-300 transition duration-300 shadow-md flex items-center gap-1 text-[11px] sm:text-xs"
          >
            <i className="fas fa-envelope-open-text text-[10px] sm:text-xs"></i>
            <span>RSVP</span>
          </button>

          {/* Desktop-only secondary buttons */}
          <div className="hidden sm:flex items-center gap-1.5">
            {/* Petals Toggle */}
            <button
              onClick={onTogglePetals}
              className={`px-2.5 py-1.5 rounded-full border border-gold flex items-center gap-1 transition duration-300 ${
                petalsActive ? 'bg-gold/30 text-amber-200' : 'bg-gold/10 text-gold/60'
              }`}
              title="પુષ્પવૃષ્ટિ ચાલુ/બંધ કરો"
            >
              <i className="fas fa-spa"></i>
              <span className="hidden lg:inline">પુષ્પવૃષ્ટિ</span>
            </button>

            {/* Envelope Reopen */}
            <button
              onClick={onOpenEnvelope}
              className="px-2.5 py-1.5 rounded-full bg-gold/20 hover:bg-gold/40 border border-gold text-gold flex items-center gap-1 transition duration-300"
              title="કવર એન્વલપ જુઓ"
            >
              <i className="fas fa-envelope"></i>
              <span className="hidden lg:inline">એન્વલપ</span>
            </button>

            {/* English Summary */}
            <button
              onClick={onOpenEnglishModal}
              className="px-2.5 py-1.5 rounded-full bg-gold/20 hover:bg-gold/40 border border-gold text-gold flex items-center gap-1 transition duration-300"
              title="View in English"
            >
              <i className="fas fa-language"></i>
              <span className="hidden lg:inline">English</span>
            </button>

            {/* QR Code */}
            <button
              onClick={onOpenQRModal}
              className="px-2.5 py-1.5 rounded-full bg-gold/20 hover:bg-gold/40 border border-gold text-gold flex items-center gap-1 transition duration-300"
              title="સ્કેન QR કોડ"
            >
              <i className="fas fa-qrcode"></i>
            </button>

            {/* Print / Save as PDF */}
            <button
              onClick={() => window.print()}
              className="px-2.5 py-1.5 rounded-full bg-gold/20 hover:bg-gold/40 border border-gold text-gold flex items-center gap-1 transition duration-300"
              title="કાર્ડ પ્રિન્ટ અથવા PDF સાચવો"
            >
              <i className="fas fa-print"></i>
            </button>
          </div>

          {/* Mobile "More" dropdown for secondary options */}
          <div className="relative sm:hidden" ref={menuRef}>
            <button
              onClick={() => setShowMoreMenu(!showMoreMenu)}
              className="w-7 h-7 rounded-full bg-gold/20 border border-gold/50 text-gold flex items-center justify-center hover:bg-gold/40 transition"
              title="વધુ વિકલ્પો"
            >
              <i className="fas fa-ellipsis-v text-xs"></i>
            </button>

            {showMoreMenu && (
              <div className="absolute right-0 top-9 w-40 bg-maroon-950/95 border border-gold/60 rounded-xl shadow-2xl py-1 text-xs text-gold flex flex-col z-50 backdrop-blur-md">
                <button
                  onClick={() => {
                    onOpenEnglishModal();
                    setShowMoreMenu(false);
                  }}
                  className="px-3 py-1.5 hover:bg-gold/20 text-left flex items-center gap-2"
                >
                  <i className="fas fa-language text-amber-300 w-4"></i> English
                </button>
                <button
                  onClick={() => {
                    onOpenQRModal();
                    setShowMoreMenu(false);
                  }}
                  className="px-3 py-1.5 hover:bg-gold/20 text-left flex items-center gap-2"
                >
                  <i className="fas fa-qrcode text-amber-300 w-4"></i> QR કોડ
                </button>
                <button
                  onClick={() => {
                    onOpenEnvelope();
                    setShowMoreMenu(false);
                  }}
                  className="px-3 py-1.5 hover:bg-gold/20 text-left flex items-center gap-2"
                >
                  <i className="fas fa-envelope text-amber-300 w-4"></i> એન્વલપ
                </button>
                <button
                  onClick={() => {
                    onTogglePetals();
                    setShowMoreMenu(false);
                  }}
                  className="px-3 py-1.5 hover:bg-gold/20 text-left flex items-center gap-2"
                >
                  <i className="fas fa-spa text-amber-300 w-4"></i>
                  {petalsActive ? 'પુષ્પો બંધ' : 'પુષ્પો ચાલુ'}
                </button>
                <button
                  onClick={() => {
                    setShowMoreMenu(false);
                    window.print();
                  }}
                  className="px-3 py-1.5 hover:bg-gold/20 text-left flex items-center gap-2 border-t border-gold/20 mt-1"
                >
                  <i className="fas fa-print text-amber-300 w-4"></i> પ્રિન્ટ / PDF
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
