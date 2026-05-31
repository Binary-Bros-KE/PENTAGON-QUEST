import { motion } from 'framer-motion';
import {
  FaBuilding,
  FaCarSide,
  FaGlobeAfrica,
  FaHotel,
  FaPlaneDeparture,
  FaTicketAlt,
} from 'react-icons/fa';

const services = [
  {
    icon: FaCarSide,
    title: 'Airport Transfers',
    text: 'Efficient, reliable transfers planned around your arrival, departure, group size, and comfort needs.',
  },
  {
    icon: FaTicketAlt,
    title: 'Air Ticketing',
    text: 'Domestic, regional, and international air ticketing support with practical routing guidance.',
  },
  {
    icon: FaHotel,
    title: 'Hotel Bookings',
    text: 'Affordable, mid-range, and luxury accommodation options matched to your budget and travel style.',
  },
  {
    icon: FaGlobeAfrica,
    title: 'Safaris In Africa',
    text: 'Eastern and Southern Africa safari planning for wildlife, culture, landscapes, and group experiences.',
  },
  {
    icon: FaBuilding,
    title: 'MICE Travel',
    text: 'Meetings, incentives, conferences, and exhibitions with complete program and logistics management.',
  },
  {
    icon: FaPlaneDeparture,
    title: 'Local & International Tours',
    text: 'Kenya getaways, beach tours, city tours, and international escapes across Africa, Europe, UAE, and Asia.',
  },
];

export default function ServicesSection() {
  return (
    <section id="tours" className="bg-light px-5 py-24 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-primary">Our services</p>
            <h2 className="text-4xl md:text-5xl font-black text-dark leading-tight">
              Travel support for the whole journey, not just the booking.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray">
              Pentagon Quest brings together transport, stays, ticketing, tours, and group logistics so every moving part feels intentional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group rounded border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_rgba(26,26,26,0.1)]"
                >
                  <div className="mb-6 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded bg-dark text-white transition-colors duration-300 group-hover:bg-primary">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-black text-dark">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray">{service.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
