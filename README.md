# 🌸 શ્રી ગણેશાય નમઃ | Gujarati Digital Wedding Invitation Card

An interactive, responsive, digital Gujarati Wedding Invitation card for **ચિ. સુરેશ અને કિન્નરી (Suresh & Kinnari)**.

Built with **React (TypeScript / TSX)** + **Tailwind CSS** + **Vite**, along with a standalone zero-dependency HTML edition.

---

## ✨ Features

- 💌 **Royal Envelope Opening Screen**: Interactive traditional wax seal envelope intro with flower petals animation and background music.
- 🎶 **Gujarati Wedding Music**: Plays *"વેળા મિલનની (Vela Milan Ni - Jigardan Gadhavi & Yati Upadhyay)"* with one-tap toggle.
- 🌺 **Falling Petals Animation**: Canvas-based falling marigold orange, gold, and rose petals effect (toggleable).
- ⏳ **Live Muhurat Countdown**: Real-time countdown timer to the wedding date (**Sunday, December 6, 2026 at 11:00 AM**).
- 📱 **Mobile Touch Swipe Gestures**: Smooth left/right swipe between pages on smartphones and tablets.
- 📲 **Instant WhatsApp Sharing**: Pre-fills an auspicious Gujarati invitation message with couples' details, dates, venue, and digital card link.
- 📩 **WhatsApp RSVP Integration**: Guests can enter their name, guest count, and best wishes to instantly send an RSVP via WhatsApp to the host family.
- 🌐 **English Summary View**: Clean English modal summary for non-Gujarati guests and corporate colleagues.
- 📷 **QR Code Sharing**: Instant QR code generator for easy mobile camera scanning.
- 🖨️ **Print & PDF Mode**: Custom `@media print` layout formatting all 4 pages cleanly into a keepsake printable card.

---

## 📑 Invitation Pages

1. **૧. મુખ્ય પૃષ્ઠ (Cover Page)**: Shree Ganesh invocation, Bride & Groom highlight, Inviter details & tap-to-call phone badges.
2. **૨. શુભ લગ્ન (Ceremony Details)**: Kuldevi invocations, lineage details of Groom & Bride, auspicious muhurat timings, and Snehavadhin family list.
3. **૩. મંગલ પ્રસંગ (Pre-Wedding Functions)**: Timeline for Mangalmurti, Mandavda, Mandva Bhojan, and Haldi Rasam + Vadi venue.
4. **૪. રાસ ગરબા અને લગ્ન સ્થળ (Main Event & Venues)**: Raas Garba, Jaan Prasthan, Hast Melap, Bhojan Samarambh + Nikol Community Hall Google Maps navigation & Google Calendar button.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation & Run

```bash
# Clone the repository
git clone https://github.com/kinsu1914-ux/WddingCard.git
cd WddingCard

# Install dependencies
npm install

# Start Vite dev server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the card in your browser.

### Build for Production

```bash
npm run build
```

The production output will be generated inside the `dist/` directory.

---

## 🗂️ Project Structure

```text
WeddingCard/
├── public/                     # Static assets (wedding_song.mp3, audio)
├── src/
│   ├── components/             # Modular block-based TSX components
│   │   ├── modals/             # RSVPModal, EnglishModal, QRCodeModal
│   │   ├── pages/              # CoverPage, WeddingDetailsPage, PreWeddingPage, MainEventVenuePage
│   │   ├── CardFrame.tsx       # Ornamental royal border frame
│   │   ├── CardFooter.tsx      # Pagination, mobile swipe notes, actions
│   │   ├── CountdownTimer.tsx  # Live countdown clock
│   │   ├── EnvelopeIntro.tsx   # Royal wax seal envelope intro
│   │   ├── FallingPetals.tsx   # Canvas petal animation
│   │   ├── HeaderToolbar.tsx   # Top action bar (Music, Petals, English, QR, RSVP)
│   │   └── PageNavigation.tsx  # 4 tabs navigation
│   ├── data/
│   │   └── weddingData.ts      # Centralized wedding data
│   ├── hooks/
│   │   └── useShehnaiAudio.ts  # Audio player hook
│   ├── types/
│   │   └── wedding.ts          # TypeScript interfaces
│   ├── App.tsx                 # Root application
│   ├── main.tsx                # React entry
│   └── index.css               # Tailwind & minimal global styling
├── gujarati_wedding_invitation.html # Standalone offline HTML version
├── index.html                  # Vite HTML entry
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 💍 Couple Details
- **વર પક્ષ (Groom)**: ચિ. સુરેશ (સુપુત્ર: અ.સૌ. ઊર્મિલાબેન તથા શ્રી મહેન્દ્રભાઈ ભીમજીભાઈ હાલારી)
- **કન્યા પક્ષ (Bride)**: ચિ. કિન્નરી (સુપુત્રી: અ.સૌ. જશોદાબેન તથા શ્રી બિપિનચંદ્ર કાંતિલાલ સોલંકી)
- **તારીખ (Date)**: રવિવાર તા. ૬-૧૨-૨૦૨૬ | સવારે ૧૧:૦૦ કલાકે
- **સ્થળ (Venue)**: નિકોલ કોમ્યુનિટી હોલ, ન્યુ ઈન્ડીયા કોલોની, નવા નરોડા, અમદાવાદ.

---

॥ શુભં ભવતુ ॥

