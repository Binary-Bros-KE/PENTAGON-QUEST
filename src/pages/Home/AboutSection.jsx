import { motion } from 'framer-motion';
import { FaCompass, FaRoute, FaUsers } from 'react-icons/fa';

const aboutImage = '/climbing-mt-kenya.jpg';

const stats = [
  { value: 'KE.', label: 'Proudly Kenyan' },
  { value: '24/7', label: 'Travel accessibility' },
  { value: 'E.A.', label: 'East Africa expertise' },
];

const pillars = [
  {
    icon: FaCompass,
    title: 'Dream-first planning',
    text: 'We start by understanding the feeling, purpose, and pace of your trip before shaping the itinerary.',
  },
  {
    icon: FaRoute,
    title: 'Custom-fit routes',
    text: 'From weekend getaways to complex business travel, every journey is tailored around your needs.',
  },
  {
    icon: FaUsers,
    title: 'Human support',
    text: 'Our team stays available, practical, and close so travel feels organized from start to finish.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white mx-2 py-24 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div
            className="aspect-[4/5] min-h-[32rem] rounded bg-cover bg-center shadow-[0_28px_80px_rgba(26,26,26,0.14)] max-md:mr-2"
            style={{
              backgroundImage: aboutImage
                ? `url("${aboutImage}")`
                : 'linear-gradient(135deg, rgba(0,201,215,0.88), rgba(255,107,53,0.88))',
            }}
          >
            <div className="h-full w-full rounded bg-dark/20"></div>
          </div>

          <div className="absolute -bottom-7 right-5 max-w-xs rounded bg-dark p-6 text-white shadow-[0_22px_60px_rgba(26,26,26,0.28)]">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">Our promise</p>
            <p className="mt-3 text-2xl font-black leading-tight">
              We do not just sell packages. We design travel solutions.
            </p>
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-primary"
          >
            About Pentagon Quest
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-dark leading-[1.02]"
          >
            A Kenyan travel company built around care, flexibility, and detail.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-relaxed text-gray"
          >
            Based in Nairobi, Pentagon Quest provides leisure, business, safari, and exclusive travel services for individuals and groups. Our work is rooted in professional standards, ethical service, and the belief that excellent travel is created through near-obsessive attention to detail.
          </motion.p>

          <div className="mt-9 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded border border-border bg-muted p-4">
                <p className="text-2xl font-black text-dark">{stat.value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-gray">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 grid gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div key={pillar.title} className="flex gap-4 rounded border border-border bg-white p-5 shadow-sm">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-primary/10 text-primary">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-dark">{pillar.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray">{pillar.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
