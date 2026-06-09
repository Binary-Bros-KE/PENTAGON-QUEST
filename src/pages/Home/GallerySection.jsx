import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import { galleryImages } from './galleryData';

const sizeClasses = [
  'md:col-span-2 md:row-span-2 aspect-[4/5]',
  'aspect-[4/3]',
  'aspect-[3/4]',
  'aspect-[4/3]',
  'md:col-span-2 aspect-[16/9]',
  'aspect-[3/4]',
];

export default function GallerySection({
  limit = galleryImages.length,
  eyebrow = 'Travel gallery',
  title = 'Moments from the journey.',
  text = 'A visual look at the experiences, routes, groups, and destinations connected to Pentagon Quest.',
  showViewAll = true,
}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const visibleImages = galleryImages.slice(0, limit);

  return (
    <section className="bg-white px-5 py-24 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
            <h2 className="text-4xl font-black leading-tight text-dark md:text-5xl">{title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray">{text}</p>
          </div>

          {showViewAll && limit < galleryImages.length && (
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-primary hover:text-primary-dark"
            >
              View full gallery <FaArrowRight size={14} />
            </Link>
          )}
        </div>

        <div className="grid auto-rows-[13rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleImages.map((image, index) => (
            <motion.button
              key={image}
              type="button"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 8) * 0.035 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden rounded bg-dark text-left shadow-[0_18px_55px_rgba(26,26,26,0.1)] ${
                sizeClasses[index % sizeClasses.length]
              }`}
              aria-label={`Open gallery image ${index + 1}`}
            >
              <img
                src={image}
                alt={`Pentagon Quest gallery ${index + 1}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <img
                src="/logo.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-20 w-20 -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.35] sm:h-24 sm:w-24"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur">
                {String(index + 1).padStart(2, '0')}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-dark/85 px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute -top-14 right-0 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white hover:bg-primary transition-colors duration-200"
                aria-label="Close gallery preview"
              >
                <FaTimes size={16} />
              </button>
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Pentagon Quest gallery preview"
                  className="max-h-[78vh] w-full rounded object-contain shadow-[0_30px_100px_rgba(0,0,0,0.4)]"
                />
                <img
                  src="/logo.png"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.35] sm:h-32 sm:w-32"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
