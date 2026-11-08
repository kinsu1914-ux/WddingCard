import React from 'react';
import { mainEvents, coupleData } from '../../data/weddingData';

interface MainEventVenuePageProps {
  onShareWhatsApp: () => void;
}

export const MainEventVenuePage: React.FC<MainEventVenuePageProps> = ({ onShareWhatsApp }) => {
  const addToCalendar = () => {
    const title = encodeURIComponent(`શુભ વિવાહ - ${coupleData.groom.nameGujarati} અને ${coupleData.bride.nameGujarati}`);
    const details = encodeURIComponent('લગ્ન સ્થળ: નિકોલ કોમ્યુનિટી હોલ, ન્યુ ઈન્ડીયા કોલોની, નવા નરોડા, અમદાવાદ');
    const location = encodeURIComponent('Nikol Community Hall, Nava Naroda, Ahmedabad');
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261206T053000Z/20261206T120000Z&details=${details}&location=${location}`;
    window.open(gCalUrl, '_blank');
  };

  return (
    <div id="page-4" className="page-content p-2 sm:p-6 md:p-8 bg-rose-50/30">
      <div className="border-2 border-gold p-2.5 sm:p-6 rounded-xl relative">
        {/* Heading */}
        <div className="text-center mb-3 sm:mb-6">
          <span className="text-[10px] sm:text-xs text-maroon-800 font-bold uppercase tracking-widest block">
            મુખ્ય કાર્યક્રમ વિગત (ભાગ-૨)
          </span>
          <h2 className="font-yatra text-xl sm:text-3xl text-maroon-800 mt-1">
            રાસ ગરબા અને લગ્ન ઉત્સવ
          </h2>
          <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-gold mx-auto mt-1 sm:mt-2 rounded-full"></div>
        </div>

        {/* Key Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
          {mainEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white p-3 sm:p-4 rounded-xl border border-gold/40 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <h4 className="font-yatra text-lg sm:text-xl text-maroon-900">{evt.titleGujarati}</h4>
                  <span className="text-xl sm:text-2xl">{evt.icon}</span>
                </div>
                <p className="text-xs text-gray-700 font-semibold">
                  {evt.dateGujarati} | {evt.timeGujarati}
                </p>
                <p className="text-[11px] sm:text-xs text-gray-600 mt-1 sm:mt-2">
                  <i className="fas fa-map-pin text-maroon-800 mr-1"></i> {evt.venueGujarati}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Wedding Venue Box */}
        <div className="mt-4 sm:mt-6 bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 text-white p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border-2 border-gold text-center shadow-xl">
          <span className="text-[10px] sm:text-xs text-amber-300 font-bold tracking-widest uppercase block mb-1">
            🏰 લગ્ન સ્થળ (Main Wedding Venue)
          </span>
          <h3 className="font-yatra text-xl sm:text-2xl text-gold mb-1">નિકોલ કોમ્યુનિટી હોલ</h3>
          <p className="text-xs sm:text-sm text-gray-200">
            અમરકુંજ સોસાયટી, ન્યુ ઈન્ડીયા કોલોની, નવા નરોડા, અમદાવાદ
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-2.5 sm:gap-3">
            <a
              href="https://maps.google.com/?q=Nikol+Community+Hall+New+India+Colony+Nava+Naroda+Ahmedabad"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-maroon-900 hover:bg-amber-300 px-5 py-2 rounded-full text-xs font-bold shadow flex items-center gap-2 transition"
            >
              <i className="fas fa-directions text-base"></i> Google Maps પર નેવિગેટ કરો
            </a>
            <button
              onClick={addToCalendar}
              className="bg-white/10 hover:bg-white/20 text-gold border border-gold/50 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition"
            >
              <i className="far fa-calendar-plus"></i> કલેન્ડરમાં ઉમેરો
            </button>
            <button
              onClick={onShareWhatsApp}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow flex items-center gap-2 transition"
            >
              <i className="fab fa-whatsapp text-sm"></i> વોટ્સએપ આમંત્રણ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

