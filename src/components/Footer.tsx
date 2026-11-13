import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

interface FooterProps {
  onOpenBooking?: () => void;
  onNavigateJournal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateJournal }) => {
  const [emailInput, setEmailInput] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setNewsletterSubscribed(true);
    }
  };

  return (
    <footer id="contact" className="relative text-white overflow-hidden">
      {/* Background Video with Poster Fallback (High Visibility) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-pool-resort.jpg"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105 pointer-events-none"
      >
        <source src="/videos/ocean-waves.webm" type="video/webm" />
        <source src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Aerial_view_of_sand_beach._Top_view_sea_waves._Drone_footage.webm" type="video/webm" />
      </video>

      {/* Balanced Transparent Gradient - Brightened for Vivid Video Visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65 backdrop-blur-[0.2px] pointer-events-none" />

      {/* Clean Luxury Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-white/20">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5">
            <div className="mb-4">
              <a href="#hero" className="inline-block group cursor-pointer">
                <div className="text-white font-serif tracking-[0.28em] text-2xl font-bold uppercase leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  SIRIBRAND
                </div>
                <div className="text-[#F5D08A] tracking-[0.35em] text-[10px] uppercase font-bold mt-1 drop-shadow-sm">
                  ZANZIBAR EXPERIENCES
                </div>
              </a>
            </div>

            <p className="text-xs text-white/90 leading-relaxed mb-6 font-light max-w-sm drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Curating unforgettable marine excursions, boutique Stone Town accommodations, and authentic Swahili hospitality across Zanzibar.
            </p>

            {/* Social Icons in Frosted Circles */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-[#44534C] hover:text-white flex items-center justify-center text-white border border-white/30 transition-all cursor-pointer backdrop-blur-xs shadow-md"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-[#44534C] hover:text-white flex items-center justify-center text-white border border-white/30 transition-all cursor-pointer backdrop-blur-xs shadow-md"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-4 flex items-center gap-2 drop-shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5D08A]" />
              <span>Navigation</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              <li>
                <a href="#accommodation" className="hover:text-white transition-colors">
                  Accommodations
                </a>
              </li>
              <li>
                <a href="#tours" className="hover:text-white transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Curated Packages
                </a>
              </li>
              <li>
                <a
                  href="#/journal"
                  onClick={(e) => {
                    if (onNavigateJournal) {
                      e.preventDefault();
                      onNavigateJournal();
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-[#F5D08A] font-medium"
                >
                  The Zanzibar Journal →
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-4 flex items-center gap-2 drop-shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5D08A]" />
              <span>Contact Concierge</span>
            </h4>

            <div className="space-y-2.5 text-xs text-white/90 mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5D08A] shrink-0 mt-0.5" />
                <span>Stone Town Historic District, Zanzibar, Tanzania</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F5D08A] shrink-0" />
                <a href="tel:+255692590012" className="hover:text-white transition-colors font-medium">
                  +255 692 590 012
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F5D08A] shrink-0" />
                <a href="mailto:info@siribrandagency.click" className="hover:text-white transition-colors">
                  info@siribrandagency.click
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#F5D08A] font-bold mb-2 drop-shadow-sm">
                Zanzibar Travel Journal
              </div>
              {newsletterSubscribed ? (
                <div className="text-xs text-emerald-300 bg-emerald-950/80 border border-emerald-500/60 p-2.5 rounded-lg shadow-md">
                  ✓ Asante! You are subscribed to our seasonal updates.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full bg-black/50 border border-white/30 rounded-lg px-3 py-2 text-xs text-white placeholder-white/60 focus:outline-none focus:border-white shadow-inner"
                    required
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-[#44534C] hover:bg-[#35423C] text-white rounded-lg text-xs font-medium transition-colors cursor-pointer border border-white/30 shadow-md"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar with Developer Credit ya Kimcharazo */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light tracking-wider text-white/80 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          <div>
            © {new Date().getFullYear()} Siribrand Agency TZ. All Rights Reserved.
          </div>

          {/* DEVELOPED BY PETERJOH YA KIMCHARAZO (WhatsApp direct link: 0673190931) */}
          <div className="flex items-center gap-1.5">
            <span className="text-white/70">Developed by</span>
            <a
              href="https://wa.me/255673190931?text=Habari%20Peterjoh,%20nimependa%20kazi%20yako%20kwenye%20website%20ya%20Siribrand%20Zanzibar%20Tours!"
              target="_blank"
              rel="noopener noreferrer"
              className="font-signature text-xl text-[#F5D08A] hover:text-white transition-all duration-300 hover:scale-110 px-1 tracking-wider drop-shadow-[0_2px_8px_rgba(245,208,138,0.6)] underline decoration-[#F5D08A]/60 underline-offset-4 cursor-pointer"
              title="Chat with Developer Peterjoh on WhatsApp (0673190931)"
            >
              Peterjoh
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span>www.siribrandagency.click</span>
            <span className="hidden sm:inline">•</span>
            <span>Stone Town, Zanzibar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
