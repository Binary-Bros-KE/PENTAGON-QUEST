import ContactSection from './Home/ContactSection';
import MiceSection from './Home/MiceSection';
import PageIntro from './PageIntro';

export default function Mice() {
  return (
    <div className="bg-white">
      <PageIntro
        eyebrow="MICE tourism"
        title="Meetings, incentives, conferences, and exhibitions handled with precision."
        text="We design and manage corporate travel programs that motivate teams, support business goals, and keep group logistics clean."
        image=""
      />
      <MiceSection />
      <ContactSection />
    </div>
  );
}
