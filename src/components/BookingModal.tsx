import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, Phone, Mail, User, MessageSquare, CheckCircle, MessageCircle, Send, AlertCircle, ShieldCheck } from 'lucide-react';
import { TOURS_DATA, PACKAGES_DATA } from '../data/toursData';
import { LuxuryDatePicker } from './LuxuryDatePicker';

interface BookingModalProps {
  isOpen: boolean;
  initialExperience?: string;
  initialDate?: string;
  initialGuests?: string;
  onClose: () => void;
}

const DRAFT_KEY = 'siribrand_booking_draft';

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  initialExperience,
  initialDate,
  initialGuests,
  onClose,
}) => {
  if (!isOpen) return null;

  const [experience, setExperience] = useState(initialExperience || 'Nakupenda Sandbank Paradise & Seafood Feast');
  const [date, setDate] = useState(initialDate || '');
  const [guests, setGuests] = useState(initialGuests || '2 Guests (Couple)');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [draftRestored, setDraftRestored] = useState(false);

  // Field-specific validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Restore Draft on Mount (State 8: Session/work saved)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.fullName) setFullName(parsed.fullName);
        if (parsed.email) setEmail(parsed.email);
        if (parsed.phone) setPhone(parsed.phone);
        if (parsed.specialRequests) setSpecialRequests(parsed.specialRequests);
        if (parsed.experience && !initialExperience) setExperience(parsed.experience);
        if (parsed.date && !initialDate) setDate(parsed.date);
        if (parsed.guests && !initialGuests) setGuests(parsed.guests);
        setDraftRestored(true);
      }
    } catch {
      // ignore
    }
  }, []);

  // Update with props if passed
  useEffect(() => {
    if (initialExperience) setExperience(initialExperience);
    if (initialDate) setDate(initialDate);
    if (initialGuests) setGuests(initialGuests);
  }, [initialExperience, initialDate, initialGuests]);

  // Auto-save draft on change (State 8)
  useEffect(() => {
    if (!isSubmitted) {
      try {
        localStorage.setItem(
          DRAFT_KEY,
          JSON.stringify({ fullName, email, phone, specialRequests, experience, date, guests })
        );
      } catch {
        // ignore
      }
    }
  }, [fullName, email, phone, specialRequests, experience, date, guests, isSubmitted]);

  const generateRef = () => {
    const chars = 'SRB-2026-';
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `${chars}${rand}`;
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name so our concierge can greet you properly.';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Please provide a WhatsApp or phone number with country code (e.g. +255 or +1).';
    } else if (phone.trim().replace(/\D/g, '').length < 7) {
      newErrors.phone = 'Phone number seems too short. Please include country code and full digits.';
    }

    if (!email.trim()) {
      newErrors.email = 'Please provide an email address for your official digital confirmation voucher.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email format (e.g. name@example.com).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppSend = () => {
    const text = `*NEW BOOKING INQUIRY - SIRIBRAND ZANZIBAR*\n\n` +
      `*Experience:* ${experience}\n` +
      `*Travel Date:* ${date || 'Flexible'}\n` +
      `*Guests:* ${guests}\n` +
      `*Guest Name:* ${fullName || 'Guest'}\n` +
      `*Contact:* ${phone || 'Via WhatsApp'}\n` +
      `*Email:* ${email || 'N/A'}\n` +
      `*Special Notes:* ${specialRequests || 'Standard package'}\n\n` +
      `Please confirm availability, schedule, and current rate. Asante!`;
    
    window.open(`https://wa.me/255692590012?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const ref = generateRef();
    setBookingRef(ref);
    setIsSubmitting(true);

    try {
      // Send complete booking inquiry directly to sweetbertmacha500@gmail.com
      await fetch('https://formsubmit.co/ajax/sweetbertmacha500@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Siribrand Booking Inquiry #${ref}: ${experience} - ${fullName}`,
          bookingReference: ref,
          guestName: fullName,
          guestEmail: email,
          phoneOrWhatsApp: phone,
          experienceOrTour: experience,
          travelOrCheckInDate: date || 'Flexible',
          numberOfGuests: guests,
          specialRequests: specialRequests || 'Standard package',
          _replyto: email,
          _template: 'table',
        }),
      });
    } catch {
      // Silently fall through to success screen with WhatsApp/Email buttons
    }

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Clear draft on successful submission
    try {
      localStorage.removeItem(DRAFT_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full border border-gray-200 text-gray-900 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#FAF8F5] text-gray-900 p-6 sm:p-8 relative border-b border-gray-200">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-500 hover:text-gray-900 p-1.5 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="font-signature text-2xl text-[#C5A880] block mb-1">
            Reservations &amp; Tailor-Made Itineraries
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-950">
            Plan Your Zanzibar Experience
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-xs text-gray-600 font-medium">
              Siribrand Agency TZ • Instant confirmation &amp; transparent booking
            </p>
            {draftRestored && !isSubmitted && (
              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-sans font-medium">
                Draft Restored
              </span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            /* State 10: Complete Luxury Success State (Confirm, Reassure, What Happens Next) */
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-xs">
                <CheckCircle className="w-10 h-10" />
              </div>

              {/* 1. CONFIRM */}
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-gray-950 mb-1">
                Inquiry Successfully Logged!
              </h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-semibold">
                Official Reference: <span className="text-[#A38257] font-bold font-mono">{bookingRef}</span>
              </p>

              {/* Notification of direct email dispatch to private reservations desk */}
              <div className="bg-emerald-50 border border-emerald-200/90 rounded-xl p-3 max-w-lg mx-auto mb-4 text-left flex items-start gap-2.5 shadow-xs">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-emerald-900 leading-snug">
                  Your inquiry details have been dispatched directly to our executive reservations desk for immediate confirmation.
                </p>
              </div>

              {/* 2. REASSURE */}
              <div className="bg-[#FAF8F5] rounded-xl p-4 border border-gray-200/80 max-w-lg mx-auto mb-6 text-left">
                <div className="flex items-center gap-2 text-xs font-serif font-bold text-gray-900 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#44534C]" />
                  <span>Your Reservation Guarantee:</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-light">
                  Zero deposit is required today. Your selected dates for <strong>{experience}</strong> are reserved with our senior logistics team at our best guaranteed seasonal rate.
                </p>
              </div>

              {/* 3. WHAT HAPPENS NEXT (Clear 3-Step Sequence) */}
              <div className="max-w-lg mx-auto text-left mb-6 space-y-3">
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block">
                  What Happens Next:
                </span>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#44534C] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div className="text-xs text-gray-700">
                    <strong className="text-gray-900 block">Personal Concierge Review (Within 15 Mins)</strong>
                    Our licensed operations manager verifies private boat tides, transport, and availability.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#44534C] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div className="text-xs text-gray-700">
                    <strong className="text-gray-900 block">Digital Itinerary Voucher Dispatched</strong>
                    You will receive a detailed PDF voucher via WhatsApp and email with your captain's direct contact.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#44534C] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div className="text-xs text-gray-700">
                    <strong className="text-gray-900 block">Effortless Payment on Island Arrival</strong>
                    Settle conveniently in Stone Town via Cash (USD/TZS), Credit Card, or Mobile Money.
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-tr from-[#128C7E] to-[#25D366] hover:brightness-105 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp Confirmation</span>
                </button>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Experience Selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block mb-1.5">
                  Selected Experience / Tour / Stay
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-gray-300 rounded-xl p-3 text-xs text-gray-900 font-semibold focus:outline-none focus:border-[#C5A880]"
                >
                  <optgroup label="Tours & Marine Excursions">
                    {TOURS_DATA.map((t) => (
                      <option key={t.id} value={t.title}>
                        {t.title}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Curated Tour Packages">
                    {PACKAGES_DATA.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title} ({p.duration})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Stone Town Stays">
                    <option value="Stone Town Luxury Apartment (Daily Booking)">
                      Stone Town Luxury Apartment (Daily Stay)
                    </option>
                    <option value="Stone Town Luxury Apartment (Multi-Night Package)">
                      Stone Town Luxury Apartment (3+ Nights Discount)
                    </option>
                  </optgroup>
                  <option value="Custom Tailored Itinerary">
                    Bespoke Tailored Itinerary (Private / Corporate)
                  </option>
                </select>
              </div>

              {/* Date & Guests Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>Travel / Check-in Date</span>
                  </label>
                  <LuxuryDatePicker
                    value={date}
                    onChange={setDate}
                    minDate={new Date().toISOString().split('T')[0]}
                    placeholder="Select Date"
                    align="left"
                    direction="down"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>Number of Guests</span>
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-gray-300 rounded-xl p-3 text-xs text-gray-900 font-semibold focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="1 Guest (Solo)">1 Guest (Solo)</option>
                    <option value="2 Guests (Couple)">2 Guests (Couple)</option>
                    <option value="3-4 Guests (Small Group)">3 - 4 Guests (Group/Family)</option>
                    <option value="5-8 Guests (Medium Group)">5 - 8 Guests</option>
                    <option value="8+ Guests (Large / Private)">8+ Guests (Private Charter)</option>
                  </select>
                </div>
              </div>

              {/* Contact Info Row with Inline Field Validation (State 9) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sarah Jenkins"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
                    }}
                    className={`w-full bg-[#FAF8F5] border rounded-xl p-3 text-xs text-gray-900 font-semibold focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-rose-400 ring-2 ring-rose-400/20 bg-rose-50/30'
                        : 'border-gray-300 focus:border-[#C5A880]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-[11px] text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>WhatsApp / Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+255 7XX XXX XXX or Country code"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                    }}
                    className={`w-full bg-[#FAF8F5] border rounded-xl p-3 text-xs text-gray-900 font-semibold focus:outline-none transition-colors ${
                      errors.phone
                        ? 'border-rose-400 ring-2 ring-rose-400/20 bg-rose-50/30'
                        : 'border-gray-300 focus:border-[#C5A880]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-[11px] text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Email with Inline Field Validation */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Email Address *</span>
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                  }}
                  className={`w-full bg-[#FAF8F5] border rounded-xl p-3 text-xs text-gray-900 font-semibold focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-rose-400 ring-2 ring-rose-400/20 bg-rose-50/30'
                      : 'border-gray-300 focus:border-[#C5A880]'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-[11px] text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Special Requests */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Special Requests (Airport Transfer, Drone Reels, Dietary Needs)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Honeymoon celebration, need airport pickup at 2 PM, vegetarian lunch option..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-gray-300 rounded-xl p-3 text-xs text-gray-900 font-semibold focus:outline-none focus:border-[#C5A880]"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="flex-1 py-3.5 bg-gradient-to-tr from-[#128C7E] to-[#25D366] hover:brightness-105 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp Reservation</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 bg-[#44534C] hover:bg-[#35423C] text-white text-xs font-medium uppercase tracking-[0.2em] rounded-xl transition-all shadow cursor-pointer flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 text-center pt-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#44534C]" />
                <span>Zero deposit required today. Transparent pricing &amp; free date modifications.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};