import { motion } from 'framer-motion';
import { FaEnvelope, FaQuoteLeft, FaRoute, FaStar, FaUsers } from 'react-icons/fa';

const directorImage = '/director/dirctor-pentagon-quest.jpeg';

const offerTips = [
  {
    icon: FaRoute,
    title: 'Custom travel solutions',
    text: 'We listen first, then design local and international trips around your needs, timing, and budget.',
  },
  {
    icon: FaUsers,
    title: 'Business and group travel',
    text: 'Our team supports meetings, incentives, conferences, exhibitions, retreats, and group logistics.',
  },
  {
    icon: FaStar,
    title: 'Detail-led service',
    text: 'Good travel is more than a good price. We focus on reliable planning, care, and memorable experiences.',
  },
];

export default function DirectorMessage() {
  return (
    <section className="bg-white px-5 py-24 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.86fr_1.14fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative min-h-[32rem] overflow-hidden rounded bg-dark shadow-[0_28px_80px_rgba(26,26,26,0.16)]">
            {directorImage ? (
              <img
                src={directorImage}
                alt="Director of Pentagon Quest"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-dark to-primary"></div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-secondary">Director</p>
              <h3 className="mt-2 text-3xl font-black text-white">Pentagon Quest</h3>
              <p className="mt-2 text-sm text-white/75">Tours, travel, safaris and corporate travel solutions.</p>
            </div>
          </div>

          <div className="absolute -right-4 top-8 flex h-16 w-16 items-center justify-center rounded bg-primary text-white shadow-[0_18px_44px_rgba(255,107,53,0.32)] md:-right-8">
            <FaQuoteLeft size={22} />
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-primary"
          >
            Message from the Director
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            viewport={{ once: true }}
            className="text-4xl font-black leading-tight text-dark md:text-5xl"
          >
            Every journey deserves thoughtful planning, honest guidance, and a team that truly cares.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            viewport={{ once: true }}
            className="mt-6 space-y-4 text-lg leading-relaxed text-gray"
          >
            <p>
              Thank you for trusting Pentagon Quest as your travel partner. It is a privilege to help you, your family, your team, or your clients discover places and experiences that stay with you long after the journey ends.
            </p>
            <p>
              Whether you are planning a weekend escape, a family holiday, a safari, an international trip, or a corporate program, my promise is simple: we will listen carefully, plan professionally, and handle the details with the seriousness your travel deserves.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4">
            {offerTips.map((tip) => {
              const Icon = tip.icon;

              return (
                <div key={tip.title} className="flex gap-4 rounded border border-border bg-muted p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-white text-primary">
                    <Icon size={19} />
                  </span>
                  <div>
                    <h3 className="font-black text-dark">{tip.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray">{tip.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href="mailto:pentagonxquest@gmail.com"
            className="mt-8 inline-flex min-h-[3.25rem] items-center justify-center gap-3 rounded bg-dark px-6 py-3 text-sm font-black uppercase tracking-wide text-white hover:bg-primary transition-colors duration-200"
          >
            <FaEnvelope size={16} />
            pentagonxquest@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
