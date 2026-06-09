import ContactSection from './ContactSection';
import CurrentToursSection from './CurrentToursSection';
import DestinationsSection from './DestinationsSection';
import AboutSection from './AboutSection';
import DirectorMessage from './DirectorMessage';
import GallerySection from './GallerySection';
import Hero from './Hero';
import MiceSection from './MiceSection';
import ServicesSection from './ServicesSection';
import TestimonialsSection from './TestimonialsSection';
import WhyChooseUs from './WhyChooseUs';

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Hero />
      <CurrentToursSection compact />
      <AboutSection />
      <ServicesSection />
      <DestinationsSection />
      <GallerySection
        limit={12}
        title="Seen on the road."
        text="A curated preview of trips, places, and experiences from the Pentagon Quest gallery."
      />
      <DirectorMessage />
      <MiceSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
