import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const heroSlides = [
  {
    image: '/slider/kenyan-safari.jpg',
    fallback: 'linear-gradient(135deg, #0F2A2E 0%, #00C9D7 52%, #FF6B35 100%)',
    eyebrow: 'Kenya, beautifully planned',
    title: 'Safari mornings, coast sunsets, zero guesswork.',
    description:
      'Explore Kenya with custom tours shaped around wildlife, culture, beaches, food, and the moments you actually came for.',
    primaryAction: 'Explore Kenya Tours',
    secondaryAction: 'Build My Trip',
  },
  {
    image: '/slider/kenya-airways.png',
    fallback: 'linear-gradient(135deg, #1A1A1A 0%, #D94E1F 54%, #FFC107 100%)',
    eyebrow: 'Beyond borders',
    title: 'From Nairobi to anywhere worth remembering.',
    description:
      'Pentagon Quest connects Kenyan travelers to international escapes with smart itineraries, clear logistics, and travel support that stays close.',
    primaryAction: 'View International Trips',
    secondaryAction: 'Talk To An Expert',
  },
  {
    image: '/slider/tour-bus.png',
    fallback: 'linear-gradient(135deg, #009CA6 0%, #1A1A1A 48%, #FF6B35 100%)',
    eyebrow: 'Groups, couples, families',
    title: 'Trips with rhythm, detail, and a little wonder.',
    description:
      'Whether it is a honeymoon, team retreat, family holiday, or private adventure, we design the route so the experience feels effortless.',
    primaryAction: 'Plan A Custom Tour',
    secondaryAction: 'See Packages',
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-dark text-white">
      <AnimatePresence>
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, scale: 1.08, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 1.02, x: -50 }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: currentSlide.image
              ? `url("${currentSlide.image}")`
              : currentSlide.fallback,
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/35 to-dark/30"></div>

      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-5 md:px-8 py-28 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-secondary backdrop-blur">
              {currentSlide.eyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-[0.95]">
              {currentSlide.title}
            </h1>
            <p className="text-lg md:text-2xl text-white/85 mb-10 max-w-2xl leading-relaxed">
              {currentSlide.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#tours"
                className="inline-flex min-h-[3.5rem] items-center justify-center rounded bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_18px_38px_rgba(255,107,53,0.32)] hover:bg-primary-dark transition-colors duration-200"
              >
                {currentSlide.primaryAction}
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-[3.5rem] items-center justify-center rounded border border-white/35 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur hover:bg-white hover:text-dark transition-colors duration-200"
              >
                {currentSlide.secondaryAction}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-20 px-5 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex items-center gap-3 max-md:hidden">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`group flex items-center gap-3 rounded-full border px-2 py-2 transition-all duration-300 ${
                  activeSlide === index
                    ? 'border-primary bg-primary/20'
                    : 'border-white/20 bg-white/10 hover:border-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <span
                  className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                    activeSlide === index ? 'bg-primary' : 'bg-white/60 group-hover:bg-white'
                  }`}
                ></span>
                <span
                  className={`overflow-hidden text-left text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
                    activeSlide === index ? 'max-w-40 pr-3 text-white' : 'max-w-0 text-white/0'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={showPreviousSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-dark transition-colors duration-200"
              aria-label="Previous slide"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={showNextSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-dark transition-colors duration-200"
              aria-label="Next slide"
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
