import CurrentToursSection from './Home/CurrentToursSection';
import PageIntro from './PageIntro';

export default function CurrentTours() {
  return (
    <div className="bg-white">
      <PageIntro
        eyebrow="Current tours"
        title="Safari tour offers now available for booking."
        text="Download the brochure, compare available packages, and contact Pentagon Quest by call or WhatsApp to reserve your safari."
        image="/poster.jpeg"
      />
      <CurrentToursSection />
    </div>
  );
}
