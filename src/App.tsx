import React, { useState, useEffect } from 'react';
import type { Tour } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { AccommodationSection } from './components/AccommodationSection';
import { ToursSection } from './components/ToursSection';
import { QuoteBanner } from './components/QuoteBanner';
import { PackagesSection } from './components/PackagesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { JournalPage } from './components/JournalPage';
import { TourModal } from './components/TourModal';
import { BookingModal } from './components/BookingModal';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { NetworkStatusIndicator } from './components/NetworkStatusIndicator';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'journal'>(() => {
    if (typeof window !== 'undefined' && window.location.hash.includes('/journal')) {
      return 'journal';
    }
    return 'home';
  });

  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState({
    experience: 'Zanzibar Complete Experience / Tailored Stay',
    date: '',
    guests: 'Guests',
  });

  // Listen to browser hash changes so back/forward buttons and direct links work
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash.includes('/journal')) {
        setCurrentPage('journal');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigateToJournal = () => {
    window.location.hash = '/journal';
    setCurrentPage('journal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToHome = () => {
    window.location.hash = '';
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (itemTitle?: string) => {
    if (itemTitle) {
      setBookingPrefill((prev) => ({ ...prev, experience: itemTitle }));
    }
    setIsBookingOpen(true);
  };

  const handleCheckAvailability = (selection: { checkIn: string; checkOut: string; guests: string }) => {
    setBookingPrefill({
      experience: 'Zanzibar Complete Experience / Tailored Stay',
      date: selection.checkIn && selection.checkOut ? `${selection.checkIn} to ${selection.checkOut}` : selection.checkIn || 'Flexible',
      guests: selection.guests,
    });
    setIsBookingOpen(true);
  };

  // If user is on the dedicated Journal Page
  if (currentPage === 'journal') {
    return (
      <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#44534C] selection:text-white flex flex-col">
        <JournalPage
          onBackToHome={handleNavigateToHome}
          onOpenBooking={(topic) => handleOpenBooking(topic)}
        />

        {/* Global Offline / Network Status Banner */}
        <NetworkStatusIndicator />

        {/* Floating Instant WhatsApp Button */}
        <WhatsAppFloating />

        {/* Booking & Reservations Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          initialExperience={bookingPrefill.experience}
          initialDate={bookingPrefill.date}
          initialGuests={bookingPrefill.guests}
          onClose={() => setIsBookingOpen(false)}
        />
      </div>
    );
  }

  // Main Landing Page (Gallery removed from main page as requested)
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#44534C] selection:text-white flex flex-col">
      {/* Header */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onNavigateJournal={handleNavigateToJournal}
        currentPage="home"
      />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Lala Salama Hero with Soft Shifting HD Backgrounds & Floating Bar */}
        <Hero onCheckAvailability={handleCheckAvailability} />

        {/* Lala Salama About Section (Divider + 2 Columns: Stars, Cursive Title, Story + Book-Opening Photo) */}
        <AboutSection onOpenBooking={(topic) => handleOpenBooking(topic)} />

        {/* Stone Town Apartment Accommodation Showcase with 5-Thumbnail Switcher */}
        <AccommodationSection
          onBookApartment={(suiteTitle) => handleOpenBooking(suiteTitle || 'Stone Town Luxury Suite')}
        />

        {/* Core Tours & Marine Excursions Section with Hover Reveal */}
        <ToursSection
          onSelectTour={(tour) => setSelectedTour(tour)}
          onQuickBook={(title) => handleOpenBooking(title)}
        />

        {/* Lala Salama Signature Full-Width Quote Review Banner */}
        <QuoteBanner />

        {/* Proposed Tour Packages Section */}
        <PackagesSection
          onBookPackage={(title) => handleOpenBooking(title)}
        />

        {/* Guest Reviews & Testimonials */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer with Looping Ocean Video Background */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onNavigateJournal={handleNavigateToJournal}
      />

      {/* Global Offline / Network Status Banner */}
      <NetworkStatusIndicator />

      {/* Floating Instant WhatsApp Button */}
      <WhatsAppFloating />

      {/* Tour Detail Modal */}
      <TourModal
        tour={selectedTour}
        onClose={() => setSelectedTour(null)}
        onBookNow={(title) => handleOpenBooking(title)}
      />

      {/* Booking & Reservations Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        initialExperience={bookingPrefill.experience}
        initialDate={bookingPrefill.date}
        initialGuests={bookingPrefill.guests}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};

export default App;
