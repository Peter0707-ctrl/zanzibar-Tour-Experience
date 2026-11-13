import React, { useState, useEffect } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { BookingBar } from './BookingBar';

interface HeroProps {
  onCheckAvailability: (selection: { checkIn: string; checkOut: string; guests: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onCheckAvailability }) => {
  // Soft-shifting cinematic video-like HD visual slides
  const slides = [
    {
      url: '/images/hero-seaplane-resort.jpg',
      alt: 'Zanzibar Luxury Island Resort & Seaplane Arrival',
    },
    {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=95',
      alt: 'Nakupenda Sandbank Crystal Turquoise Waters',
    },
    {
      url: '/images/hero-floating-breakfast.jpg',
      alt: 'Floating Breakfast in Ocean Infinity Pool',
    },
    {
      url: '/images/hero-pool-resort.jpg',
      alt: 'Sunset Beachfront Resort Villa & Pool Deck',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Soft shifting interval: changes every 6.5 seconds with cinematic crossfade
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="hero" className="relative h-screen overflow-hidden flex flex-col justify-between">
      {/* Background Soft Shifting Visuals (Smooth Continuous Video Feel with Ken Burns Zoom) */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.url}
              alt={slide.alt}
              className={`w-full h-full object-cover object-center ${
                index === currentSlide ? 'animate-ken-burns' : ''
              }`}
            />
          </div>
        ))}

        {/* Soft balanced gradient matching Lala Salama */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/65 z-20 pointer-events-none" />
      </div>

      {/* Hero Center Content - Clean, Minimal & Poetic */}
      <div className="relative z-30 my-auto text-center max-w-5xl mx-auto px-6 pt-20">
        {/* Location Kicker */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <MapPin className="w-4 h-4 text-white/85" />
          <span className="text-xs sm:text-sm uppercase tracking-[0.35em] text-white/90 font-light">
            Zanzibar, Tanzania
          </span>
        </div>

        {/* Cursive Signature Title - Exact Lala Salama aesthetic */}
        <h1 className="mb-4">
          <span className="font-signature block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-wide drop-shadow-md">
            Zanzibar
          </span>
          <span className="block mt-2 text-xs sm:text-sm md:text-base text-white/90 uppercase tracking-[0.35em] font-light">
            Siribrand Tours &amp; Experiences
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
          Where the ocean meets the soul in Tanzania's most iconic waters
        </p>
      </div>

      {/* Bottom Area: Centered Scroll Arrow & Floating Booking Bar (Lines Removed as requested) */}
      <div className="relative z-30 pb-6 px-4">
        {/* Subtle Bouncing Scroll Indicator (Lines completely removed) */}
        <div className="flex justify-center mb-3">
          <a
            href="#accommodation"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Scroll to accommodation"
          >
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>

        {/* Lala Salama Floating Booking Bar */}
        <BookingBar onCheckAvailability={onCheckAvailability} />
      </div>
    </section>
  );
};
