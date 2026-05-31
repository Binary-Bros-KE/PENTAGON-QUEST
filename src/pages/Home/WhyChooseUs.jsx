import { motion } from 'framer-motion';
import { FaBolt, FaGem, FaHandshake, FaUserCheck, FaUsersCog } from 'react-icons/fa';

const reasons = [
  {
    icon: FaGem,
    title: 'Exemplary service',
    text: 'High-quality customer care designed to help you experience Kenya, East Africa, and the world with confidence.',
  },
  {
    icon: FaUserCheck,
    title: 'Personalized planning',
    text: 'We custom design travel solutions around your requirements, opportunities, challenges, and travel style.',
  },
  {
    icon: FaUsersCog,
    title: 'Expertise to deliver',
    text: 'Our team brings practical tourism experience and a professional approach to each detail of the journey.',
  },
  {
    icon: FaBolt,
    title: 'Operational efficiency',
    text: 'We pay close attention to coordination, timing, communication, and reliable service delivery.',
  },
  {
    icon: FaHandshake,
    title: 'Trusted relationships',
    text: 'We deliver what we promise, honor obligations, and keep ethics at the center of our work.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-light px-5 py-24 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-primary">Why choose us</p>
          <h2 className="text-4xl md:text-5xl font-black text-dark leading-tight">
            Professional enough for business. Personal enough for the trip of a lifetime.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="rounded border border-border bg-white p-6 shadow-sm"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded bg-secondary/10 text-secondary">
                  <Icon size={21} />
                </div>
                <h3 className="text-lg font-black text-dark">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray">{reason.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
