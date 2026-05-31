import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle scroll for sticky bottom strip
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'Tours', path: '#tours' },
    { name: 'Destinations', path: '#destinations' },
    { name: 'Packages', path: '#packages' },
    { name: 'Blog', path: '#blog' },
    { name: 'Contact', path: '#contact' },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#' },
    { icon: FaInstagram, href: '#' },
    { icon: FaTwitter, href: '#' },
  ];

  return (
    <header className="relative z-50">
      {/* Top Strip - Desktop Only */}
      {!isMobile && (
        <div className="bg-dark text-white px-18 py-2.5">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-7">
              <div className="flex items-center gap-2 text-sm text-white/85">
                <FaEnvelope className="text-primary" size={16} />
                <span>pentagonxquest@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/85">
                <FaPhone className="text-primary" size={16} />
                <span>0718620982 / 0738250686</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/85">
                <FaMapMarkerAlt className="text-secondary" size={15} />
                <span>Offices in Kericho & Eldoret</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="text-white/80 hover:text-primary transition-colors duration-200"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Top Strip */}
      {isMobile && (
        <div className="bg-dark text-white px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">Pentagon Quest</span>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="text-white/80 hover:text-primary transition-colors duration-200"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Strip - Sticky */}
      <nav
        className={`bg-white/95 backdrop-blur border-b border-border transition-all duration-300 ${
          isSticky ? 'fixed top-0 left-0 right-0 shadow-[0_16px_45px_rgba(26,26,26,0.08)] z-50' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-white ring-1 ring-border transition-transform duration-200 group-hover:-translate-y-0.5">
              <img src="/logo.png" alt="Pentagon Quest" className="h-11 w-11 object-contain" />
            </span>
            <span className="leading-none">
              <span className="block text-dark font-black text-xl tracking-wide">PENTAGON</span>
              <span className="block text-primary font-bold text-sm tracking-[0.24em]">QUEST</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center gap-2 rounded-full bg-muted px-2 py-2 border border-border">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition-all duration-200 ${
                    link.name === 'Home'
                      ? 'bg-dark text-white shadow-sm'
                      : 'text-dark hover:bg-white hover:text-primary hover:shadow-sm'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

          {!isMobile && (
            <a
              href="#contact"
              className="shrink-0 rounded bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-[0_10px_24px_rgba(255,107,53,0.22)] hover:bg-primary-dark transition-colors duration-200"
            >
              Plan a Trip
            </a>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex h-11 w-11 items-center justify-center rounded border border-border bg-muted text-primary hover:text-primary-dark transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobile && isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-border overflow-hidden"
            >
              <div className="px-4 py-5 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded px-4 py-3 text-dark hover:bg-muted hover:text-primary transition-colors duration-200 font-semibold"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 rounded bg-primary px-4 py-3 text-center text-white font-bold uppercase tracking-wide hover:bg-primary-dark transition-colors duration-200"
                >
                  Plan a Trip
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for sticky nav */}
      {isSticky && !isMobile && <div className="h-24" />}
    </header>
  );
}
