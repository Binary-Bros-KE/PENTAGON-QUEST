import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaTimes,
  FaWhatsapp,
} from 'react-icons/fa';
import { ContactModalContext } from './contactModalContext';

const contactOptions = [
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    detail: 'Trip Reservations',
    href: 'https://wa.me/254718620982',
    color: 'text-green-500',
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    detail: 'Travel Support',
    href: 'https://wa.me/254738250686',
    color: 'text-green-500',
  },
  {
    icon: FaPhone,
    title: 'Call Us',
    detail: '0718620982 / 0738250686',
    href: 'tel:+254718620982',
    color: 'text-primary',
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    detail: 'pentagonxquest@gmail.com',
    href: 'mailto:pentagonxquest@gmail.com',
    color: 'text-gray',
  },

];

export function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [requestLabel, setRequestLabel] = useState('Plan a Trip');

  const openContactModal = (label = 'Plan a Trip') => {
    setRequestLabel(label);
    setIsOpen(true);
  };

  const closeContactModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeContactModal();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const value = useMemo(
    () => ({
      openContactModal,
      closeContactModal,
    }),
    []
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/75 px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeContactModal}
          >
            <motion.div
              className="relative w-full max-w-md overflow-hidden rounded bg-white text-dark shadow-[0_30px_100px_rgba(0,0,0,0.36)]"
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
            >
              <div className="h-1.5 bg-gradient-to-r from-primary via-yellow to-secondary"></div>

              <div className="p-6 sm:p-7">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-primary">
                      Contact admin
                    </p>
                    <h2 id="contact-modal-title" className="text-3xl font-black text-dark">
                      Contact Us
                    </h2>
                    <p className="mt-2 text-sm text-gray">
                      For: <span className="font-bold text-dark">{requestLabel}</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={closeContactModal}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-border bg-muted text-dark hover:bg-dark hover:text-white transition-colors duration-200"
                    aria-label="Close contact modal"
                  >
                    <FaTimes size={16} />
                  </button>
                </div>

                <div className="divide-y divide-border">
                  {contactOptions.map((option) => {
                    const Icon = option.icon;

                    return (
                      <a
                        key={`${option.title}-${option.detail}`}
                        href={option.href}
                        target={option.href.startsWith('http') ? '_blank' : undefined}
                        rel={option.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="group flex items-center gap-4 py-4"
                      >
                        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded bg-muted ${option.color}`}>
                          <Icon size={24} />
                        </span>
                        <span>
                          <span className="block font-bold text-dark group-hover:text-primary transition-colors duration-200">
                            {option.title}
                          </span>
                          <span className="block text-sm text-gray">{option.detail}</span>
                        </span>
                      </a>
                    );
                  })}
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-border pt-5 text-xs font-bold text-gray">
                  <span>Kericho Office</span>
                  <span>Eldoret Office</span>
                  <span>Kenyan & International Tours</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ContactModalContext.Provider>
  );
}
