import { motion } from 'framer-motion';

export default function PageIntro({ eyebrow, title, text, image = '' }) {
  return (
    <section className="relative overflow-hidden bg-dark px-5 py-24 text-white md:px-8 md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: image
            ? `url("${image}")`
            : 'linear-gradient(135deg, rgba(0,201,215,0.7), rgba(255,107,53,0.82))',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/75 to-dark/40"></div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-secondary">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-black leading-[1.02] text-white md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/82 md:text-xl">{text}</p>
      </motion.div>
    </section>
  );
}
