import React, { useState, useRef } from 'react';
import { useShehnaiAudio } from './hooks/useShehnaiAudio';
import { FallingPetals } from './components/FallingPetals';
import { HeaderToolbar } from './components/HeaderToolbar';
import { CountdownTimer } from './components/CountdownTimer';
import { PageNavigation } from './components/PageNavigation';
import { CardFrame } from './components/CardFrame';
import { CardFooter } from './components/CardFooter';
import { EnvelopeIntro } from './components/EnvelopeIntro';
import { CoverPage } from './components/pages/CoverPage';
import { WeddingDetailsPage } from './components/pages/WeddingDetailsPage';
import { PreWeddingPage } from './components/pages/PreWeddingPage';
import { MainEventVenuePage } from './components/pages/MainEventVenuePage';
import { RSVPModal } from './components/modals/RSVPModal';
import { EnglishModal } from './components/modals/EnglishModal';
import { QRCodeModal } from './components/modals/QRCodeModal';
import { coupleData } from './data/weddingData';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [petalsActive, setPetalsActive] = useState<boolean>(true);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState<boolean>(false);
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState<boolean>(false);
  const [isEnglishModalOpen, setIsEnglishModalOpen] = useState<boolean>(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState<boolean>(false);

  const { isPlaying, toggleAudio } = useShehnaiAudio();

  // Mobile Touch Swipe Handling
  const touchStartXRef = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartXRef.current;

    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        // Swiped Left -> Next Page
        nextPage();
      } else {
        // Swiped Right -> Previous Page
        prevPage();
      }
    }
  };

  const totalPages = 4;

  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
    if (!isPlaying) {
      toggleAudio();
    }
  };

  const handleShareWhatsApp = () => {
    const inviteText =
      `🌸 *॥ શ્રી ગણેશાય નમઃ ॥* 🌸\n\n` +
      `*શુભ વિવાહ આમંત્રણ પત્રિકા*\n\n` +
      `પરમ કૃપાળુ પરમાત્માની અસીમ કૃપાથી અમારા સુપુત્ર\n` +
      `*${coupleData.groom.prefix} ${coupleData.groom.nameGujarati}* ના શુભ લગ્ન *${coupleData.bride.prefix} ${coupleData.bride.nameGujarati}* સાથે નિર્ધાર્યા છે.\n\n` +
      `📅 *તારીખ:* રવિવાર, ૬ ડિસેમ્બર ૨૦૨૬\n` +
      `⏰ *શુભ મુહૂર્ત:* સવારે ૧૧:૦૦ કલાકે\n` +
      `📍 *સ્થળ:* નિકોલ કોમ્યુનિટી હોલ, ન્યુ ઈન્ડીયા કોલોની, નવા નરોડા, અમદાવાદ.\n\n` +
      `આ માંગલિક અવસરે આપ શ્રી સપરિવાર પધારી નવદંપતીને આશીર્વાદ આપશો એ જ અભ્યર્થના.\n\n` +
      `✨ *ડિજિટલ આમંત્રણ કાર્ડ જોવા માટે:* ${window.location.href}`;

    const waShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(inviteText)}`;
    window.open(waShareUrl, '_blank');
  };

  const handleShareInvite = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `શુભ વિવાહ - ${coupleData.groom.nameGujarati} અને ${coupleData.bride.nameGujarati}`,
          text: `${coupleData.groom.nameGujarati} અને ${coupleData.bride.nameGujarati}ના શુભ વિવાહનું ડિજિટલ આમંત્રણ કાર્ડ.`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      const tempInput = document.createElement('input');
      tempInput.value = window.location.href;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      alert('આમંત્રણ લિંક સફળતાપૂર્વક કોપી થઈ ગઈ છે! (Invitation link copied)');
    }
  };

  return (
    <>
      {/* Falling Flower Petals Canvas */}
      <FallingPetals active={petalsActive} />

      {/* Royal Envelope Opening Screen */}
      <EnvelopeIntro
        isOpen={isEnvelopeOpen}
        onOpen={handleOpenEnvelope}
        onSkip={() => setIsEnvelopeOpen(true)}
      />

      {/* Main Container - Responsive Frame View */}
      <div className="w-full flex-grow flex justify-center items-start sm:py-4">
        {/* Mobile Device Mockup Frame on Desktop / Tablet (md: and up) */}
        <div className="w-full max-w-[430px] sm:max-w-[460px] md:rounded-[40px] md:border-[10px] md:border-[#1a0205] md:shadow-[0_0_60px_rgba(212,175,55,0.25),0_25px_50px_rgba(0,0,0,0.8)] md:bg-[#2b0308] md:p-2 relative flex flex-col items-center">
          
          {/* Subtle Phone Notch / Speaker bar for Desktop */}
          <div className="hidden md:flex justify-center items-center w-full pb-1 pt-0.5">
            <div className="w-20 h-1.5 bg-[#4a0812] rounded-full border border-gold/30"></div>
          </div>

          {/* Inner Content Container */}
          <div className="w-full flex flex-col items-center">
            {/* Only Toolbar is Sticky */}
            <div className="sticky top-0 z-40 w-full">
              <HeaderToolbar
                isPlaying={isPlaying}
                onToggleAudio={toggleAudio}
                petalsActive={petalsActive}
                onTogglePetals={() => setPetalsActive(!petalsActive)}
                onOpenEnvelope={() => setIsEnvelopeOpen(false)}
                onOpenEnglishModal={() => setIsEnglishModalOpen(true)}
                onOpenQRModal={() => setIsQRModalOpen(true)}
                onOpenRSVPModal={() => setIsRSVPModalOpen(true)}
                onShareWhatsApp={handleShareWhatsApp}
              />
            </div>

            {/* Normal Scrolling: Live Countdown Timer & 4 Tabs Navigation */}
            <CountdownTimer />
            <PageNavigation currentPage={currentPage} onPageChange={setCurrentPage} />

            {/* Main Container Card Frame with Touch Swipe */}
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="w-full flex justify-center"
            >
              <CardFrame>
                {currentPage === 1 && <CoverPage />}
                {currentPage === 2 && <WeddingDetailsPage />}
                {currentPage === 3 && <PreWeddingPage />}
                {currentPage === 4 && <MainEventVenuePage onShareWhatsApp={handleShareWhatsApp} />}

                <CardFooter
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPrevPage={prevPage}
                  onNextPage={nextPage}
                  onShareWhatsApp={handleShareWhatsApp}
                  onShareInvite={handleShareInvite}
                />
              </CardFrame>
            </div>
          </div>

          {/* Phone Bottom Home Indicator bar on Desktop */}
          <div className="hidden md:flex justify-center items-center w-full pt-2 pb-0.5">
            <div className="w-28 h-1 bg-gold/40 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Bottom Signature */}
      <footer className="text-center text-gold/60 text-xs py-4 no-print">
        <p>॥ શુભં ભવતુ ॥ | Digital Invitation Card (React TSX)</p>
      </footer>

      {/* Modals */}
      <RSVPModal
        isOpen={isRSVPModalOpen}
        onClose={() => setIsRSVPModalOpen(false)}
      />

      <EnglishModal
        isOpen={isEnglishModalOpen}
        onClose={() => setIsEnglishModalOpen(false)}
        onOpenRSVP={() => setIsRSVPModalOpen(true)}
      />

      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
        onShareWhatsApp={handleShareWhatsApp}
      />
    </>
  );
};

