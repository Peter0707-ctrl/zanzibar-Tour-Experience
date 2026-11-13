import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS_DATA } from '../data/toursData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref: sectionRef, isRevealed } = useScrollReveal({ threshold: 0.15 });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="py-12 md:py-16 px-6 md:px-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Exact Lala Salama 2-Column Split: Left Sticky Info, Right Accordions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Common Questions Heading & Contact Link */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 ease-out ${
              isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500 block mb-2 font-light">
              Common Questions
            </span>

            <h2 className="font-signature text-4xl sm:text-5xl text-[#44534C] mb-4 leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light mb-6 max-w-md">
              Everything you need to know before your Zanzibar adventure. Can't find what you're looking for? Feel free to reach out to our local team.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#44534C] hover:text-[#35423C] transition-colors font-medium border-b border-[#44534C]/40 pb-1"
            >
              <span>Contact Us</span>
              <span>→</span>
            </a>
          </div>

          {/* Right Column: Clean Borderless Accordion with Plus/Minus Circles */}
          <div className="lg:col-span-7 divide-y divide-gray-200/80">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-4 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex items-center justify-between gap-4 cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base sm:text-lg text-gray-900 group-hover:text-[#44534C] transition-colors font-normal">
                      {faq.question}
                    </span>

                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 group-hover:border-[#44534C] flex items-center justify-center shrink-0 text-gray-600 group-hover:text-[#44534C] transition-all">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.5]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-2.5 pb-1 text-xs sm:text-sm text-gray-600 leading-relaxed font-light animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
