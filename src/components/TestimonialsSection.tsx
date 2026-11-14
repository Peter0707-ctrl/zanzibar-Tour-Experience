import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { REVIEWS_DATA } from '../data/toursData';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const activeReview = REVIEWS_DATA[activeIndex];

  // Auto-slide sideways smoothly every 5.5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  // Touch Swipe for mobile sideways movement
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="reviews"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-[#FAF8F5] relative overflow-hidden selection:bg-[#44534C] selection:text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Decorative Subtle Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[160px] md:text-[240px] font-serif text-[#44534C]/[0.025] font-black italic tracking-widest leading-none">
        SIRIBRAND
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header - Lala Salama Style */}
        <div className="text-center mb-7 md:mb-10">
          <span className="font-signature text-2xl sm:text-3xl text-[#44534C] block mb-0.5">
            Guest Impressions
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-900 font-bold tracking-tight mb-2.5">
            Words from Our Discerning Guests
          </h2>
          <div className="w-10 h-[1.5px] bg-[#44534C]/40 mx-auto" />
        </div>

        {/* Pure Editorial Quote Stage (ZERO FORMS / ZERO BOXES) */}
        <div className="relative min-h-[220px] sm:min-h-[200px] md:min-h-[190px] flex flex-col justify-center items-center text-center px-4 sm:px-10 md:px-14">
          {/* Subtle Editorial Quote Mark */}
          <div className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#C5A880]/35 leading-none select-none mb-1">
            “
          </div>

          {/* Animated Quote Text */}
          <div
            key={activeReview.id}
            className="transition-all duration-500 ease-out transform translate-y-0 opacity-100 animate-fadeIn"
          >
            {/* The Quote (Refined, perfectly balanced luxury font size) */}
            <p className="font-serif text-base sm:text-lg md:text-xl lg:text-[20px] text-gray-800 leading-relaxed italic font-normal max-w-2xl mx-auto mb-5">
              {activeReview.comment}
            </p>

            {/* Experience Tag */}
            <div className="inline-block text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#44534C] mb-3">
              {activeReview.tour}
            </div>

            {/* Reviewer Attribution */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5">
              <div className="relative">
                <img
                  src={activeReview.avatar}
                  alt={activeReview.name}
                  className="w-13 h-13 sm:w-15 sm:h-15 rounded-full object-cover ring-2 ring-[#44534C]/25 ring-offset-2 ring-offset-[#FAF8F5] shadow-sm"
                />
              </div>

              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5">
                  <h3 className="font-serif font-bold text-sm sm:text-base text-gray-950 tracking-tight">
                    {activeReview.name}
                  </h3>
                  <span title="Verified Traveler" className="inline-flex text-[#44534C]">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 fill-[#44534C]/10" />
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-500 font-light flex items-center justify-center sm:justify-start gap-1.5 mt-0.5">
                  <span className="font-medium text-gray-700">{activeReview.country}</span>
                  <span>•</span>
                  <span>{activeReview.date}</span>
                  <span>•</span>
                  <span className="text-[#44534C] font-semibold">Verified Guest</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist Reviewer Quick Selector Tabs (BILA FORM, purely elegant pills) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-12 pt-8 border-t border-[#44534C]/10">
          {REVIEWS_DATA.map((rev, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={rev.id}
                onClick={() => setActiveIndex(index)}
                className={`group flex items-center gap-2.5 px-3.5 py-1.5 rounded-full transition-all duration-300 text-left ${
                  isActive
                    ? 'bg-[#44534C] text-white shadow-sm scale-105'
                    : 'bg-transparent text-gray-600 hover:text-gray-950 hover:bg-[#44534C]/5'
                }`}
              >
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className={`w-6 h-6 rounded-full object-cover transition-transform ${
                    isActive ? 'ring-1 ring-white/60' : 'opacity-80 group-hover:opacity-100'
                  }`}
                />
                <span className="font-serif text-xs font-semibold tracking-tight">
                  {rev.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Elegant Bottom Hospitality Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-[#44534C]/10 text-center">
          <div>
            <div className="font-serif text-2xl font-bold text-gray-950 mb-0.5">5.0 / 5.0</div>
            <div className="text-[11px] uppercase tracking-wider text-gray-500 font-sans">TripAdvisor & Google</div>
          </div>
          <div>
            <div className="font-serif text-2xl font-bold text-gray-950 mb-0.5">100%</div>
            <div className="text-[11px] uppercase tracking-wider text-gray-500 font-sans">Private Tailored Charters</div>
          </div>
          <div>
            <div className="font-serif text-2xl font-bold text-gray-950 mb-0.5">24 / 7</div>
            <div className="text-[11px] uppercase tracking-wider text-gray-500 font-sans">Island VIP Concierge</div>
          </div>
          <div>
            <div className="font-serif text-2xl font-bold text-gray-950 mb-0.5">99.4%</div>
            <div className="text-[11px] uppercase tracking-wider text-gray-500 font-sans">Guest Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};