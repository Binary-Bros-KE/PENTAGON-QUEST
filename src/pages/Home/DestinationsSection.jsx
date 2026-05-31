import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { useContactModal } from '../../hooks/useContactModal';

const destinations = [
  {
    image: '/tours/safari.jpg',
    title: 'Kenya Safaris',
    tag: 'Maasai Mara, Amboseli, Tsavo',
    text: 'Wildlife routes, scenic lodges, and guided experiences built around the season.',
  },
  {
    image: '/tours/mombasa-beach.jpg',
    title: 'Coastal Escapes',
    tag: 'Diani, Watamu, Lamu',
    text: 'Beach breaks for families, couples, friends, and slow weekends by the ocean.',
  },
  {
    image: '/tours/rope_glide.png',
    title: 'Regional Africa',
    tag: 'East and Southern Africa',
    text: 'Cross-border safaris, group tours, cultural circuits, and incentive travel.',
  },
  {
    image: '/tours/airways.jpg',
    title: 'International Holidays',
    tag: 'UAE, Europe, Asia',
    text: 'Flights, hotels, tours, and practical planning for trips beyond the continent.',
  },
];

export default function DestinationsSection() {
  const { openContactModal } = useContactModal();

  return (
    <section id="destinations" className="bg-white px-5 py-24 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-primary">Featured directions</p>
            <h2 className="text-4xl md:text-5xl font-black text-dark leading-tight">
              Start local. Go global. Keep the planning sharp.
            </h2>
          </div>
          <button
            type="button"
            onClick={() => openContactModal('Request an itinerary')}
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-primary hover:text-primary-dark"
          >
            Request an itinerary <FaArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {destinations.map((destination, index) => (
            <motion.article
              key={destination.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="group relative min-h-[30rem] overflow-hidden rounded bg-dark text-white shadow-[0_24px_70px_rgba(26,26,26,0.14)]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: destination.image
                    ? `url("${destination.image}")`
                    : `linear-gradient(135deg, ${index % 2 === 0 ? '#00C9D7, #1A1A1A' : '#FF6B35, #1A1A1A'})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/55 to-transparent"></div>
              <div className="relative z-10 flex h-full min-h-[30rem] flex-col justify-end p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                  {destination.tag}
                </p>
                <h3 className="text-2xl font-black text-white">{destination.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{destination.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
