import {
  FaArrowRight,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTiktok,
  FaTwitter,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GrMapLocation } from 'react-icons/gr';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Explore',
      links: [
        { name: 'Tours & Safaris', href: '/tours' },
        { name: 'Local & International Tours', href: '/tours' },
        { name: 'MICE Tourism', href: '/mice' },
        { name: 'Airport Transfers', href: '/services' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Trip Planning', href: '/contact' },
        { name: 'Travel Support', href: '/services' },
        { name: 'Air Ticketing', href: '/services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Values', href: '/about' },
        { name: 'Why Choose Us', href: '/about' },
        { name: 'Our Services', href: '/services' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Disclaimer', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/pentagonquest', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://www.instagram.com/pentagonquest', label: 'Instagram' },
    { icon: FaTiktok, href: 'https://tiktok.com/pentagonquest', label: 'Twitter' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/pentagonquest', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative overflow-hidden bg-dark text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-yellow to-secondary"></div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-5 py-14 md:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-10 items-center border-b border-white/10 pb-12">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-secondary">
              Travel smarter
            </p>
            <h3 className="text-3xl md:text-5xl font-black mb-4 text-white">
              Your next escape should feel less ordinary.
            </h3>
            <p className="text-gray-light text-lg max-w-2xl">
              Get handpicked destinations, seasonal offers, and planning notes built for travelers who want the good stuff first.
            </p>
          </div>

          <form
            className="rounded bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="flex flex-col sm:flex-row gap-2">
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email address"
                className="min-h-[3.25rem] flex-1 rounded px-4 text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="min-h-[3.25rem] bg-primary hover:bg-primary-dark text-white px-6 rounded font-bold flex items-center justify-center gap-2 transition-colors duration-200"
              >
                Subscribe <FaArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </motion.section>

      <section className="px-5 pb-12 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <div className="mb-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded bg-white ring-1 ring-white/10">
                  <img src="/logo.png" alt="Pentagon Quest" className="h-11 w-11 object-contain" />
                </span>
                <span className="leading-none">
                  <span className="block text-white font-black text-xl tracking-wide">PENTAGON</span>
                  <span className="block text-primary font-bold text-sm tracking-[0.24em]">QUEST</span>
                </span>
              </div>
              <p className="text-gray-light mt-3 text-sm leading-relaxed">
                Curated travel experiences for people who want vivid places, clean planning, and trips that do not feel copied from everyone else&apos;s itinerary.
              </p>
            </div>

            <div className="mb-8 grid gap-3 text-sm text-gray-light">
              <a href="mailto:info@pentagonquest.com" className="flex items-center gap-3 text-gray-light hover:text-primary transition-colors duration-200">
                <FaEnvelope className="text-primary" size={16} />
                pentagonxquest@gmail.com
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-3 text-gray-light hover:text-primary transition-colors duration-200">
                <FaPhone className="text-primary" size={16} />
                +254718620982 / +254726528015
              </a>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-secondary" size={16} />
                Offices in: Nairobi, Eldoret and Kericho
              </div>
              <div className="flex items-center gap-3">
                <GrMapLocation className="text-secondary" size={16} />
                P.o box 23575-00100 Nairobi, Kenya
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-light mb-4">Follow us on social media</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded border border-white/10 bg-white/5 text-white hover:border-primary hover:bg-primary hover:text-white transition-colors duration-200"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-sm font-black mb-5 text-white uppercase tracking-[0.16em]">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="group inline-flex items-center gap-2 text-gray-light hover:text-primary transition-colors duration-200 text-sm"
                      >
                        <span className="h-px w-0 bg-primary transition-all duration-200 group-hover:w-4"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-white/10"></div>

      <section className="py-6 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-light text-sm">
              &copy; {currentYear} Pentagon Quest. All rights reserved.
            </p>
            <p className="text-gray-light text-sm">
              Designed for adventurers who read the map twice and still take the scenic route.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
