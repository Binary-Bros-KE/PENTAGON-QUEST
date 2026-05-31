import ServicesSection from './Home/ServicesSection';
import WhyChooseUs from './Home/WhyChooseUs';
import PageIntro from './PageIntro';

export default function Services() {
  return (
    <div className="bg-white">
      <PageIntro
        eyebrow="Travel services"
        title="Everything you need before, during, and after the journey."
        text="From airport transfers and air ticketing to hotels, safaris, group logistics, and international tours, we coordinate the moving parts."
        image="/services/services.jpg"
      />
      <ServicesSection />
      <WhyChooseUs />
    </div>
  );
}
