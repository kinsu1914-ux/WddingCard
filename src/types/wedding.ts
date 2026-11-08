export interface WeddingEvent {
  id: string;
  titleGujarati: string;
  titleEnglish: string;
  dateGujarati: string;
  dateEnglish: string;
  timeGujarati: string;
  timeEnglish: string;
  venueGujarati: string;
  venueEnglish: string;
  icon: string;
  mapUrl?: string;
}

export interface FamilyContact {
  name: string;
  relation: string;
  address: string;
  phone1: string;
  phone2?: string;
}

export interface CoupleInfo {
  groom: {
    prefix: string;
    nameGujarati: string;
    nameEnglish: string;
    parentsGujarati: string;
    parentsEnglish: string;
    nativeGujarati: string;
    nativeEnglish: string;
  };
  bride: {
    prefix: string;
    nameGujarati: string;
    nameEnglish: string;
    parentsGujarati: string;
    parentsEnglish: string;
    nativeGujarati: string;
    nativeEnglish: string;
  };
  weddingDate: {
    gujarati: string;
    english: string;
    isoTimestamp: string;
  };
}

export interface RSVPData {
  fullName: string;
  guestsCount: string;
  message: string;
}

