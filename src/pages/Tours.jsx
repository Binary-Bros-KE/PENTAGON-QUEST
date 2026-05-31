import ContactSection from './Home/ContactSection';
import DestinationsSection from './Home/DestinationsSection';
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
      <DestinationsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
