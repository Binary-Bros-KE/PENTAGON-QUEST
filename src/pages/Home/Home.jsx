import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import DestinationsSection from './DestinationsSection';
import Hero from './Hero';
import MiceSection from './MiceSection';
import ServicesSection from './ServicesSection';
import TestimonialsSection from './TestimonialsSection';
import WhyChooseUs from './WhyChooseUs';

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <DestinationsSection />
      <MiceSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
