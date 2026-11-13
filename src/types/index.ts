export interface Tour {
  id: string;
  title: string;
  subtitle: string;
  category: 'marine' | 'heritage' | 'adventure' | 'sunset';
  categoryLabel: string;
  duration: string;
  priceUSD: number;
  image: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  description: string;
  longDescription: string;
  highlights: string[];
  included: string[];
  notIncluded: string[];
  itinerary: { time: string; title: string; description: string }[];
  whatToBring: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  priceUSD: number;
  badge?: string;
  image: string;
  description: string;
  toursIncluded: string[];
  idealFor: string;
  features: string[];
}

export interface Review {
  id: string;
  name: string;
  country: string;
  flag: string;
  date: string;
  rating: number;
  tour: string;
  comment: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export type Currency = 'USD' | 'TZS' | 'EUR';
