import { CoupleInfo, FamilyContact, WeddingEvent } from '../types/wedding';

export const coupleData: CoupleInfo = {
  groom: {
    prefix: 'ચિ.',
    nameGujarati: 'સુરેશ',
    nameEnglish: 'Suresh',
    parentsGujarati: 'અ.સૌ. ઊર્મિલાબેન તથા શ્રી મહેન્દ્રભાઈ ભીમજીભાઈ હાલારી ના સુપુત્ર',
    parentsEnglish: 'Son of Mrs. Urmilaben & Mr. Mahendrabhai Bhimjibhai Halari',
    nativeGujarati: '(ગામ-દહિસરા, જસદણ, રાજકોટ) હાલ મીરા રોડ, મુંબઈ નિવાસી',
    nativeEnglish: '(Native: Dahsara, Jasdan, Rajkot) Currently Residing at Mira Road, Mumbai'
  },
  bride: {
    prefix: 'ચિ.',
    nameGujarati: 'કિન્નરી',
    nameEnglish: 'Kinnari',
    parentsGujarati: 'અ.સૌ. જશોદાબેન તથા શ્રી બિપિનચંદ્ર કાંતિલાલ સોલંકીની સુપુત્રી',
    parentsEnglish: 'Daughter of Mrs. Jashodaben & Mr. Bipinchandra Kantilal Solanki',
    nativeGujarati: '(ગામ-ખેરાલુ, મહેસાણા) હાલ નરોડા, અમદાવાદ નિવાસી સાથે',
    nativeEnglish: '(Native: Beralu, Mehsana) Currently Residing at Naroda, Ahmedabad'
  },
  weddingDate: {
    gujarati: 'વિક્રમ સંવત ૨૦૮૩ ના કારતક વદ ૧૩ ને રવિવાર તા. ૬-૧૨-૨૦૨૬ ના રોજ સવારે ૧૧:૦૦ કલાકે',
    english: 'Sunday, 6th December 2026 at 11:00 AM',
    isoTimestamp: 'December 6, 2026 11:00:00'
  }
};

export const inviterContact: FamilyContact = {
  name: 'શ્રી મહેન્દ્રભાઈ ભીમજીભાઈ હાલારી',
  relation: 'નિંત્રક',
  address: 'બિ.૪૦૩, રિતુ ગ્લોરીયસ સોસાયટી, મહાવીર નગર, આઈડીયલ પાર્ક, મીરા રોડ (પૂર્વ), થાણે - ૪૦૧૧૦૭',
  phone1: '9819408295',
  phone2: '9769368609'
};

export const preWeddingEvents: WeddingEvent[] = [
  {
    id: 'mangal-murti',
    titleGujarati: 'મંગલમુર્તિ',
    titleEnglish: 'Mangalmurti Puja',
    dateGujarati: 'શનિવાર તા. ૫-૧૨-૨૦૨૬',
    dateEnglish: 'Saturday, Dec 5, 2026',
    timeGujarati: 'સવારે ૮.૦૦ કલાકે',
    timeEnglish: '8:00 AM',
    venueGujarati: 'શ્રી કચ્છી ભાનુશાલી વાડી',
    venueEnglish: 'Shree Kutchhi Bhanushali Vadi',
    icon: 'ganesha'
  },
  {
    id: 'mandavda',
    titleGujarati: 'રૂડા માંડવડા રોપાશે',
    titleEnglish: 'Mandap Muhurat',
    dateGujarati: 'શનિવાર તા. ૫-૧૨-૨૦૨૬',
    dateEnglish: 'Saturday, Dec 5, 2026',
    timeGujarati: 'સવારે ૯.૦૦ કલાકે',
    timeEnglish: '9:00 AM',
    venueGujarati: 'શ્રી કચ્છી ભાનુશાલી વાડી',
    venueEnglish: 'Shree Kutchhi Bhanushali Vadi',
    icon: '🏺'
  },
  {
    id: 'mandva-bhojan',
    titleGujarati: 'માંડવા ભોજન',
    titleEnglish: 'Mandva Bhojan (Lunch)',
    dateGujarati: 'શનિવાર તા. ૫-૧૨-૨૦૨૬',
    dateEnglish: 'Saturday, Dec 5, 2026',
    timeGujarati: 'બપોરે ૧૨.૩૦ કલાકે',
    timeEnglish: '12:30 PM',
    venueGujarati: 'શ્રી કચ્છી ભાનુશાલી વાડી',
    venueEnglish: 'Shree Kutchhi Bhanushali Vadi',
    icon: '🍲'
  },
  {
    id: 'haldi',
    titleGujarati: 'હલ્દી રસમ (Haldi Ceremony)',
    titleEnglish: 'Haldi Ceremony',
    dateGujarati: 'શનિવાર તા. ૫-૧૨-૨૦૨૬',
    dateEnglish: 'Saturday, Dec 5, 2026',
    timeGujarati: 'બપોરે ૪.૦૦ કલાકે',
    timeEnglish: '4:00 PM',
    venueGujarati: 'શ્રી કચ્છી ભાનુશાલી વાડી',
    venueEnglish: 'Shree Kutchhi Bhanushali Vadi',
    icon: '✨'
  }
];

