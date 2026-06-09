import GallerySection from './Home/GallerySection';
import PageIntro from './PageIntro';

export default function Gallery() {
  return (
    <div className="bg-white pb-12">
      <PageIntro
        eyebrow="Gallery"
        title="A classic lookbook of Pentagon Quest moments."
        text="Browse travel memories, group experiences, safaris, destinations, and the visual story behind the journeys we help shape."
        image="/gallery/img-44.png"
      />
      <GallerySection
        title="The full gallery."
        text="Tap any image to view it larger without leaving the page."
        showViewAll={false}
      />
    </div>
  );
}
