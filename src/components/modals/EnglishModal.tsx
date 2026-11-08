import React from 'react';
import { coupleData, preWeddingEvents, mainEvents } from '../../data/weddingData';

interface EnglishModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRSVP: () => void;
}

export const EnglishModal: React.FC<EnglishModalProps> = ({ isOpen, onClose, onOpenRSVP }) => {
  if (!isOpen) return null;

  const addToCalendar = () => {
    const title = encodeURIComponent(`Wedding Ceremony - ${coupleData.groom.nameEnglish} & ${coupleData.bride.nameEnglish}`);
    const details = encodeURIComponent('Main Venue: Nikol Community Hall, New India Colony, Nava Naroda, Ahmedabad');
    const location = encodeURIComponent('Nikol Community Hall, Nava Naroda, Ahmedabad');
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261206T053000Z/20261206T120000Z&details=${details}&location=${location}`;
    window.open(gCalUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border-2 border-gold max-w-lg w-full p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto custom-scroll">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-maroon-800 text-xl font-bold cursor-pointer"
        >
          ✕
        </button>

        <div className="text-center border-b border-gray-200 pb-3 mb-4">
          <span className="text-2xl">🕉️</span>
          <p className="text-xs font-bold text-maroon-800 tracking-widest uppercase">|| Shree Ganeshay Namah ||</p>
          <h3 className="font-serif text-2xl text-maroon-900 font-bold mt-1">Wedding Invitation</h3>
          <p className="text-xs text-gray-500">{coupleData.weddingDate.english}</p>
        </div>

        {/* Couple Section */}
        <div className="bg-amber-50 p-4 rounded-xl border border-gold/40 text-center mb-4">
          <p className="text-xs text-maroon-800 font-semibold uppercase tracking-wider mb-1">
            Cordially invite you to celebrate the wedding of
          </p>
          <h4 className="font-serif text-2xl text-maroon-900 font-bold">{coupleData.groom.nameEnglish}</h4>
          <p className="text-xs text-gray-600">{coupleData.groom.parentsEnglish}</p>
          <p className="text-[11px] text-gray-500">{coupleData.groom.nativeEnglish}</p>
          <div className="text-lg my-1 text-gold">💍 & 💍</div>
          <h4 className="font-serif text-2xl text-maroon-900 font-bold">{coupleData.bride.nameEnglish}</h4>
          <p className="text-xs text-gray-600">{coupleData.bride.parentsEnglish}</p>
          <p className="text-[11px] text-gray-500">{coupleData.bride.nativeEnglish}</p>
        </div>

        {/* Key Events */}
        <div className="space-y-3 text-xs mb-4">
          <div className="p-3 bg-white rounded-lg border border-gray-200">
            <p className="font-bold text-maroon-900 text-sm">🌸 {preWeddingEvents[1].titleEnglish} & {preWeddingEvents[3].titleEnglish}</p>
            <p className="text-gray-700">Saturday, Dec 5, 2026 | Morning 8:00 AM & Haldi 4:00 PM</p>
            <p className="text-gray-500 mt-1">Venue: Shree Kutchhi Bhanushali Vadi, Naroda, Ahmedabad</p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-gray-200">
            <p className="font-bold text-maroon-900 text-sm">💃 {mainEvents[0].titleEnglish}</p>
            <p className="text-gray-700">Saturday, Dec 5, 2026 | 9:00 PM onwards</p>
            <p className="text-gray-500 mt-1">Venue: Shakti Chowk, Parshwanath Township, Krishna Nagar, Ahmedabad</p>
          </div>
          <div className="p-3 bg-amber-100/60 rounded-lg border border-gold">
            <p className="font-bold text-maroon-900 text-sm">🏰 {mainEvents[2].titleEnglish}</p>
            <p className="text-maroon-900 font-semibold">Sunday, Dec 6, 2026 | 11:00 AM (Lunch: 12:30 PM)</p>
            <p className="text-gray-700 mt-1">Venue: Nikol Community Hall, Amar Kunj Society, New India Colony, Nava Naroda, Ahmedabad</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 justify-center pt-2 border-t border-gray-200">
          <a
            href="https://maps.google.com/?q=Nikol+Community+Hall+New+India+Colony+Nava+Naroda+Ahmedabad"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-maroon-800 text-gold hover:bg-maroon-900 px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5"
          >
            <i className="fas fa-directions"></i> Google Maps
          </a>
          <button
            onClick={addToCalendar}
            className="bg-gold text-maroon-900 hover:bg-amber-300 px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
          >
            <i className="far fa-calendar-plus"></i> Add to Calendar
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenRSVP();
            }}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
          >
            <i className="fas fa-envelope-open-text"></i> RSVP
          </button>
        </div>
      </div>
    </div>
  );
};

