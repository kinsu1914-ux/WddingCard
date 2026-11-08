import React from 'react';
import { preWeddingEvents } from '../../data/weddingData';

export const PreWeddingPage: React.FC = () => {
  return (
    <div id="page-3" className="page-content p-4 sm:p-8 bg-amber-50/30">
      <div className="border-2 border-gold p-4 sm:p-6 rounded-xl relative">
        {/* Heading */}
        <div className="text-center mb-6">
          <span className="text-xs text-maroon-800 font-bold uppercase tracking-widest block">
            મંગલ પ્રસંગ વિગત (ભાગ-૧)
          </span>
          <h2 className="font-yatra text-2xl sm:text-3xl text-maroon-800 mt-1">
            સોનેરી અવસરની... રૂપેરી આભા...
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Event Timeline List */}
        <div className="space-y-4">
          {preWeddingEvents.map((evt) => (
            <div
              key={evt.id}
              className={`flex items-center gap-4 p-3 rounded-xl border shadow-sm ${
                evt.id === 'haldi'
                  ? 'bg-yellow-100 border-yellow-400'
                  : 'bg-white border-gold/30'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0 border ${
                  evt.id === 'haldi'
                    ? 'bg-yellow-500 text-maroon-900 border-yellow-600'
                    : evt.id === 'mandavda'
                    ? 'bg-amber-500 text-white border-gold'
                    : evt.id === 'mandva-bhojan'
                    ? 'bg-red-700 text-gold border-gold'
                    : 'bg-maroon-800 text-gold border-gold'
                }`}
              >
                {evt.icon}
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-maroon-900 text-base">{evt.titleGujarati}</h4>
                <p className="text-xs text-gray-700">
                  {evt.dateGujarati} ના રોજ | {evt.timeGujarati}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Venue Card for Page 3 */}
        <div className="mt-6 bg-maroon-900 text-white p-4 rounded-xl border border-gold text-center relative overflow-hidden shadow-lg">
          <span className="text-xs text-gold uppercase tracking-widest font-bold block mb-1">
            વાડી (પ્રસંગ સ્થળ)
          </span>
          <h3 className="font-yatra text-xl text-gold">શ્રી કચ્છી ભાનુશાલી વાડી</h3>
          <p className="text-xs text-amber-100 mt-1 leading-relaxed">
            દહેગામ રોડ, જી.આઈ.ડી.સી., નરોડા, અમદાવાદ
          </p>
          <a
            href="https://maps.google.com/?q=Shree+Kutchhi+Bhanushali+Vadi+Naroda+Ahmedabad"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 bg-gold text-maroon-900 px-4 py-1.5 rounded-full text-xs font-bold hover:bg-amber-300 transition"
          >
            <i className="fas fa-map-marker-alt"></i> મેપ પર જુઓ (Google Maps)
          </a>
        </div>
      </div>
    </div>
  );
};

