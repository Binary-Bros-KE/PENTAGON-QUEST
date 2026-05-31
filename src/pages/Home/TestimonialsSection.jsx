import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      'The itinerary felt thoughtful from the first pickup to the last transfer. Everything was organized without making the trip feel rigid.',
    name: 'Corporate group client',
    role: 'Nairobi incentive travel',
  },
  {
    quote:
      'They understood exactly what we wanted: safari, coast, and time to breathe. The planning made the whole trip feel easy.',
    name: 'Family traveler',
    role: 'Kenya holiday package',
  },
  {
    quote:
      'Clear communication, flexible options, and practical support. That is what made the international booking process smooth.',
    name: 'Outbound traveler',
    role: 'International tour planning',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white px-5 py-24 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-primary">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-black text-dark">Travel that feels handled.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded border border-border bg-white p-7 shadow-[0_18px_55px_rgba(26,26,26,0.07)]"
            >
              <div className="mb-6 h-1 w-16 rounded bg-gradient-to-r from-primary to-secondary"></div>
              <p className="text-lg leading-relaxed text-dark">"{testimonial.quote}"</p>
              <div className="mt-8">
                <p className="font-black text-dark">{testimonial.name}</p>
                <p className="text-sm text-gray">{testimonial.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
