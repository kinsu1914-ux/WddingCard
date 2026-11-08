import React from 'react';
import { coupleData, inviterContact } from '../../data/weddingData';

export const CoverPage: React.FC = () => {
  return (
    <div id="page-1" className="page-content p-4 sm:p-8 bg-amber-50/40">
      {/* Decorative Border Frame Inside */}
      <div className="border-2 border-dashed border-maroon-800/40 p-4 sm:p-6 rounded-xl relative">
        {/* Ganesha Symbol & Header */}
        <div className="text-center my-2">
          <div className="w-16 h-16 mx-auto bg-maroon-800 text-gold rounded-full flex items-center justify-center text-3xl shadow-md border-2 border-gold mb-2">
            🕉️
          </div>
          <p className="text-xs text-maroon-800 font-bold tracking-widest uppercase">|| શ્રી ગણેશાય નમઃ ||</p>

          {/* Decorative Lotus Motif */}
          <div className="text-amber-600 text-2xl my-1">🪷</div>

          {/* Shubh Vivah Calligraphy Style */}
          <h2 className="font-yatra text-4xl sm:text-6xl text-maroon-800 my-2 drop-shadow-sm">
            શુભ વિવાહ
          </h2>

          <div className="flex items-center justify-center gap-2 text-maroon-900 font-semibold my-2">
            <span className="h-0.5 w-12 bg-gold"></span>
            <span className="text-sm sm:text-lg text-maroon-800 font-bold">રવિવાર તા. ૬-૧૨-૨૦૨૬</span>
            <span className="h-0.5 w-12 bg-gold"></span>
          </div>
        </div>

        {/* Bride & Groom Highlight */}
        <div className="my-8 text-center bg-maroon-900 text-gold p-6 rounded-2xl border-2 border-gold shadow-xl relative overflow-hidden">
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-gold/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gold/20 rounded-full blur-xl"></div>

          <p className="text-amber-200 text-sm font-semibold mb-2">લગ્ન ગ્રંથિથી જોડાશે</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6">
            <div className="text-center">
              <span className="text-xs text-amber-300 font-bold block">{coupleData.groom.prefix}</span>
              <span className="font-yatra text-3xl sm:text-4xl text-white">{coupleData.groom.nameGujarati}</span>
            </div>
            <div className="text-3xl text-gold animate-pulse">👩‍❤️‍👨</div>
            <div className="text-center">
              <span className="text-xs text-amber-300 font-bold block">{coupleData.bride.prefix}</span>
              <span className="font-yatra text-3xl sm:text-4xl text-white">{coupleData.bride.nameGujarati}</span>
            </div>
          </div>
        </div>

        {/* Inviter Card Info Bottom Left */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end mt-6">
          <div className="bg-white/80 p-4 rounded-xl border border-maroon-800/20 shadow-sm">
            <p className="text-xs text-maroon-800 font-bold tracking-wider mb-2 uppercase border-b border-maroon-200 pb-1">
              આમંત્રણ પત્રિકા
            </p>
            <div className="space-y-1 text-sm text-gray-800">
              <p className="flex items-center gap-2">
                <span className="text-maroon-800 font-semibold">શ્રી/શ્રીમતી:</span>
                <span className="border-b border-maroon-300 flex-grow text-gray-400 italic">આપનું હાર્દિક સ્વાગત છે</span>
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-dashed border-gray-300">
              <p className="text-xs font-bold text-maroon-800">{inviterContact.relation}:</p>
              <p className="font-bold text-gray-900 text-sm">{inviterContact.name}</p>
              <p className="text-xs text-gray-700 leading-relaxed mt-1">
                {inviterContact.address}
              </p>
              <div className="text-xs font-semibold text-maroon-800 mt-2 flex flex-wrap items-center gap-1.5">
                <span><i className="fas fa-phone-alt mr-1"></i> સંપર્ક:</span>
                <a
                  href={`tel:${inviterContact.phone1}`}
                  className="bg-amber-100 hover:bg-amber-200 text-maroon-900 px-2 py-0.5 rounded border border-maroon-300 font-bold transition flex items-center gap-1"
                  title="કૉલ કરો"
                >
                  <i className="fas fa-phone text-[10px]"></i> ૯૮૧૯૪૦૮૨૯૫
                </a>
                {inviterContact.phone2 && (
                  <a
                    href={`tel:${inviterContact.phone2}`}
                    className="bg-amber-100 hover:bg-amber-200 text-maroon-900 px-2 py-0.5 rounded border border-maroon-300 font-bold transition flex items-center gap-1"
                    title="કૉલ કરો"
                  >
                    <i className="fas fa-phone text-[10px]"></i> ૯૭૬૯૩૬૮૯૦૯
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Illustration Frame */}
          <div className="text-center bg-amber-100/50 p-4 rounded-xl border border-gold flex flex-col items-center justify-center">
            <div className="text-5xl my-2">🛕</div>
            <p className="font-yatra text-maroon-800 text-lg">કંકુ પગલાં અને મંગળ ફેરા</p>
            <p className="text-xs text-gray-600">આપની સમક્ષ હાજરી એ જ અમારું પરમ સૌભાગ્ય છે.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

