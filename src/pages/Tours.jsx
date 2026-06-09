import ContactSection from './Home/ContactSection';
import CurrentToursSection from './Home/CurrentToursSection';
import DestinationsSection from './Home/DestinationsSection';
import GallerySection from './Home/GallerySection';
import ServicesSection from './Home/ServicesSection';
import PageIntro from './PageIntro';

export default function Tours() {
  return (
    <div className="bg-white">
      <PageIntro
        eyebrow="Tours and safaris"
        title="Kenyan getaways, African safaris, and international escapes."
        text="Explore custom local and international tours designed around your destination, timing, comfort level, and travel goals."
        image="/tours/tours-n-travel.png"
      />
      <CurrentToursSection compact />
      <DestinationsSection />
      <GallerySection
        limit={16}
        eyebrow="Tour gallery"
        title="A closer look at the experiences."
        text="Browse a preview of the places, groups, routes, and travel moments connected to our tours and safaris."
      />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
