import React from 'react';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShareWhatsApp: () => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose, onShareWhatsApp }) => {
  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}`;

  const copyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl).then(() => {
        alert('આમંત્રણ લિંક કોપી થઈ ગઈ છે!');
      });
    } else {
      alert('લિંક કોપી કરી શકાય તેમ નથી.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border-2 border-gold max-w-sm w-full p-6 text-center relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-maroon-800 text-xl font-bold cursor-pointer"
        >
          ✕
        </button>

        <div className="w-12 h-12 mx-auto bg-maroon-800 text-gold rounded-full flex items-center justify-center text-xl border border-gold mb-2">
          <i className="fas fa-qrcode"></i>
        </div>
        <h3 className="font-yatra text-2xl text-maroon-800 mb-1">કાર્ડ QR કોડ</h3>
        <p className="text-xs text-gray-600 mb-4">મોબાઈલમાં જોવા માટે કેમેરાથી સ્કેન કરો</p>

        <div className="bg-amber-50 p-4 rounded-xl border border-gold/40 inline-block mx-auto mb-4 shadow-inner">
          <img
            src={qrUrl}
            alt="Wedding Card QR Code"
            className="w-48 h-48 mx-auto rounded-lg shadow-sm border border-gold/30"
          />
        </div>

        <div className="space-y-2">
          <button
            onClick={copyLink}
            className="w-full py-2 bg-maroon-800 text-gold rounded-lg font-bold text-xs hover:bg-maroon-900 transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <i className="fas fa-copy"></i> આમંત્રણ લિંક કોપી કરો
          </button>
          <button
            onClick={onShareWhatsApp}
            className="w-full py-2 bg-emerald-600 text-white rounded-lg font-bold text-xs hover:bg-emerald-500 transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <i className="fab fa-whatsapp"></i> વોટ્સએપ પર શેર કરો
          </button>
        </div>
      </div>
    </div>
  );
};

