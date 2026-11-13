import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Clock, Maximize2, X, Compass } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/toursData';
import { Footer } from './Footer';

interface JournalPageProps {
  onBackToHome: () => void;
  onOpenBooking: (topic?: string) => void;
}

export const JournalPage: React.FC<JournalPageProps> = ({ onBackToHome, onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  const categories = ['All', 'Marine', 'Beaches', 'Culture', 'Wildlife', 'Stays'];

  const filteredImages = activeCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const articles = [
    {
      id: 'ethical-dolphins',
      title: 'Beneath the Surface: Ethical Dolphin Encounters at Mnemba Atoll',
      category: 'Conservation',
      readTime: '5 min read',
      date: 'November 2026',
      image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1200&q=85',
      excerpt: 'Why responsible distance matters when swimming with wild spinner dolphins in the crystal turquoise lagoons of Zanzibar.',
      author: 'Captain Hamisi • Marine Lead'
    },
    {
      id: 'nakupenda-tides',
      title: 'Vanishing Paradises: The Rhythm of the Sandbanks',
      category: 'Island Guides',
      readTime: '4 min read',
      date: 'October 2026',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
      excerpt: 'How the Indian Ocean tides reveal and submerge the pristine white sands of Nakupenda twice every day.',
      author: 'Siribrand Expedition Team'
    },
    {
      id: 'stone-town-architecture',
      title: 'Carved in Teak: The Historic Sultan Doors of Stone Town',
      category: 'Culture & Heritage',
      readTime: '6 min read',
      date: 'October 2026',
      image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=85',
      excerpt: 'Decoding the brass spikes, Arabic calligraphy, and Indian naval craftsmanship on ancient Swahili doorways.',
      author: 'Zanzibar Heritage Trust'
    },
    {
      id: 'the-rock-story',
      title: 'Where the Ocean Meets the Soul: The Rock at Michamvi',
      category: 'Boutique Dining',
      readTime: '4 min read',
      date: 'September 2026',
      image: '/images/the-rock-zanzibar.jpg',
      excerpt: 'Dining atop a solitary prehistoric coral outcrop surrounded by turquoise high tides on Zanzibar’s eastern peninsula.',
      author: 'Concierge Desk'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col selection:bg-[#44534C] selection:text-white">
      {/* Journal Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Back Button */}
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-gray-700 hover:text-[#44534C] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Home</span>
          </button>

          {/* Logo Center */}
          <div onClick={onBackToHome} className="flex flex-col items-center cursor-pointer group">
            <span className="font-serif tracking-[0.28em] text-lg sm:text-xl font-bold uppercase leading-tight text-gray-900 group-hover:text-[#44534C] transition-colors">
              SIRIBRAND
            </span>
            <span className="tracking-[0.35em] text-[8px] sm:text-[9px] uppercase font-light text-[#44534C]">
              ZANZIBAR JOURNAL
            </span>
          </div>

          {/* Inquire CTA */}
          <button
            onClick={() => onOpenBooking('Journal Inquiry / Custom Itinerary')}
            className="px-5 py-2 bg-[#44534C] hover:bg-[#35423C] text-white text-xs uppercase tracking-[0.2em] font-medium rounded-lg transition-all cursor-pointer shadow-xs"
          >
            Inquire
          </button>
        </div>
      </header>

      {/* Main Journal Content */}
      <main className="flex-grow">
        {/* Editorial Journal Hero Banner */}
        <section className="relative py-16 md:py-24 px-6 md:px-12 bg-[#FAF8F5] border-b border-gray-200/60 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Compass className="w-4 h-4 text-[#44534C]" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#44534C]">
                Field Notes &amp; Island Essays
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-gray-950 tracking-tight mb-4">
              The Zanzibar Journal
            </h1>

            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Stories from the Indian Ocean, conservation updates from local captains, historical notes from Stone Town’s coral stone labyrinth, and visual essays of island life.
            </p>
          </div>
        </section>

        {/* Featured Story */}
        <section className="py-12 md:py-16 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#44534C]">
              Featured Field Note
            </span>
            <span className="text-xs text-gray-500 font-light">Issue 04 • 2026</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF8F5] rounded-2xl overflow-hidden border border-gray-200/80 p-6 md:p-8">
            <div className="lg:col-span-7 aspect-[16/10] overflow-hidden rounded-xl bg-gray-200">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-2.5">
                  <span className="bg-[#44534C] text-white px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider">
                    {articles[0].category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-light">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{articles[0].readTime}</span>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-950 leading-snug mb-3">
                  {articles[0].title}
                </h2>

                <p className="text-sm text-gray-600 leading-relaxed font-light mb-6">
                  {articles[0].excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">
                  {articles[0].author}
                </span>

                <button
                  onClick={() => onOpenBooking(`Experience Linked: ${articles[0].title}`)}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#44534C] hover:text-[#35423C]"
                >
                  <span>Experience This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-8 md:py-12 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="mb-8 flex items-center justify-between border-b border-gray-100 pb-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#44534C]">
              Recent Articles &amp; Dispatches
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <article
                key={article.id}
                className="group flex flex-col justify-between bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-gray-900 text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full shadow-2xs">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 text-[11px] text-gray-500 mb-2 font-light">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-gray-950 mb-2 group-hover:text-[#44534C] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed font-light">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-gray-100 text-xs text-gray-500">
                  <span>{article.author}</span>
                  <span className="text-[#44534C] font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read Story →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Visual Essays / Photography Archive */}
        <section className="py-12 md:py-16 px-6 md:px-12 bg-[#FAF8F5] border-t border-gray-200/80">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="font-signature text-2xl sm:text-3xl text-[#44534C] block mb-0.5">
                Visual Essays
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-gray-900 font-bold tracking-tight mb-2">
                The Zanzibar Photo Archive
              </h2>
              <div className="w-10 h-[1.5px] bg-[#44534C] mx-auto mb-2" />
              <p className="text-gray-600 text-xs sm:text-sm font-normal">
                High-definition photography capturing turquoise sandbanks, ancient carved archways, wild spinner dolphins, and peaceful Stone Town sunsets.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#44534C] text-white shadow-xs'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Photo Grid with Lightbox or State 1: Clean Empty State */}
            {filteredImages.length === 0 ? (
              <div className="py-16 text-center max-w-md mx-auto bg-white rounded-2xl border border-gray-200/80 p-8 shadow-xs">
                <div className="w-14 h-14 rounded-full bg-[#FAF8F5] text-[#44534C] flex items-center justify-center mx-auto mb-3 border border-gray-200">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-lg text-gray-900 mb-1">
                  No dispatches archived under "{activeCategory}" yet
                </h4>
                <p className="text-xs text-gray-500 mb-5 leading-relaxed font-light">
                  Our expedition photographers are currently processing new 4K aerial reels for this category.
                </p>
                <button
                  onClick={() => setActiveCategory('All')}
                  className="px-5 py-2.5 bg-[#44534C] hover:bg-[#35423C] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-xs"
                >
                  Explore All Captures →
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredImages.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveModalImage(img.url)}
                    className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-pointer shadow-xs hover:shadow-lg transition-all"
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3.5 text-white">
                      <span className="text-[10px] uppercase tracking-wider font-semibold bg-black/50 px-2 py-0.5 rounded-full self-start">
                        {img.category}
                      </span>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-serif font-bold truncate max-w-[80%]">
                          {img.title}
                        </span>
                        <Maximize2 className="w-4 h-4 text-white/90" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModalImage(null)}
        >
          <button
            onClick={() => setActiveModalImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={activeModalImage}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}

      {/* Footer with Video */}
      <Footer />
    </div>
  );
};
