import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onNavigateJournal?: () => void;
  currentPage?: 'home' | 'journal';
  onNavigateHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onNavigateJournal,
  currentPage = 'home',
  onNavigateHome
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accommodations', href: '#accommodation', isJournal: false },
    { name: 'Experiences', href: '#tours', isJournal: false },
    { name: 'Packages', href: '#packages', isJournal: false },
    { name: 'Journal', href: '#/journal', isJournal: true },
    { name: 'Contact', href: '#contact', isJournal: false },
  ];

  const handleLinkClick = (e: React.MouseEvent, isJournal: boolean, href: string) => {
    if (isJournal) {
      e.preventDefault();
      setMobileMenuOpen(false);
      if (onNavigateJournal) {
        onNavigateJournal();
      } else {
        window.location.hash = '/journal';
      }
    } else {
      setMobileMenuOpen(false);
      if (currentPage === 'journal' && onNavigateHome) {
        e.preventDefault();
        onNavigateHome();
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage === 'journal' && onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        className={`transition-all duration-300 px-6 md:px-12 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs py-4 text-gray-900 border-b border-gray-100'
            : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" onClick={handleLogoClick} className="flex flex-col group cursor-pointer">
            <span
              className={`font-serif tracking-[0.28em] text-xl sm:text-2xl font-bold uppercase leading-tight transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              SIRIBRAND
            </span>
            <span
              className={`tracking-[0.35em] text-[9px] sm:text-[10px] uppercase font-light mt-0.5 transition-colors ${
                isScrolled ? 'text-[#44534C]' : 'text-white/85'
              }`}
            >
              ZANZIBAR EXPERIENCES
            </span>
          </a>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.isJournal, link.href)}
                className={`text-xs uppercase tracking-[0.25em] font-light transition-colors relative py-1 cursor-pointer ${
                  isScrolled
                    ? 'text-gray-800 hover:text-[#44534C]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Inquire CTA Button */}
            <button
              onClick={onOpenBooking}
              className={`px-7 py-2.5 text-xs uppercase tracking-[0.2em] font-medium rounded-lg transition-all cursor-pointer ${
                isScrolled
                  ? 'bg-[#44534C] hover:bg-[#35423C] text-white shadow-xs'
                  : 'bg-white/20 hover:bg-white text-white hover:text-gray-900 border border-white/60 backdrop-blur-xs'
              }`}
            >
              Inquire
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className={`text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-lg font-medium cursor-pointer ${
                isScrolled ? 'bg-[#44534C] text-white' : 'bg-white text-gray-900'
              }`}
            >
              Inquire
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 rounded-md ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-4 pb-6 px-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-4 text-gray-900 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.isJournal, link.href)}
                className="text-xs uppercase tracking-[0.25em] py-2 border-b border-gray-100 hover:text-[#44534C] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
