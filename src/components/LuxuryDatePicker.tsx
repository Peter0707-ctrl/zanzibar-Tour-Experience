import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface LuxuryDatePickerProps {
  value: string; // Format: YYYY-MM-DD
  onChange: (dateStr: string) => void;
  minDate?: string; // Format: YYYY-MM-DD
  placeholder?: string;
  align?: 'left' | 'right';
  direction?: 'up' | 'down';
  className?: string;
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAYS_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const LuxuryDatePicker: React.FC<LuxuryDatePickerProps> = ({
  value,
  onChange,
  minDate,
  placeholder = 'Select Date',
  align = 'left',
  direction = 'up',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize view year and month based on value, or minDate, or today
  const initialDate = value ? new Date(value) : minDate ? new Date(minDate) : new Date();
  const [viewYear, setViewYear] = useState(
    isNaN(initialDate.getTime()) ? new Date().getFullYear() : initialDate.getFullYear()
  );
  const [viewMonth, setViewMonth] = useState(
    isNaN(initialDate.getTime()) ? new Date().getMonth() : initialDate.getMonth()
  );

  // When value changes from outside, sync view if valid
  useEffect(() => {
    if (value) {
      const d = new Date(value);
      if (!isNaN(d.getTime())) {
        setViewYear(d.getFullYear());
        setViewMonth(d.getMonth());
      }
    }
  }, [value]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Navigate Months
  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((prev) => prev - 1);
    } else {
      setViewMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((prev) => prev + 1);
    } else {
      setViewMonth((prev) => prev + 1);
    }
  };

  // Format Helper: YYYY-MM-DD
  const formatDateKey = (year: number, month: number, day: number): string => {
    const m = String(month + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    return `${year}-${m}-${d}`;
  };

  // Display Formatter: e.g. "Sat, 14 Nov 2026"
  const formatDisplayDate = (dateStr: string): string => {
    if (!dateStr) return '';
    try {
      const parts = dateStr.split('-');
      if (parts.length === 3) {
        const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
        return d.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        });
      }
    } catch {
      // fallback
    }
    return dateStr;
  };

  // Calendar Calculation
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay(); // 0 = Sunday
  const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate();

  const todayStr = new Date().toISOString().split('T')[0];

  const handleSelectDay = (day: number) => {
    const selectedKey = formatDateKey(viewYear, viewMonth, day);
    onChange(selectedKey);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Modern Luxury Input Trigger */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-3 h-12 px-4 rounded-xl border transition-all duration-200 cursor-pointer select-none ${
          isOpen
            ? 'border-[#44534C] ring-2 ring-[#44534C]/15 bg-white shadow-xs'
            : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50/50'
        }`}
      >
        <CalendarIcon className={`w-4 h-4 shrink-0 transition-colors ${value ? 'text-[#44534C]' : 'text-gray-400'}`} />
        <div className="flex-1 truncate">
          {value ? (
            <span className="text-xs sm:text-sm font-medium text-gray-900 font-sans tracking-tight">
              {formatDisplayDate(value)}
            </span>
          ) : (
            <span className="text-xs sm:text-sm font-normal text-gray-400 font-sans">
              {placeholder}
            </span>
          )}
        </div>
        {value && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onChange('');
            }}
            className="p-1 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Clear date"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Floating Bespoke Luxury Calendar Popover */}
      {isOpen && (
        <div
          className={`absolute z-50 p-4 bg-white/98 backdrop-blur-md rounded-2xl border border-gray-200/90 shadow-2xl w-[310px] sm:w-[330px] transition-all transform animate-fadeIn ${
            direction === 'up' ? 'bottom-full mb-3' : 'top-full mt-2'
          } ${align === 'right' ? 'right-0' : 'left-0'}`}
        >
          {/* Header: Month & Year with Subtle Lala Salama Styling */}
          <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-gray-100">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-950 hover:bg-[#44534C]/10 transition-colors cursor-pointer"
              aria-label="Previous month"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="text-center">
              <span className="font-serif font-bold text-sm sm:text-base text-gray-900 tracking-tight">
                {MONTH_NAMES[viewMonth]} {viewYear}
              </span>
            </div>

            <button
              type="button"
              onClick={handleNextMonth}
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-950 hover:bg-[#44534C]/10 transition-colors cursor-pointer"
              aria-label="Next month"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Weekday Labels */}
          <div className="grid grid-cols-7 gap-1 mb-2 text-center">
            {DAYS_SHORT.map((day) => (
              <span
                key={day}
                className="text-[10px] sm:text-[11px] font-semibold text-gray-400 uppercase tracking-wider font-sans"
              >
                {day}
              </span>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {/* Days from previous month */}
            {Array.from({ length: firstDayOfWeek }).map((_, i) => {
              const prevMonthDay = daysInPrevMonth - firstDayOfWeek + i + 1;
              return (
                <div
                  key={`prev-${i}`}
                  className="h-8 sm:h-9 flex items-center justify-center text-xs text-gray-300 font-light select-none"
                >
                  {prevMonthDay}
                </div>
              );
            })}

            {/* Days in current month */}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dateKey = formatDateKey(viewYear, viewMonth, day);
              const isSelected = value === dateKey;
              const isToday = todayStr === dateKey;
              const isDisabled = minDate ? dateKey < minDate : false;

              return (
                <button
                  key={day}
                  type="button"
                  disabled={isDisabled}
                  onClick={() => handleSelectDay(day)}
                  className={`h-8 sm:h-9 w-8 sm:w-9 mx-auto rounded-full text-xs font-sans transition-all duration-150 flex items-center justify-center relative cursor-pointer ${
                    isDisabled
                      ? 'text-gray-300 cursor-not-allowed'
                      : isSelected
                      ? 'bg-[#44534C] text-white font-bold shadow-md scale-105'
                      : 'text-gray-800 hover:bg-[#44534C]/10 hover:text-[#44534C] font-normal'
                  }`}
                >
                  {day}
                  {/* Subtle indicator for today if not selected */}
                  {isToday && !isSelected && (
                    <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#44534C]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Shortcuts Footer */}
          <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
            <button
              type="button"
              onClick={() => {
                const now = new Date();
                setViewYear(now.getFullYear());
                setViewMonth(now.getMonth());
                onChange(todayStr);
                setIsOpen(false);
              }}
              className="text-[#44534C] font-semibold hover:underline cursor-pointer"
            >
              Today
            </button>
            <button
              type="button"
              onClick={() => {
                onChange('');
                setIsOpen(false);
              }}
              className="text-gray-400 hover:text-gray-700 cursor-pointer"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};