export const mainEvents: WeddingEvent[] = [
  {
    id: 'raas-garba',
    titleGujarati: 'રાસ ગરબા',
    titleEnglish: 'Raas Garba & Sangeet Sandhya',
    dateGujarati: 'શનિવાર તા. ૫-૧૨-૨૦૨૬',
    dateEnglish: 'Saturday, Dec 5, 2026',
    timeGujarati: 'રાત્રે ૯.૦૦ કલાકે',
    timeEnglish: '9:00 PM Onwards',
    venueGujarati: 'શક્તિ ચોક, પાર્શ્વનાથ ટાઉનશિપ, કૃષ્ણા નગર, અમદાવાદ',
    venueEnglish: 'Shakti Chowk, Parshwanath Township, Krishna Nagar, Ahmedabad',
    icon: '💃'
  },
  {
    id: 'jaan-prasthan',
    titleGujarati: 'જાન પ્રસ્થાન',
    titleEnglish: 'Jaan Arrival & Welcome',
    dateGujarati: 'રવિવાર તા. ૬-૧૨-૨૦૨૬',
    dateEnglish: 'Sunday, Dec 6, 2026',
    timeGujarati: 'સવારે ૯.૦૦ કલાકે',
    timeEnglish: '9:00 AM',
    venueGujarati: 'શ્રી કચ્છી ભાનુશાલી વાડી થી નિકોલ કોમ્યુનિટી હોલ',
    venueEnglish: 'Arrival from Mira Road, Mumbai to Ahmedabad',
    icon: '🐎'
  },
  {
    id: 'hast-melap',
    titleGujarati: 'હસ્ત મેળાપ (શુભ લગ્ન)',
    titleEnglish: 'Hast Melap & Wedding Ceremony',
    dateGujarati: 'રવિવાર તા. ૬-૧૨-૨૦૨૬',
    dateEnglish: 'Sunday, Dec 6, 2026',
    timeGujarati: 'સવારે ૧૧.૦૦ કલાકે',
    timeEnglish: '11:00 AM',
    venueGujarati: 'નિકોલ કોમ્યુનિટી હોલ, નવા નરોડા, અમદાવાદ',
    venueEnglish: 'Nikol Community Hall, Nava Naroda, Ahmedabad',
    icon: '🤝'
  },
  {
    id: 'bhojan-samarambh',
    titleGujarati: 'ભોજન સમારંભ',
    titleEnglish: 'Wedding Reception & Mahaprasad',
    dateGujarati: 'રવિવાર તા. ૬-૧૨-૨૦૨૬',
    dateEnglish: 'Sunday, Dec 6, 2026',
    timeGujarati: 'બપોરે ૧૨.૩૦ કલાકે',
    timeEnglish: '12:30 PM',
    venueGujarati: 'નિકોલ કોમ્યુનિટી હોલ, નવા નરોડા, અમદાવાદ',
    venueEnglish: 'Nikol Community Hall, Nava Naroda, Ahmedabad',
    icon: '🍱'
  }
];

export const snehavadhinFamily = {
  column1: [
    '• સ્વ. ભીમજીભાઈ ભુરાભાઈ હાલારી',
    '• સ્વ. ગિરધરભાઈ રામજીભાઈ હાલારી',
    '• સ્વ. જયંતિભાઈ ભીમજીભાઈ હાલારી',
    '• શ્રી. મહેન્દ્રભાઈ ભીમજીભાઈ હાલારી',
    '• સ્વ. અશ્વિનભાઈ ભીમજીભાઈ હાલારી',
    '• શ્રી. રાજેશ જયંતિભાઈ હાલારી',
    '• શ્રી. વિજય ગિરધરભાઈ હાલારી',
    '• ચિ. મિતેશ મહેન્દ્રભાઈ હાલારી',
    '• ચિ. સંકેત અશ્વિનભાઈ હાલારી'
  ],
  column2: [
    '• સ્વ. જયાબેન ભીમજીભાઈ હાલારી',
    '• ગં.સ્વ. રમાબેન ગિરધરભાઈ હાલારી',
    '• સ્વ. શોભનાબેન જયંતિભાઈ હાલારી',
    '• અ.સૌ. ઊર્મિલાબેન મહેન્દ્રભાઈ હાલારી',
    '• સ્વ. નિશાબેન અશ્વિનભાઈ હાલારી',
    '• અ.સૌ. અમીબેન રાજેશ હાલારી',
    '• અ.સૌ. જલ્પાબેન વિજય હાલારી'
  ],
  jamaiPaksh: 'શ્રી. દેવેન્દ્ર દત્તારામ હરમલકર / અ.સૌ. નિતા દેવેન્દ્ર હરમલકર',
  kids: 'દિશા, ઓમ, ગૌરવ'
};

