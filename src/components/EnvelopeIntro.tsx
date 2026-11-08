import React from 'react';
import { coupleData } from '../data/weddingData';

interface EnvelopeIntroProps {
  isOpen: boolean;
  onOpen: () => void;
  onSkip: () => void;
}

export const EnvelopeIntro: React.FC<EnvelopeIntroProps> = ({ isOpen, onOpen, onSkip }) => {
  if (isOpen) return null;

  return (
    <div
      id="envelopeOverlay"
      className="fixed inset-0 bg-[#230206]/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4 transition-all duration-700"
    >
      <div className="max-w-md w-full text-center">
        <div className="mb-4">
          <span className="text-4xl animate-bounce inline-block">🕉️</span>
          <p className="font-yatra text-gold text-lg mt-1 tracking-widest">॥ શ્રી ગણેશાય નમઃ ॥</p>
          <h2 className="font-yatra text-3xl sm:text-4xl text-amber-200 mt-1">શુભ લગ્ન નિમંત્રણ</h2>
        </div>

        {/* Envelope Card Graphic */}
        <div className="relative mx-auto w-full max-w-sm h-64 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-950 rounded-2xl border-4 border-gold shadow-2xl p-6 flex flex-col justify-between items-center overflow-hidden transition-transform duration-500 hover:scale-105">
          <div className="absolute inset-2 border-2 border-dashed border-gold/40 rounded-xl pointer-events-none"></div>
          <div className="text-xs text-amber-200 tracking-wider">સસ્નેહ આમંત્રણ પત્રિકા</div>

          <div className="my-auto text-center">
            <p className="text-xs text-gold/80 uppercase tracking-widest font-semibold">પરિણય બંધન</p>
            <h3 className="font-yatra text-2xl sm:text-3xl text-gold mt-1">
              {coupleData.groom.prefix} {coupleData.groom.nameGujarati} & {coupleData.bride.prefix} {coupleData.bride.nameGujarati}
            </h3>
            <p className="text-xs text-amber-200 mt-2 font-mono">રવિવાર, ૬ ડિસેમ્બર ૨૦૨૬</p>
          </div>

          {/* Wax Seal / Button */}
          <button
            onClick={onOpen}
            className="relative z-10 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-gold to-amber-500 text-maroon-950 font-bold shadow-xl border-2 border-amber-200 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 group cursor-pointer"
          >
            <span className="text-lg">💌</span>
            <span>કાર્ડ ખોલો (Open Invitation)</span>
          </button>
        </div>

        <p
          className="text-xs text-gold/70 mt-4 cursor-pointer hover:underline"
          onClick={onSkip}
        >
          સીધા કાર્ડ પર જાઓ (Skip to Card) →
        </p>
      </div>
    </div>
  );
};

