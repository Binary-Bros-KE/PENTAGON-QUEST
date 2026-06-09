import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FaDownload, FaPhone, FaTimes, FaWhatsapp } from 'react-icons/fa';

export default function SafariPromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (sessionStorage.getItem('pentagonSafariPromoSeen')) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem('pentagonSafariPromoSeen', 'true');
    }, 1600);

    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[105] flex items-center justify-center overflow-y-auto bg-dark/75 px-4 py-5 backdrop-blur-sm sm:py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative my-auto grid w-full max-w-[58rem] overflow-hidden rounded bg-white text-dark shadow-[0_30px_100px_rgba(0,0,0,0.4)] md:grid-cols-[0.78fr_1fr]"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="safari-promo-title"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-dark shadow-sm hover:bg-dark hover:text-white transition-colors duration-200 sm:right-4 sm:top-4"
              aria-label="Close safari offer"
            >
              <FaTimes size={15} />
            </button>

            <div className="relative h-56 bg-dark sm:h-72 md:h-auto md:min-h-[31rem]">
              <img src="/poster.jpeg" alt="Pentagon Quest safari tour brochure" className="absolute inset-0 h-full w-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent"></div>
              <a
                href="/poster.jpeg"
                download="pentagon-quest-safari-tour-brochure.jpeg"
                className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded bg-white px-4 py-3 text-xs font-black uppercase tracking-wide text-dark hover:bg-primary hover:text-white transition-colors duration-200"
              >
                <FaDownload size={13} />
                <span className="hidden sm:inline">Download Brochure</span>
                <span className="sm:hidden">Download</span>
              </a>
            </div>

            <div className="max-h-[62vh] overflow-y-auto p-5 sm:p-7 md:max-h-none md:overflow-visible md:p-8">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-primary sm:text-sm">Limited safari packages</p>
              <h2 id="safari-promo-title" className="pr-10 text-2xl font-black leading-tight text-dark sm:text-3xl md:text-4xl">
                Kenya safari offers are now open for booking.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray sm:text-base">
                Choose from Amboseli, Maasai Mara, Lake Nakuru, Lake Naivasha, and combined safari circuits with accommodation, meals, park entries, transfers, and a professional driver guide included.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2 text-center sm:gap-3">
                {['3-7 Days', 'From USD 800', '4x4 Jeep'].map((item) => (
                  <div key={item} className="rounded border border-border bg-muted p-2.5 sm:p-3">
                    <p className="text-[0.68rem] font-black uppercase tracking-wide text-dark sm:text-xs">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href="tel:+254718620982"
                  className="inline-flex min-h-[3rem] items-center justify-center gap-3 rounded bg-primary px-5 py-3 text-xs font-black uppercase tracking-wide text-white hover:bg-primary-dark transition-colors duration-200 sm:min-h-[3.25rem] sm:text-sm"
                >
                  <FaPhone size={14} />
                  Call to Book
                </a>
                <a
                  href="https://wa.me/254718620982?text=Hello%20Pentagon%20Quest%2C%20I%20would%20like%20to%20book%20a%20safari%20tour."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[3rem] items-center justify-center gap-3 rounded bg-dark px-5 py-3 text-xs font-black uppercase tracking-wide text-white hover:bg-primary transition-colors duration-200 sm:min-h-[3.25rem] sm:text-sm"
                >
                  <FaWhatsapp size={17} />
                  WhatsApp
                </a>
                <Link
                  to="/current-tours"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex min-h-[3rem] items-center justify-center rounded border border-border px-5 py-3 text-xs font-black uppercase tracking-wide text-dark hover:border-primary hover:text-primary transition-colors duration-200 sm:col-span-2 sm:min-h-[3.25rem] sm:text-sm"
                >
                  View Current Tours
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
