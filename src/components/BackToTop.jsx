import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-sm border border-white/20 bg-primary text-white shadow-[0_18px_42px_rgba(26,26,26,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary md:bottom-8 md:right-8 ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      aria-label="Back to top"
    >
      <FaArrowUp size={16} />
    </button>
  );
}
