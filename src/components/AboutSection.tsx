import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AboutSectionProps {
  onOpenBooking?: (topic?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const { ref: sectionRef, isRevealed } = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="about" ref={sectionRef} className="py-12 md:py-16 px-6 md:px-12 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Center Logo Divider matching Lala Salama */}
        <div className="relative mb-12 flex items-center justify-center">
          <div className="border-t border-gray-200/80 w-full absolute inset-0 my-auto" />
          <div className="relative bg-[#FAF8F5] px-6 text-center">
            <div className="font-serif tracking-[0.3em] text-base md:text-lg font-bold uppercase text-gray-900 leading-tight">
              SIRIBRAND
            </div>
            <div className="tracking-[0.4em] text-[8px] sm:text-[9px] uppercase font-light text-[#44534C] mt-0.5">
              ZANZIBAR
            </div>
          </div>
        </div>

        {/* 2-Column Split: Story on Left, Clean 3D Book Page Picture on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Pure Text (No box, no form, no Canva sparkles) */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 ease-out ${
              isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* 5 Gold Stars & Label */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-gray-500 font-light ml-1">
                Luxury Island Sanctuary
              </span>
            </div>

            {/* Cursive Signature Title */}
            <h2 className="font-signature text-5xl sm:text-6xl md:text-7xl text-[#44534C] mb-4 leading-tight font-normal">
              Siribrand
            </h2>

            {/* Poetic description */}
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed font-light mb-6">
              Right in the heart of Tanzania's most iconic waters, Siribrand offers an unparalleled Zanzibar experience where island luxury meets Swahili authenticity. From tranquil Stone Town retreats to private sandbanks, turquoise coral lagoons, and sunset dhows, our bespoke journeys are crafted for travelers seeking genuine wonder, privacy, and effortless island beauty.
            </p>

            {/* Action Link */}
            <div className="flex items-center gap-6 pt-2">
              <a
                href="#accommodation"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#44534C] hover:text-[#35423C] font-semibold border-b border-[#44534C]/40 pb-1 transition-all group"
              >
                <span>Explore Accommodations</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </a>

              {onOpenBooking && (
                <button
                  onClick={() => onOpenBooking('Tailored Zanzibar Itinerary')}
                  className="text-xs uppercase tracking-[0.2em] text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  Inquire Now →
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Clean 4K Picture Opening like a Book Page (NO Words, NO Black Ink) */}
          <div className="lg:col-span-7 -mt-2 md:-mt-4 book-perspective">
            <div
              className={`relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 shadow-xl book-page-turn group ${
                isRevealed ? 'revealed' : ''
              }`}
            >
              {/* Clean 4K Picture with Zero Overlays, Zero Badges, Zero Text */}
              <img
                src="/images/hero-seaplane-resort.jpg"
                alt="Siribrand Zanzibar Island Sanctuary"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
