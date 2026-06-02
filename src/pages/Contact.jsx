import ContactSection from './Home/ContactSection';
import DirectorMessage from './Home/DirectorMessage';
import PageIntro from './PageIntro';

export default function Contact() {
  return (
    <div className="bg-white">
      <PageIntro
        eyebrow="Contact us"
        title="Let us turn the idea into a route."
        text="Reach Pentagon Quest for local tours, international trips, MICE programs, transfers, air ticketing, and custom travel planning."
        image="/contact/traditional-telephone.jpg"
      />
      <ContactSection />
      <DirectorMessage />
    </div>
  );
}
