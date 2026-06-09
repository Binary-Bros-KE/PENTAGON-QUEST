import AboutSection from './Home/AboutSection';
import DirectorMessage from './Home/DirectorMessage';
import TestimonialsSection from './Home/TestimonialsSection';
import WhyChooseUs from './Home/WhyChooseUs';
import PageIntro from './PageIntro';

export default function About() {
  return (
    <div className="bg-white">
      <PageIntro
        eyebrow="About Pentagon Quest"
        title="A Kenyan travel partner built on care, ethics, and detail."
        text="Pentagon Quest provides leisure, business, safari, and exclusive travel services for clients who want reliable planning and memorable experiences."
        image="/start-here.jpeg"
      />
      <AboutSection />
      <WhyChooseUs />
      <DirectorMessage />
      <TestimonialsSection />
    </div>
  );
}
