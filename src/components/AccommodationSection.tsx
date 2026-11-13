import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Users, Maximize } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AccommodationSectionProps {
  onBookApartment: (suiteTitle: string) => void;
}

interface SuiteItem {
  id: string;
  name: string;
  badge?: string;
  guests: string;
  size: string;
  description: string;
  gallery: string[];
}

export const AccommodationSection: React.FC<AccommodationSectionProps> = ({ onBookApartment }) => {
  const { ref: headerRef, isRevealed: isHeaderRevealed } = useScrollReveal({ threshold: 0.15 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeImageIndices, setActiveImageIndices] = useState<Record<string, number>>({});
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const suites: SuiteItem[] = [
    {
      id: 'stone-town-heritage',
      name: 'The Stone Town Heritage Suite',
      badge: 'Historic UNESCO',
      guests: '2 adults',
      size: '55 m²',
      description: 'An intimate sanctuary inside UNESCO World Heritage stone alleys. High ceilings, handcrafted Swahili furnishings, and a sunlit balcony overlooking historic coral streets.',
      gallery: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85',
      ]
    },
    {
      id: 'sultan-penthouse',
      name: 'The Sultan Waterfront Penthouse',
      badge: 'Oceanfront View',
      guests: '3 adults',
      size: '75 m²',
      description: 'Panoramic vistas across the azure Indian Ocean and dhow harbor. Features a private sunset terrace, organic rainfall shower, and bespoke island decor.',
      gallery: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=85',
      ]
    },
    {
      id: 'kiwengwa-villa',
      name: 'The Zanzibar Ocean Residence',
      badge: 'Family Sanctuary',
      guests: '2 adults + 2 children',
      size: '95 m²',
      description: 'Spacious boutique retreat ideal for families and honeymooners. Direct ocean breeze, master en-suite, separate lounge, and private beach concierge.',
      gallery: [
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=85',
      ]
    },
    {
      id: 'mnemba-honeymoon',
      name: 'The Mnemba Honeymoon Villa',
      badge: 'Romantic Luxury',
      guests: '2 adults',
      size: '85 m²',
      description: 'Designed exclusively for romance. Private plunge pool overlooking turquoise shallows, outdoor soaking tub, four-poster Swahili bed, and sunset dining service.',
      gallery: [
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85',
      ]
    },
    {
      id: 'swahili-royal-pavilion',
      name: 'The Swahili Royal Pavilion',
      badge: 'VIP Presidential',
      guests: '4 adults',
      size: '120 m²',
      description: 'Our most prestigious residence. Expansive two-bedroom pavilion with private rooftop dhow stargazing lounge, carved brass-accented doors, and private butler.',
      gallery: [
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=85',
      ]
    }
  ];

  // Automatic smooth sideways movement every 3.8 seconds
  useEffect(() => {
    if (isHovered || isDragging) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const cardWidth = container.firstElementChild
          ? (container.firstElementChild as HTMLElement).offsetWidth + 24
          : 430;

        if (container.scrollLeft >= maxScroll - 30) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
          setCurrentSlideIndex(0);
        } else {
          container.scrollBy({ left: cardWidth, behavior: 'smooth' });
          setCurrentSlideIndex((prev) => (prev + 1) % suites.length);
        }
      }
    }, 3800);

    return () => clearInterval(interval);
  }, [isHovered, isDragging, suites.length]);

  // Track active slide index on scroll
  const handleScrollUpdate = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild
        ? (container.firstElementChild as HTMLElement).offsetWidth + 24
        : 430;
      const idx = Math.round(container.scrollLeft / cardWidth);
      setCurrentSlideIndex(Math.min(idx, suites.length - 1));
    }
  };

  // Smooth Sideways Controls
  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild
        ? (container.firstElementChild as HTMLElement).offsetWidth + 24
        : 430;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (direction === 'right') {
        if (container.scrollLeft >= maxScroll - 30) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
          setCurrentSlideIndex(0);
        } else {
          container.scrollBy({ left: cardWidth, behavior: 'smooth' });
          setCurrentSlideIndex((prev) => Math.min(prev + 1, suites.length - 1));
        }
      } else {
        if (container.scrollLeft <= 30) {
          container.scrollTo({ left: maxScroll, behavior: 'smooth' });
          setCurrentSlideIndex(suites.length - 1);
        } else {
          container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
          setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
        }
      }
    }
  };

  const handleSelectThumbnail = (suiteId: string, index: number) => {
    setActiveImageIndices((prev) => ({ ...prev, [suiteId]: index }));
  };

  // Mouse Drag to Slide Sideways
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section id="accommodation" className="py-12 md:py-16 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header matching Lala Salama */}
        <div ref={headerRef} className="flex items-end justify-between mb-8">
          <div className={`transition-all duration-1000 ease-out ${
            isHeaderRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="font-signature text-2xl sm:text-3xl text-[#44534C] block mb-1">
              Boutique Living in Stone Town
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 font-bold tracking-tight">
              Our Luxury Suites
            </h2>
          </div>

          {/* Slider Arrow Controls with Interactive Glow */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#44534C] hover:bg-white flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
              aria-label="Previous suite"
            >
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#44534C] hover:bg-white flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
              aria-label="Next suite"
            >
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>
          </div>
        </div>

        {/* Accommodation Cards Moving Sideways Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScrollUpdate}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsDragging(false);
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className={`flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide select-none transition-all ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ scrollbarWidth: 'none', scrollBehavior: 'smooth' }}
        >
          {suites.map((suite, sIdx) => {
            const activeIdx = activeImageIndices[suite.id] || 0;
            const currentImg = suite.gallery[activeIdx];

            return (
              <div
                key={suite.id}
                className={`flex-shrink-0 w-[85vw] sm:w-[380px] md:w-[410px] lg:w-[430px] snap-start bg-white rounded-2xl border border-gray-200/80 overflow-hidden group shadow-xs hover:shadow-xl transition-all duration-700 ease-out ${
                  isHeaderRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${sIdx * 120}ms` }}
              >
                {/* 1. Main Large Card Image - Pure, Clean, No Words or Badges Inside */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={currentImg}
                    alt={suite.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
                  />
                </div>

                {/* 2. Exact Lala Salama 5-Thumbnail Switcher Strip */}
                <div className="flex gap-1.5 p-2 bg-gray-50/90 border-b border-gray-100">
                  {suite.gallery.slice(0, 5).map((thumb, tIdx) => (
                    <button
                      key={tIdx}
                      onClick={() => handleSelectThumbnail(suite.id, tIdx)}
                      onMouseEnter={() => handleSelectThumbnail(suite.id, tIdx)}
                      className={`flex-1 aspect-[3/2] overflow-hidden rounded-sm transition-all cursor-pointer ${
                        tIdx === activeIdx
                          ? 'ring-2 ring-[#44534C] opacity-100 scale-95 shadow-xs'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                      aria-label={`View photo ${tIdx + 1}`}
                    >
                      <img src={thumb} alt="" className="w-full h-full object-cover pointer-events-none" />
                    </button>
                  ))}
                </div>

                {/* 3. Card Details */}
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-gray-900 mb-1 group-hover:text-[#44534C] transition-colors leading-snug">
                      {suite.name}
                    </h3>

                    {/* Guests & Size Icons */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-2.5 font-light">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#44534C]" />
                        <span>{suite.guests}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Maximize className="w-3.5 h-3.5 text-[#44534C]" />
                        <span>{suite.size}</span>
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed mb-4 font-normal line-clamp-2">
                      {suite.description}
                    </p>
                  </div>

                  {/* Action Button matching Lala Salama */}
                  <button
                    onClick={() => onBookApartment(suite.name)}
                    className="w-full py-2.5 bg-[#44534C] hover:bg-[#35423C] text-white text-xs uppercase tracking-[0.2em] font-medium rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs group-hover:shadow-md"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Sideways Motion Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {suites.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const cardWidth = scrollContainerRef.current.firstElementChild
                    ? (scrollContainerRef.current.firstElementChild as HTMLElement).offsetWidth + 24
                    : 430;
                  scrollContainerRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
                  setCurrentSlideIndex(idx);
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                currentSlideIndex === idx
                  ? 'w-8 bg-[#44534C]'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to suite ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
