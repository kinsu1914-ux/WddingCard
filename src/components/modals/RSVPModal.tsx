import React, { useState } from 'react';
import { coupleData, inviterContact } from '../../data/weddingData';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RSVPModal: React.FC<RSVPModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [guestsCount, setGuestsCount] = useState('૧ વ્યક્તિ');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setFullName('');
      setMessage('');
      onClose();
    }, 2500);
  };

  const handleWhatsAppRSVP = () => {
    if (!fullName.trim()) {
      alert('કૃપા કરીને આપનું નામ દાખલ કરો.');
      return;
    }

    const rsvpMsg =
      `🌸 *શુભ વિવાહ આમંત્રણ સ્વીકૃતિ (RSVP)* 🌸\n` +
      `ચિ. ${coupleData.groom.nameGujarati} અને ચિ. ${coupleData.bride.nameGujarati} ના શુભ લગ્ન પ્રસંગે:\n\n` +
      `👤 *અતિથિનું નામ:* ${fullName}\n` +
      `👥 *સભ્યોની સંખ્યા:* ${guestsCount}\n` +
      (message ? `💌 *શુભેચ્છા સંદેશ:* ${message}\n` : '') +
      `\nઅમે અવશ્ય ઉપસ્થિત રહીશું! પરિવારને ખૂબ ખૂબ શુભેચ્છાઓ! 🎉`;

    const phone = `91${inviterContact.phone1}`;
    const waUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(rsvpMsg)}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border-2 border-gold max-w-md w-full p-6 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-maroon-800 text-xl font-bold cursor-pointer"
        >
          ✕
        </button>

        <h3 className="font-yatra text-2xl text-maroon-800 text-center mb-1">આમંત્રણ સ્વીકૃતિ (RSVP)</h3>
        <p className="text-xs text-gray-600 text-center mb-4">મહેરબાની કરીને આપની ઉપસ્થિતિ અંગે જણાવશો</p>

        {isSuccess ? (
          <div className="text-center text-green-700 font-bold py-6">
            ✅ આપનો પ્રતિસાદ અને શુભેચ્છાઓ સફળતાપૂર્વક નોંધાઈ ગઈ છે. ધન્યવાદ!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">આપનું નામ (Full Name)</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="શ્રી / શ્રીમતી..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-maroon-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">સભ્યોની સંખ્યા (No. of Guests)</label>
              <select
                value={guestsCount}
                onChange={(e) => setGuestsCount(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-maroon-800"
              >
                <option value="૧ વ્યક્તિ">૧ વ્યક્તિ</option>
                <option value="૨ વ્યક્તિ">૨ વ્યક્તિ</option>
                <option value="૩ થી ૫ વ્યક્તિ">૩ થી ૫ વ્યક્તિ</option>
                <option value="સમસ્ત પરિવાર">સમસ્ત પરિવાર</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">આપનો શુભેચ્છા સંદેશ (Best Wishes)</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="સુરેશ અને કિન્નરી માટે આપનો મંગળ સંદેશ..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-maroon-800"
              ></textarea>
            </div>

            <div className="space-y-2 pt-1">
              <button
                type="button"
                onClick={handleWhatsAppRSVP}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold transition flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <i className="fab fa-whatsapp text-lg"></i>
                <span>વોટ્સએપ પર RSVP મોકલો</span>
              </button>
              <button
                type="submit"
                className="w-full py-2 bg-maroon-800/90 hover:bg-maroon-900 text-gold rounded-lg font-semibold transition text-xs cursor-pointer"
              >
                અહીં પુષ્ટિ કરો (Confirm on Screen)
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

