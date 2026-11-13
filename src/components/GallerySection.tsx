import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/toursData';
import { X, Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  const categories = ['All', 'Marine', 'Beaches', 'Culture', 'Wildlife', 'Stays'];

  const filteredImages = filter === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="py-8 md:py-12 px-4 md:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Header - Compact */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <span className="font-signature text-2xl sm:text-3xl text-[#44534C] block mb-0.5">
            Moments in Zanzibar
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 font-bold tracking-tight mb-2">
            Curated Visual Gallery
          </h2>
          <div className="w-10 h-[1.5px] bg-[#44534C] mx-auto mb-2" />
          <p className="text-gray-600 text-xs sm:text-sm font-normal">
            Glimpses of turquoise oceans, ancient carved archways, playful dolphins, and peaceful Stone Town sunsets captured by our team and guests.
          </p>
        </div>

        {/* Category Pills - Compact */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-[#44534C] text-white shadow-xs'
                  : 'bg-[#FAF8F5] text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveModalImage(img.url)}
              className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-pointer shadow-xs hover:shadow-md transition-all"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3 text-white">
                <span className="text-[10px] uppercase tracking-wider font-semibold bg-black/50 px-2 py-0.5 rounded-full self-start">
                  {img.category}
                </span>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-serif font-bold truncate max-w-[80%]">
                    {img.title}
                  </span>
                  <Maximize2 className="w-4 h-4 text-white/80" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveModalImage(null)}
        >
          <button
            onClick={() => setActiveModalImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10"
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
    </section>
  );
};
