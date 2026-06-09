import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDownload, FaPhone, FaWhatsapp } from 'react-icons/fa';

const safariPackages = [
  { tour: 'Amboseli', duration: '3 Days', price: 'USD 800' },
  { tour: 'Maasai Mara & Lake Nakuru', duration: '4 Days', price: 'USD 1,350' },
  { tour: 'Maasai Mara, Lake Nakuru & Lake Naivasha', duration: '5 Days', price: 'USD 1,750' },
  { tour: 'Maasai Mara, Lake Nakuru & Amboseli', duration: '6 Days', price: 'USD 2,050' },
  { tour: 'Maasai Mara, Lake Nakuru, Naivasha & Amboseli', duration: '7 Days', price: 'USD 2,400' },
];

const inclusions = [
  'Private 4x4 safari jeep / Land Cruiser',
  'Airport transfer and hotel pick up / drop off',
  'Accommodation and meals',
  'Park entry and local taxes',
  'Professional driver guide',
  'Bottled drinking water',
];

export default function CurrentToursSection({ compact = false }) {
  return (
    <section className="bg-light px-5 py-24 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded bg-white p-3 shadow-[0_28px_80px_rgba(26,26,26,0.16)]">
            <img
              src="/poster.jpeg"
              alt="Pentagon Quest safari tour brochure"
              className="max-h-[46rem] w-full rounded object-contain"
            />
          </div>
          <a
            href="/poster.jpeg"
            download="pentagon-quest-safari-tour-brochure.jpeg"
            className="absolute bottom-5 left-5 inline-flex min-h-[3rem] items-center justify-center gap-2 rounded bg-dark px-5 py-3 text-xs font-black uppercase tracking-wide text-white shadow-[0_18px_44px_rgba(26,26,26,0.24)] hover:bg-primary transition-colors duration-200"
          >
            <FaDownload size={14} />
            Download Brochure
          </a>
        </motion.div>

        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-primary">Current safari offers</p>
          <h2 className="text-4xl font-black leading-tight text-dark md:text-5xl">
            Book your Kenya safari package with Pentagon Quest.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray">
            Explore Amboseli, Maasai Mara, Lake Nakuru, Lake Naivasha, and multi-park safari circuits with shared per-person packages that include the key travel essentials.
          </p>

          <div className="mt-8 overflow-hidden rounded border border-border bg-white shadow-sm">
            <div className="grid grid-cols-[1.4fr_0.7fr_0.8fr] bg-dark px-4 py-3 text-xs font-black uppercase tracking-wide text-white md:text-sm">
              <span>Safari tour</span>
              <span>Duration</span>
              <span>Price p/p</span>
            </div>
            {safariPackages.slice(0, compact ? 3 : safariPackages.length).map((item) => (
              <div
                key={item.tour}
                className="grid grid-cols-[1.4fr_0.7fr_0.8fr] gap-3 border-t border-border px-4 py-4 text-sm md:text-base"
              >
                <span className="font-black text-dark">{item.tour}</span>
                <span className="font-black uppercase text-primary">{item.duration}</span>
                <span className="font-black text-dark">{item.price}</span>
              </div>
            ))}
          </div>

          {!compact && (
            <div className="mt-8 rounded border border-border bg-white p-6">
              <h3 className="text-xl font-black text-dark">Packages include</h3>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {inclusions.map((item) => (
                  <div key={item} className="flex gap-3 text-sm font-bold text-gray">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+254718620982"
              className="inline-flex min-h-[3.5rem] items-center justify-center gap-3 rounded bg-primary px-7 py-4 text-sm font-black uppercase tracking-wide text-white hover:bg-primary-dark transition-colors duration-200"
            >
              <FaPhone size={15} />
              Call to Book
            </a>
            <a
              href="https://wa.me/254718620982?text=Hello%20Pentagon%20Quest%2C%20I%20would%20like%20to%20book%20a%20safari%20tour."
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[3.5rem] items-center justify-center gap-3 rounded border border-border bg-white px-7 py-4 text-sm font-black uppercase tracking-wide text-dark hover:border-primary hover:text-primary transition-colors duration-200"
            >
              <FaWhatsapp size={18} />
              WhatsApp
            </a>
            {compact && (
              <Link
                to="/current-tours"
                className="inline-flex min-h-[3.5rem] items-center justify-center rounded bg-dark px-7 py-4 text-sm font-black uppercase tracking-wide text-white hover:bg-primary transition-colors duration-200"
              >
                View All Offers
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
