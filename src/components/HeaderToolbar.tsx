import React from 'react';

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
  onShareWhatsApp
}) => {
  return (
    <header className="w-full max-w-4xl flex flex-wrap justify-between items-center bg-maroon-900/90 text-gold p-3 rounded-xl border border-gold/40 mb-4 shadow-lg backdrop-blur-md z-40 gap-2">
      <div className="flex items-center gap-2">
        <span className="text-2xl text-gold animate-bounce">🕉️</span>
        <div>
          <h1 className="font-yatra text-lg text-gold leading-tight">ચિ. સુરેશ અને કિન્નરી</h1>
          <p className="text-xs text-amber-200">શુભ વિવાહ આમંત્રણ કાર્ડ</p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm flex-wrap">
        {/* Audio Toggle */}
        <button
          onClick={onToggleAudio}
          className={`px-3 py-1.5 rounded-full border border-gold flex items-center gap-1.5 transition duration-300 shadow-sm ${
            isPlaying ? 'bg-gold text-maroon-950 font-bold' : 'bg-gold/20 hover:bg-gold/40 text-gold'
          }`}
          title="લગ્ન ગીત (વેળા મિલનની - જીગરદાન ગઢવી) ચાલુ/બંધ કરો"
        >
          <i className={`fas ${isPlaying ? 'fa-volume-up animate-pulse' : 'fa-music'}`}></i>
          <span className="hidden sm:inline">{isPlaying ? 'ગીત બંધ કરો' : 'વેળા મિલનની'}</span>
        </button>

        {/* Petals Toggle */}
        <button
          onClick={onTogglePetals}
          className={`px-3 py-1.5 rounded-full border border-gold flex items-center gap-1.5 transition duration-300 shadow-sm ${
            petalsActive ? 'bg-gold/30 text-amber-200' : 'bg-gold/10 text-gold/60'
          }`}
          title="પુષ્પવૃષ્ટિ ચાલુ/બંધ કરો"
        >
          <i className="fas fa-spa"></i>
          <span className="hidden sm:inline">પુષ્પવૃષ્ટિ</span>
        </button>

        {/* Envelope Reopen */}
        <button
          onClick={onOpenEnvelope}
          className="px-2.5 sm:px-3 py-1.5 rounded-full bg-gold/20 hover:bg-gold/40 border border-gold text-gold flex items-center gap-1.5 transition duration-300 shadow-sm"
          title="કવર એન્વલપ જુઓ"
        >
          <i className="fas fa-envelope"></i>
          <span className="hidden md:inline">એન્વલપ</span>
        </button>

        {/* English Summary */}
        <button
          onClick={onOpenEnglishModal}
          className="px-2.5 sm:px-3 py-1.5 rounded-full bg-gold/20 hover:bg-gold/40 border border-gold text-gold flex items-center gap-1.5 transition duration-300 shadow-sm"
          title="View Summary in English"
        >
          <i className="fas fa-language"></i>
          <span className="hidden md:inline">English</span>
        </button>

        {/* QR Code */}
        <button
          onClick={onOpenQRModal}
          className="px-2.5 sm:px-3 py-1.5 rounded-full bg-gold/20 hover:bg-gold/40 border border-gold text-gold flex items-center gap-1.5 transition duration-300 shadow-sm"
          title="સ્કેન QR કોડ"
        >
          <i className="fas fa-qrcode"></i>
          <span className="hidden lg:inline">QR</span>
        </button>

        {/* WhatsApp Share */}
        <button
          onClick={onShareWhatsApp}
          className="px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center gap-1.5 transition duration-300 shadow-md"
          title="વોટ્સએપ પર કાર્ડ મોકલો"
        >
          <i className="fab fa-whatsapp text-base"></i>
          <span className="hidden md:inline">શેર</span>
        </button>

        {/* Print / PDF */}
        <button
          onClick={() => window.print()}
          className="px-2.5 sm:px-3 py-1.5 rounded-full bg-gold/20 hover:bg-gold/40 border border-gold text-gold flex items-center gap-1.5 transition duration-300 shadow-sm"
          title="કાર્ડ પ્રિન્ટ અથવા PDF સાચવો"
        >
          <i className="fas fa-print"></i>
          <span className="hidden lg:inline">પ્રિન્ટ/PDF</span>
        </button>

        {/* RSVP Button */}
        <button
          onClick={onOpenRSVPModal}
          className="px-3.5 py-1.5 rounded-full bg-gold text-maroon-900 font-bold hover:bg-amber-300 transition duration-300 shadow-md flex items-center gap-1"
        >
          <i className="fas fa-envelope-open-text"></i>
          <span>RSVP</span>
        </button>
      </div>
    </header>
  );
};

