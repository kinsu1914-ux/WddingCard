import React from 'react';
import { coupleData, snehavadhinFamily } from '../../data/weddingData';

export const WeddingDetailsPage: React.FC = () => {
  return (
    <div id="page-2" className="page-content p-2 sm:p-6 md:p-8 bg-rose-50/40">
      <div className="border-2 border-gold p-2.5 sm:p-6 rounded-xl relative bg-white/60">
        {/* Religious Invocations Header */}
        <div className="text-center space-y-1 mb-3 sm:mb-4 border-b border-gold/40 pb-2.5 sm:pb-3">
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-4 text-xs sm:text-sm font-bold text-maroon-800">
            <span>॥ શ્રી પીઠડમાતાય નમઃ ॥</span>
            <span>॥ શ્રી ગણેશાય નમઃ ॥</span>
            <span>॥ શ્રી ચામુંડામાતાય નમઃ ॥</span>
          </div>
          <p className="text-[11px] sm:text-xs text-amber-900 mt-1 italic px-1">
            સહર્ષ ખુશાલી સાથે જણાવવાનું કે પરમ કૃપાળુ શ્રી પીઠડમાતા ની અસીમ કૃપાથી...
          </p>
        </div>

        {/* Bride & Groom Parentage & Native Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4 my-3 sm:my-6">
          {/* Groom Side */}
          <div className="bg-amber-50 p-3 sm:p-4 rounded-xl border-l-4 border-maroon-800 shadow-sm">
            <span className="text-[10px] sm:text-xs font-bold text-maroon-800 uppercase tracking-widest block mb-1">વર પક્ષ</span>
            <h3 className="font-yatra text-xl sm:text-2xl text-maroon-900">{coupleData.groom.prefix} {coupleData.groom.nameGujarati}</h3>
            <p className="text-xs text-gray-700 mt-1 leading-relaxed">
              {coupleData.groom.parentsGujarati}
            </p>
            <p className="text-xs text-maroon-800 font-semibold mt-1.5 sm:mt-2">
              {coupleData.groom.nativeGujarati}
            </p>
          </div>

          {/* Bride Side */}
          <div className="bg-amber-50 p-3 sm:p-4 rounded-xl border-l-4 border-gold shadow-sm">
            <span className="text-[10px] sm:text-xs font-bold text-maroon-800 uppercase tracking-widest block mb-1">કન્યા પક્ષ</span>
            <h3 className="font-yatra text-xl sm:text-2xl text-maroon-900">{coupleData.bride.prefix} {coupleData.bride.nameGujarati}</h3>
            <p className="text-xs text-gray-700 mt-1 leading-relaxed">
              {coupleData.bride.parentsGujarati}
            </p>
            <p className="text-xs text-maroon-800 font-semibold mt-1.5 sm:mt-2">
              {coupleData.bride.nativeGujarati}
            </p>
          </div>
        </div>

        {/* Subh Lagn Timing Box */}
        <div className="bg-maroon-800 text-gold p-3 sm:p-4 rounded-xl text-center my-3 sm:my-4 border border-gold shadow-md">
          <p className="text-[11px] sm:text-xs font-bold text-amber-200 uppercase tracking-wider mb-1">શુભ લગ્ન સમય</p>
          <p className="text-xs sm:text-sm font-semibold text-white leading-relaxed">
            {coupleData.weddingDate.gujarati} શાસ્ત્રોના મંગલધ્વનિ વચ્ચે અગ્નિ શિખાની સાક્ષીએ સાજન મહાજનના સ્નેહ સથવારે પરિણયના પુનિત પંથે પ્રસ્થાન કરશે...
          </p>
          <p className="text-[11px] sm:text-xs text-amber-200 mt-1.5 sm:mt-2 font-medium">
            બે પરિવારના મધુર મિલનના આ અપૂર્વ અવસરે આપ આપની હાજરીના હસ્તાક્ષર કરવા અવશ્ય પધારશો.
          </p>
        </div>

        {/* Compliments / Snehavadhin Section */}
        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-dashed border-gray-400">
          <h4 className="font-bold text-maroon-800 text-sm mb-3 text-center underline decoration-gold">
            સ્નેહાધિન તથા શુભેચ્છક પરિવાર
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-800">
            <ul className="space-y-1">
              {snehavadhinFamily.column1.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <ul className="space-y-1">
              {snehavadhinFamily.column2.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
              <li className="font-bold text-maroon-800 pt-1">જમાઈ પક્ષ:</li>
              <li>• {snehavadhinFamily.jamaiPaksh}</li>
            </ul>
          </div>

          <p className="text-center text-xs font-bold text-maroon-800 mt-4 italic">
            તથા સમસ્ત હાલારી પરિવારના હરખના તેડા...
          </p>
          <p className="text-center text-xs text-gray-600 mt-1">
            ઢોલ વાગશે શરણાઈ ગૂંજશે, અને જામશે ખુશીઓનો માહોલ, સુરેશ કાકાના લગ્નમાં આવવાનું ચુકતા નહીં, આ છે અમારા બોલ... <strong>{snehavadhinFamily.kids}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

