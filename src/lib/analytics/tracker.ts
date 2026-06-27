export type EventType =
  | 'page_view'
  | 'page_view_long'
  | 'case_study_click'
  | 'qr_scan'
  | 'lead_capture'
  | 'link_click';

export interface AnalyticsEvent {
  id: string;
  contactId?: string;
  type: EventType;
  description: string;
  timestamp: number;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  company?: string;
  score: number;
  createdAt: number;
  lastActive: number;
}

const STORAGE_KEYS = {
  EVENTS: 'brandcard_analytics_events',
  CONTACTS: 'brandcard_analytics_contacts',
};

// Mock data generator for initial state if empty
const generateMockData = () => {
  const now = Date.now();
  const mockContacts: Contact[] = [
    { id: 'c1', name: 'John Doe', email: 'john@acme.com', company: 'Acme Corp', score: 85, createdAt: now - 86400000 * 2, lastActive: now - 3600000 },
    { id: 'c2', name: 'Sarah Smith', email: 'sarah@example.com', score: 45, createdAt: now - 86400000 * 5, lastActive: now - 86400000 },
    { id: 'c3', name: 'Mike Johnson', email: 'mike@tech.io', company: 'Tech.io', score: 15, createdAt: now - 86400000 * 10, lastActive: now - 86400000 * 9 },
  ];

  const mockEvents: AnalyticsEvent[] = [
    { id: 'e1', contactId: 'c1', type: 'lead_capture', description: 'Captured lead from main profile', timestamp: now - 3600000 },
    { id: 'e2', contactId: 'c1', type: 'case_study_click', description: 'Viewed Q3 Growth Case Study', timestamp: now - 4000000 },
    { id: 'e3', contactId: 'c2', type: 'page_view_long', description: 'Viewed profile for >30s', timestamp: now - 86400000 },
    { id: 'e4', contactId: 'c3', type: 'page_view', description: 'Viewed profile', timestamp: now - 86400000 * 9 },
    { id: 'e5', type: 'qr_scan', description: 'Scanned from networking event', timestamp: now - 1800000 },
  ];

  return { mockContacts, mockEvents };
};

export const getEvents = (): AnalyticsEvent[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEYS.EVENTS);
  if (!stored) {
    const { mockEvents } = generateMockData();
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(mockEvents));
    return mockEvents;
  }
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
};

export const getContacts = (): Contact[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEYS.CONTACTS);
  if (!stored) {
    const { mockContacts } = generateMockData();
    localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(mockContacts));
    return mockContacts;
  }
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
};

const saveEvents = (events: AnalyticsEvent[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(events));
  }
};

const saveContacts = (contacts: Contact[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(contacts));
  }
};

export const trackEvent = (type: EventType, description: string, contactId?: string) => {
  const events = getEvents();
  const newEvent: AnalyticsEvent = {
    id: Math.random().toString(36).substring(2, 9),
    contactId,
    type,
    description,
    timestamp: Date.now(),
  };

  events.push(newEvent);
  saveEvents(events);

  if (contactId) {
    updateContactScore(contactId, type);
  }

  // Dispatch custom event for real-time feed updates
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('analytics_event_tracked', { detail: newEvent }));
  }

  return newEvent;
};

export const getScoreForEvent = (type: EventType): number => {
  switch (type) {
    case 'page_view_long': return 10;
    case 'case_study_click': return 15;
    case 'qr_scan': return 25;
    case 'lead_capture': return 50;
    default: return 0;
  }
};

export const updateContactScore = (contactId: string, eventType: EventType) => {
  const contacts = getContacts();
  const contactIndex = contacts.findIndex(c => c.id === contactId);

  if (contactIndex > -1) {
    const points = getScoreForEvent(eventType);
    if (points > 0) {
      contacts[contactIndex].score += points;
    }
    contacts[contactIndex].lastActive = Date.now();
    saveContacts(contacts);
  }
};

export const captureLead = (name: string, email: string, company?: string): Contact => {
  const contacts = getContacts();
  const newContact: Contact = {
    id: Math.random().toString(36).substring(2, 9),
    name,
    email,
    company,
    score: 0,
    createdAt: Date.now(),
    lastActive: Date.now(),
  };

  contacts.push(newContact);
  saveContacts(contacts);

  // Also track the event and update score
  trackEvent('lead_capture', `New lead captured: ${name}`, newContact.id);

  return newContact;
};

export const getLeadTemperature = (score: number): 'Hot' | 'Warm' | 'Cold' => {
  if (score >= 50) return 'Hot';
  if (score >= 20) return 'Warm';
  return 'Cold';
};
