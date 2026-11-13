import React, { useState, useRef, useEffect } from 'react';
import { Users, ChevronDown, Check, X } from 'lucide-react';
import { LuxuryDatePicker } from './LuxuryDatePicker';

interface BookingBarProps {
  onCheckAvailability: (selection: { checkIn: string; checkOut: string; guests: string }) => void;
}

const GUEST_OPTIONS = [
  { id: '1', label: '1 Guest', detail: 'Solo Explorer' },
  { id: '2', label: '2 Guests', detail: 'Couple / Honeymoon' },
  { id: '3', label: '3 Guests', detail: 'Small Group' },
  { id: '4', label: '4 Guests', detail: 'Family Suite' },
  { id: '5', label: '5+ Guests', detail: 'VIP / Private Charter' },
];

export const BookingBar: React.FC<BookingBarProps> = ({ onCheckAvailability }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const guestsRef = useRef<HTMLDivElement>(null);

  const todayStr = new Date().toISOString().split('T')[0];

  // Close guests dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (guestsRef.current && !guestsRef.current.contains(e.target as Node)) {
        setIsGuestsOpen(false);
      }
    };
    if (isGuestsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isGuestsOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability({
      checkIn: checkIn || 'Flexible Dates',
      checkOut: checkOut || 'Flexible Dates',
      guests: guests || '1-2 Guests',
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Exact Lala Salama Style Booking Bar */}
      <div className="bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl border border-gray-200/60 p-3 sm:p-4 shadow-2xl text-gray-800">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {/* Modern Luxury Check-In DatePicker (Opens UPWARDS into the open hero area) */}
          <div className="flex-1">
            <LuxuryDatePicker
              value={checkIn}
              onChange={(val) => {
                setCheckIn(val);
                if (checkOut && val && checkOut < val) {
                  setCheckOut(val);
                }
              }}
              minDate={todayStr}
              placeholder="Check-in Date"
              align="left"
              direction="up"
            />
          </div>

          {/* Modern Luxury Check-Out DatePicker (Opens UPWARDS into the open hero area) */}
          <div className="flex-1">
            <LuxuryDatePicker
              value={checkOut}
              onChange={setCheckOut}
              minDate={checkIn || todayStr}
              placeholder="Check-out Date"
              align="left"
              direction="up"
            />
          </div>

          {/* Modern Luxury Guests Popover (Opens UPWARDS, Default: Guests) */}
          <div ref={guestsRef} className="flex-1 relative">
            <div
              onClick={() => setIsGuestsOpen((prev) => !prev)}
              className={`flex items-center justify-between h-12 px-4 rounded-xl border transition-all duration-200 cursor-pointer select-none ${
                isGuestsOpen
                  ? 'border-[#44534C] ring-2 ring-[#44534C]/15 bg-white shadow-xs'
                  : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50/50'
              }`}
            >
              <div className="flex items-center gap-3 truncate">
                <Users className={`w-4 h-4 shrink-0 transition-colors ${guests ? 'text-[#44534C]' : 'text-gray-400'}`} />
                {guests ? (
                  <span className="text-xs sm:text-sm font-medium text-gray-900 font-sans tracking-tight">
                    {guests}
                  </span>
                ) : (
                  <span className="text-xs sm:text-sm font-normal text-gray-400 font-sans">
                    Guests
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                {guests && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setGuests('');
                    }}
                    className="p-1 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Clear guests selection"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    isGuestsOpen ? 'rotate-180 text-[#44534C]' : ''
                  }`}
                />
              </div>
            </div>

            {/* Guests Popover (Opens UPWARDS) */}
            {isGuestsOpen && (
              <div className="absolute bottom-full mb-3 right-0 w-[270px] sm:w-[290px] bg-white/98 backdrop-blur-md rounded-2xl border border-gray-200/90 shadow-2xl p-3 z-50 animate-fadeIn">
                <div className="px-3 py-2 border-b border-gray-100 mb-2">
                  <span className="text-xs font-serif font-bold text-gray-900 block">
                    Travel Party Size
                  </span>
                  <span className="text-[10px] text-gray-500 font-sans">
                    Select number of guests
                  </span>
                </div>

                <div className="space-y-1">
                  {GUEST_OPTIONS.map((opt) => {
                    const isSelected = guests === opt.label;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setGuests(opt.label);
                          setIsGuestsOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#44534C] text-white font-medium'
                            : 'hover:bg-[#44534C]/10 text-gray-800'
                        }`}
                      >
                        <div>
                          <div className={`text-xs ${isSelected ? 'text-white font-semibold' : 'text-gray-950 font-medium'}`}>
                            {opt.label}
                          </div>
                          <div className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                            {opt.detail}
                          </div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-white shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Check Availability Button - Exact Color from Lala Salama */}
          <button
            type="submit"
            className="h-12 px-8 bg-[#44534C] hover:bg-[#35423C] text-white text-xs uppercase tracking-[0.2em] font-medium rounded-xl transition-all flex items-center justify-center cursor-pointer shrink-0 shadow-sm active:scale-98"
          >
            Check Availability
          </button>
        </form>
      </div>
    </div>
  );
};