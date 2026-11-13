import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import type { Tour } from '../types';
import { TOURS_DATA } from '../data/toursData';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ToursSectionProps {
  onSelectTour: (tour: Tour) => void;
  onQuickBook?: (tourTitle: string) => void;
}

export const ToursSection: React.FC<ToursSectionProps> = ({ onSelectTour }) => {
  const { ref: sectionRef, isRevealed } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="tours" ref={sectionRef} className="py-10 md:py-14 px-4 md:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Header matching Lala Salama Experiences */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="font-signature text-2xl sm:text-3xl text-[#44534C] block mb-0.5">
            Curated Island Safaris
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 font-bold tracking-tight mb-2">
            Zanzibar Experiences
          </h2>
          <div className="w-10 h-[1.5px] bg-[#44534C] mx-auto mb-2" />
          <p className="text-gray-600 text-xs sm:text-sm font-normal leading-relaxed">
            Every excursion is privately coordinated with certified local captains and historian guides. Experience the true wonder of the Indian Ocean.
          </p>
        </div>

        {/* Lala Salama Pure 3-Photo Experience Mosaic (Zero Words, Pure 4K Visuals) */}
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 transition-all duration-1000 ease-out ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Column: Tall 4K Feature Excursion */}
          <div
            onClick={() => {
              const nakupenda = TOURS_DATA.find((t) => t.id === 'nakupenda-sandbank') || TOURS_DATA[1];
              onSelectTour(nakupenda);
            }}
            className="md:col-span-7 h-[360px] sm:h-[480px] md:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 shadow-md group cursor-pointer"
            title="Click to view Nakupenda Sandbank Details"
          >
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=95"
              alt="Nakupenda Sandbank Paradise"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out select-none"
            />
          </div>

          {/* Right Column: Two Stacked 4K Excursion Photos */}
          <div className="md:col-span-5 flex flex-col gap-3 md:gap-4 h-[360px] sm:h-[480px] md:h-[600px]">
            {/* Top Right: Mnemba Atoll Dolphins & Reef */}
            <div
              onClick={() => {
                const mnemba = TOURS_DATA.find((t) => t.id === 'mnemba-dolphin') || TOURS_DATA[2];
                onSelectTour(mnemba);
              }}
              className="flex-1 rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 shadow-md group cursor-pointer"
              title="Click to view Mnemba Dolphin Safari Details"
            >
              <img
                src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=2560&q=95"
                alt="Mnemba Atoll Marine Safari"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out select-none"
              />
            </div>

            {/* Bottom Right: Sunset Dhow & Ocean Adventure */}
            <div
              onClick={() => {
                const kiwengwa = TOURS_DATA.find((t) => t.id === 'kiwengwa-sunset-jetski') || TOURS_DATA[4];
                onSelectTour(kiwengwa);
              }}
              className="flex-1 rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 shadow-md group cursor-pointer"
              title="Click to view Kiwengwa Sunset Ocean Experience Details"
            >
              <img
                src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=2560&q=95"
                alt="Kiwengwa Beach Golden Hour & Sunset"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out select-none"
              />
            </div>
          </div>
        </div>

        {/* Clean Minimal Action Link */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              const prisonIsland = TOURS_DATA.find((t) => t.id === 'prison-island') || TOURS_DATA[0];
              onSelectTour(prisonIsland);
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-300 hover:border-[#44534C] hover:bg-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium text-gray-800 transition-all cursor-pointer shadow-2xs hover:scale-105"
          >
            <Compass className="w-3.5 h-3.5 text-[#44534C]" />
            <span>Discover Island Itineraries</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
