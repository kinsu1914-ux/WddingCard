import React from 'react';
import { coupleData, inviterContact } from '../../data/weddingData';
import ganeshaCoverImg from '/ganesha_cover.png?url';

export const CoverPage: React.FC = () => {
  return (
    <div id="page-1" className="page-content p-2 sm:p-6 md:p-8 bg-amber-50/40">
      {/* Decorative Border Frame Inside */}
      <div className="border-2 border-dashed border-maroon-800/40 p-2.5 sm:p-6 rounded-xl relative">
        {/* Ganesha Symbol & Header */}
        <div className="text-center my-1 sm:my-2">
          <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto flex items-center justify-center mb-1 sm:mb-2 drop-shadow-md">
            <img 
              src={ganeshaCoverImg} 
              alt="Lord Ganesha" 
              className="w-full h-full object-contain"
              decoding="async"
            />
          </div>
          <p className="text-[10px] sm:text-xs text-maroon-800 font-bold tracking-widest uppercase">
            || શ્રી ગણેશાય નમઃ ||
          </p>

          {/* Decorative Lotus Motif */}
          <div className="text-amber-600 text-xl sm:text-2xl my-0.5 sm:my-1">🪷</div>

          {/* Shubh Vivah Calligraphy Style */}
          <h2 className="font-yatra text-3xl sm:text-6xl text-maroon-800 my-0.5 sm:my-2 drop-shadow-sm leading-tight">
            શુભ વિવાહ
          </h2>

          <div className="flex items-center justify-center gap-2 text-maroon-900 font-semibold my-1 sm:my-2">
            <span className="h-0.5 w-8 sm:w-12 bg-gold"></span>
            <span className="text-xs sm:text-lg text-maroon-800 font-bold">રવિવાર તા. ૬-૧૨-૨૦૨૬</span>
            <span className="h-0.5 w-8 sm:w-12 bg-gold"></span>
          </div>
        </div>

        {/* Bride & Groom Highlight */}
        <div className="my-3 sm:my-6 text-center bg-maroon-900 text-gold p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gold shadow-lg relative overflow-hidden">
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-gold/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gold/20 rounded-full blur-xl"></div>

          <p className="text-amber-200 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">લગ્ન ગ્રંથિથી જોડાશે</p>
          <div className="flex justify-center items-center gap-2 sm:gap-6">
            <div className="text-center">
              <span className="text-[10px] sm:text-xs text-amber-300 font-bold block">{coupleData.groom.prefix}</span>
              <span className="font-yatra text-2xl sm:text-4xl text-white">{coupleData.groom.nameGujarati}</span>
            </div>
            <div className="text-2xl sm:text-3xl text-gold animate-pulse mx-1">👩‍❤️‍👨</div>
            <div className="text-center">
              <span className="text-[10px] sm:text-xs text-amber-300 font-bold block">{coupleData.bride.prefix}</span>
              <span className="font-yatra text-2xl sm:text-4xl text-white">{coupleData.bride.nameGujarati}</span>
            </div>
          </div>
        </div>

        {/* Inviter Card Info Bottom Left */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 items-end mt-3 sm:mt-6">
          <div className="bg-white/90 p-3 sm:p-4 rounded-xl border border-maroon-800/20 shadow-sm">
            <p className="text-[11px] sm:text-xs text-maroon-800 font-bold tracking-wider mb-1.5 uppercase border-b border-maroon-200 pb-1">
              આમંત્રણ પત્રિકા
            </p>
            <div className="space-y-1 text-xs sm:text-sm text-gray-800">
              <p className="flex items-center gap-2">
                <span className="text-maroon-800 font-semibold">શ્રી/શ્રીમતી:</span>
                <span className="border-b border-maroon-300 flex-grow text-gray-400 italic">આપનું હાર્દિક સ્વાગત છે</span>
              </p>
            </div>
            <div className="mt-2.5 sm:mt-4 pt-2 border-t border-dashed border-gray-300">
              <p className="text-[10px] sm:text-xs font-bold text-maroon-800">{inviterContact.relation}:</p>
              <p className="font-bold text-gray-900 text-xs sm:text-sm">{inviterContact.name}</p>
              <p className="text-[11px] sm:text-xs text-gray-700 leading-relaxed mt-1">
                {inviterContact.address}
              </p>
              <div className="text-[11px] sm:text-xs font-semibold text-maroon-800 mt-2 flex flex-wrap items-center gap-1.5">
                <span><i className="fas fa-phone-alt mr-1"></i> સંપર્ક:</span>
                <a
                  href={`tel:${inviterContact.phone1}`}
                  className="bg-amber-100 hover:bg-amber-200 text-maroon-900 px-2 py-0.5 rounded border border-maroon-300 font-bold transition flex items-center gap-1"
                  title="કૉલ કરો"
                >
                  <i className="fas fa-phone text-[9px]"></i> ૯૮૧૯૪૦૮૨૯૫
                </a>
                {inviterContact.phone2 && (
                  <a
                    href={`tel:${inviterContact.phone2}`}
                    className="bg-amber-100 hover:bg-amber-200 text-maroon-900 px-2 py-0.5 rounded border border-maroon-300 font-bold transition flex items-center gap-1"
                    title="કૉલ કરો"
                  >
                    <i className="fas fa-phone text-[9px]"></i> ૯૭૬૯૩૬૮૬૦૯
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Illustration Frame */}
          <div className="text-center bg-amber-100/50 p-2.5 sm:p-4 rounded-xl border border-gold flex flex-col items-center justify-center">
            <div className="text-3xl sm:text-5xl my-1 sm:my-2">🛕</div>
            <p className="font-yatra text-maroon-800 text-base sm:text-lg">કંકુ પગલાં અને મંગળ ફેરા</p>
            <p className="text-[11px] sm:text-xs text-gray-600">આપની સમક્ષ હાજરી એ જ અમારું પરમ સૌભાગ્ય છે.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
