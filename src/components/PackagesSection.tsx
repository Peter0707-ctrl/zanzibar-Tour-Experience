import React, { useState, useRef, useEffect } from 'react';
import { Clock, Check, ArrowRight } from 'lucide-react';
import { PACKAGES_DATA } from '../data/toursData';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PackagesSectionProps {
  onBookPackage: (packageTitle: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onBookPackage }) => {
  const { ref: sectionRef, isRevealed } = useScrollReveal({ threshold: 0.1 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // Auto-slide sideways every 4 seconds
  useEffect(() => {
    if (isHovered || isDragging) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const cardWidth = container.firstElementChild
          ? (container.firstElementChild as HTMLElement).offsetWidth + 24
          : 410;

        if (container.scrollLeft >= maxScroll - 30) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
          setCurrentSlideIndex(0);
        } else {
          container.scrollBy({ left: cardWidth, behavior: 'smooth' });
          setCurrentSlideIndex((prev) => (prev + 1) % PACKAGES_DATA.length);
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, isDragging]);

  // Track active slide index on scroll
  const handleScrollUpdate = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild
        ? (container.firstElementChild as HTMLElement).offsetWidth + 24
        : 410;
      const idx = Math.round(container.scrollLeft / cardWidth);
      setCurrentSlideIndex(Math.min(idx, PACKAGES_DATA.length - 1));
    }
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
    <section id="packages" ref={sectionRef} className="py-10 md:py-14 px-4 md:px-8 bg-[#FAF8F5] text-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-8">
          <div>
            <span className="font-signature text-2xl sm:text-3xl text-[#44534C] block mb-0.5">
              Signature Bundles &amp; Holidays
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 font-bold tracking-tight mb-2">
              Curated Tour Packages
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-normal max-w-2xl leading-relaxed">
              Combine boutique Stone Town stays, private boat transfers, seafood feasts, and licensed guides into seamless island packages.
            </p>
          </div>
        </div>

        {/* Horizontal Sideways Moving Packages Slider */}
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
          {PACKAGES_DATA.map((pkg, idx) => (
            <div
              key={pkg.id}
              className={`flex-shrink-0 w-[85vw] sm:w-[360px] md:w-[390px] lg:w-[410px] snap-start bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-700 ease-out flex flex-col justify-between ${
                isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(idx % 4) * 100}ms` }}
            >
              {/* Pure Clean Picture - NO Badges, NO Words Inside */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
                />
              </div>

              {/* Package Details Below Image */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Top Meta: Duration & Badge outside image */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#44534C] bg-[#44534C]/10 px-2.5 py-0.5 rounded-full">
                      {pkg.badge}
                    </span>

                    <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#44534C]" />
                      <span>{pkg.duration}</span>
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-gray-900 mb-1 leading-snug">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-[#44534C] font-semibold mb-2">
                    {pkg.tagline}
                  </p>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4 font-light">
                    {pkg.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-1.5 mb-5 border-t border-gray-100 pt-3">
                    {pkg.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-[#44534C] shrink-0" />
                        <span className="truncate font-light">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onBookPackage(pkg.title)}
                    className="w-full py-2.5 bg-[#44534C] hover:bg-[#35423C] text-white rounded-xl text-xs font-medium uppercase tracking-[0.2em] transition-all cursor-pointer shadow-xs hover:shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Inquire for Dates</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Sideways Motion Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {PACKAGES_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const cardWidth = scrollContainerRef.current.firstElementChild
                    ? (scrollContainerRef.current.firstElementChild as HTMLElement).offsetWidth + 24
                    : 410;
                  scrollContainerRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
                  setCurrentSlideIndex(idx);
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                currentSlideIndex === idx
                  ? 'w-8 bg-[#44534C]'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to package ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
