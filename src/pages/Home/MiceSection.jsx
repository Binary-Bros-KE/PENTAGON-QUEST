import { motion } from 'framer-motion';
import { FaBriefcase, FaChartLine, FaClipboardCheck, FaHandshake } from 'react-icons/fa';

const miceImage = '/mice-tourism.jpg';

const items = [
  { icon: FaClipboardCheck, label: 'Program design' },
  { icon: FaBriefcase, label: 'Group logistics' },
  { icon: FaChartLine, label: 'Incentive travel' },
  { icon: FaHandshake, label: 'Partner coordination' },
];

export default function MiceSection() {
  return (
    <section id="packages" className="bg-dark px-5 py-24 text-white md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-secondary">MICE tourism</p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Corporate travel that moves people and business forward.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-light">
            East Africa offers exceptional venues for meetings, incentives, conferences, and exhibitions. Pentagon Quest helps design, plan, and manage programs that motivate teams, reward performance, and keep logistics calm.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-4">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55 }}
                  viewport={{ once: true }}
                  className="rounded border border-white/10 bg-white/5 p-5"
                >
                  <Icon className="mb-4 text-primary" size={22} />
                  <p className="text-sm font-bold uppercase tracking-wide text-white">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div
          className="min-h-[34rem] rounded bg-cover bg-center shadow-[0_28px_90px_rgba(0,0,0,0.32)]"
          style={{
            backgroundImage: miceImage
              ? `url("${miceImage}")`
              : 'linear-gradient(135deg, rgba(255,107,53,0.92), rgba(0,201,215,0.72))',
          }}
        >
          <div className="flex h-full min-h-[34rem] items-end rounded bg-dark/25 p-7">
            <div className="rounded bg-white p-6 text-dark shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-primary">Complete support</p>
              <p className="mt-2 text-2xl font-black leading-tight">
                From venue search to guest movement, we manage the moving parts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
