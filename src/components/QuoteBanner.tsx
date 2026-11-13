import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const QuoteBanner: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="relative py-16 md:py-20 px-6 overflow-hidden">
      {/* Background with Subtle Parallax Feel */}
      <img
        src="/images/hero-pool-resort.jpg"
        alt="Zanzibar Luxury Atmosphere"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />
      <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Exact Lala Salama Cursive Quote */}
        <blockquote
          className={`stagger-up ${isRevealed ? 'revealed' : ''} font-signature text-3xl sm:text-5xl md:text-6xl text-white leading-tight mb-4 font-light drop-shadow-md`}
          style={{ transitionDelay: '200ms' }}
        >
          "An unforgettable experience, pure magic under the Zanzibar sky"
        </blockquote>

        <cite
          className={`stagger-up ${isRevealed ? 'revealed' : ''} text-xs sm:text-sm text-white/80 not-italic font-light tracking-[0.3em] uppercase block`}
          style={{ transitionDelay: '400ms' }}
        >
          Guest Review • Siribrand Experiences
        </cite>
      </div>
    </section>
  );
};
