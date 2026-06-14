import CurrentToursSection from './Home/CurrentToursSection';
import PageIntro from './PageIntro';

export default function CurrentTours() {
  return (
    <div className="bg-white">
      <PageIntro
        eyebrow="Current tours"
        title="Current travel offers now available for booking."
        text="View the latest Pentagon Quest safari and Coast Kenya posters, compare available packages, and contact us by call or WhatsApp to reserve your trip."
        image="/poster_2_COST_KENYA.jpeg"
      />
      <CurrentToursSection mode="stacked" />
    </div>
  );
}
