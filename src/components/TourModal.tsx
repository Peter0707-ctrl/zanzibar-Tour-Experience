import React, { useState } from 'react';
import { X, Clock, Check, XCircle, Star, MessageCircle } from 'lucide-react';
import type { Tour } from '../types';

interface TourModalProps {
  tour: Tour | null;
  onClose: () => void;
  onBookNow: (tourTitle: string) => void;
}

export const TourModal: React.FC<TourModalProps> = ({ tour, onClose, onBookNow }) => {
  if (!tour) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'details'>('overview');

  const whatsappMessage = encodeURIComponent(
    `Hello Siribrand Zanzibar Tours! I would like to inquire about booking "${tour.title}" (${tour.duration}). Please share current availability and details.`
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 text-gray-900 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative aspect-[16/8] sm:aspect-[21/9] w-full overflow-hidden bg-gray-100">
          <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-[0.2em] bg-white text-gray-900 px-2.5 py-0.5 rounded-full font-medium">
                {tour.categoryLabel}
              </span>
              <div className="flex items-center gap-1 text-xs font-bold text-white bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-full">
                <Star className="w-3.5 h-3.5 fill-[#44534C] text-[#44534C]" />
                <span>{tour.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-white/95 font-medium">
                <Clock className="w-3.5 h-3.5 text-white" />
                <span>{tour.duration}</span>
              </div>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold">{tour.title}</h3>
            <p className="text-xs text-white/90 font-medium tracking-wide mt-1">{tour.subtitle}</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 bg-[#FAF8F5] px-6">
          {[
            { id: 'overview', label: 'Overview & Highlights' },
            { id: 'itinerary', label: 'Day Itinerary' },
            { id: 'details', label: 'Included & Tips' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3.5 px-4 text-xs uppercase tracking-wider font-semibold border-b-2 transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'border-[#44534C] text-gray-950'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {activeTab === 'overview' && (
            <div>
              <h4 className="font-serif text-lg font-bold text-gray-950 mb-3">About This Experience</h4>
              <p className="text-sm text-gray-700 leading-relaxed mb-6 font-normal">
                {tour.longDescription}
              </p>

              <h4 className="font-serif text-lg font-bold text-gray-950 mb-3">Key Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-gray-800">
                    <Check className="w-4 h-4 text-[#44534C] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'itinerary' && (
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-gray-950 mb-2">Step-by-Step Schedule</h4>
              <p className="text-xs text-gray-500 mb-4 font-medium">
                Times can be adapted for private groups and seasonal weather conditions.
              </p>

              <div className="border-l-2 border-[#44534C]/40 ml-3 space-y-6 pl-5 relative">
                {tour.itinerary.map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[27px] top-0 w-3 h-3 rounded-full bg-[#44534C] ring-4 ring-[#FAF8F5]" />
                    <span className="text-[11px] font-mono font-bold text-[#44534C] block mb-1">
                      {step.time}
                    </span>
                    <h5 className="font-serif font-bold text-sm text-gray-950 mb-1">{step.title}</h5>
                    <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'details' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-serif font-bold text-sm mb-3 flex items-center gap-1.5 text-emerald-800">
                    <Check className="w-4 h-4" />
                    <span>What Is Included</span>
                  </h5>
                  <ul className="space-y-2 text-xs text-gray-700">
                    {tour.included.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-serif font-bold text-sm mb-3 flex items-center gap-1.5 text-red-700">
                    <XCircle className="w-4 h-4" />
                    <span>Not Included</span>
                  </h5>
                  <ul className="space-y-2 text-xs text-gray-700">
                    {tour.notIncluded.map((ninc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span>{ninc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h5 className="font-serif font-bold text-sm text-gray-950 mb-2">Recommended What to Bring</h5>
                <div className="flex flex-wrap gap-2">
                  {tour.whatToBring.map((item, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-gray-200 text-xs text-gray-700 font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer (NO PRICES) */}
        <div className="p-6 bg-[#FAF8F5] border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-gray-500 block font-medium">Experience Booking</span>
            <div className="text-base font-serif font-bold text-gray-950">
              Private Custom Itinerary
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/255692590012?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-medium uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inquire</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookNow(tour.title);
              }}
              className="flex-1 sm:flex-none px-6 py-3.5 bg-[#44534C] hover:bg-[#35423C] text-white text-xs font-medium uppercase tracking-[0.2em] rounded-xl transition-all shadow cursor-pointer"
            >
              Inquire Dates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
