import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const offers = [
  {
    id: 'coast',
    label: 'Coast Kenya',
    poster: '/poster_2_COST_KENYA.jpeg',
    eyebrow: 'Coast Kenya offers',
    title: 'Beach hotel packages for Watamu, Diani, and Bamburi.',
    text: 'Compare coastal hotel stays for two or three nights, including all-inclusive and breakfast options across selected resorts.',
    whatsapp:
      'https://wa.me/254718620982?text=Hello%20Pentagon%20Quest%2C%20I%20would%20like%20to%20book%20a%20Coast%20Kenya%20package.',
    rows: [
      { name: 'Turtle Bay Beach Club', detail: 'Watamu', price: 'From 26,672' },
      { name: 'Papillon Lagoon Reef', detail: 'Diani', price: 'From 33,896' },
      { name: 'Diani Reef Beach Resort & Spa', detail: 'Diani', price: 'From 47,570' },
      { name: 'Neptune Beach Hotel', detail: 'Bamburi', price: 'From 48,344' },
      { name: 'Diani Sea Lodge', detail: 'Diani', price: 'From 35,702' },
    ],
  },
  {
    id: 'watamu',
    label: 'Watamu',
    poster: '/poster_3_watamu.jpeg',
    eyebrow: 'Watamu coast offer',
    title: 'Watamu Kenya Coast escape with self-drive, SGR, or flight options.',
    text: 'Plan a 3-day, 2-night Watamu coastal getaway with flexible transport choices and inclusions such as meals, transfers, outdoor swimming pool access, and evening entertainment.',
    whatsapp:
      'https://wa.me/254718620982?text=Hello%20Pentagon%20Quest%2C%20I%20would%20like%20to%20book%20the%20Watamu%20Kenya%20Coast%20package.',
    rows: [
      { name: 'Self Drive', detail: '3 Days / 2 Nights', price: 'KES 19,894' },
      { name: 'SGR Package', detail: '3 Days / 2 Nights', price: 'KES 24,394' },
      { name: 'Flight Package', detail: '3 Days / 2 Nights', price: 'KES 45,744' },
    ],
  },
  {
    id: 'safari',
    label: 'Safari Tour',
    poster: '/poster.jpeg',
    eyebrow: 'Safari packages',
    title: 'Kenya safari circuits now available for booking.',
    text: 'Explore Amboseli, Maasai Mara, Lake Nakuru, Lake Naivasha, and multi-park safari circuits with key travel essentials included.',
    whatsapp:
      'https://wa.me/254718620982?text=Hello%20Pentagon%20Quest%2C%20I%20would%20like%20to%20book%20a%20Kenya%20safari%20package.',
    rows: [
      { name: 'Amboseli', detail: '3 Days', price: 'USD 800' },
      { name: 'Maasai Mara & Lake Nakuru', detail: '4 Days', price: 'USD 1,350' },
      { name: 'Maasai Mara, Lake Nakuru & Lake Naivasha', detail: '5 Days', price: 'USD 1,750' },
      { name: 'Maasai Mara, Lake Nakuru & Amboseli', detail: '6 Days', price: 'USD 2,050' },
      { name: 'Maasai Mara, Lake Nakuru, Naivasha & Amboseli', detail: '7 Days', price: 'USD 2,400' },
    ],
  },

];

const inclusions = [
  'Private 4x4 safari jeep / Land Cruiser',
  'Airport transfer and hotel pick up / drop off',
  'Accommodation and meals',
  'Park entry and local taxes',
  'Professional driver guide',
  'Bottled drinking water',
];

function OfferDetails({ offer, compact }) {
  const visibleRows = compact ? offer.rows.slice(0, 3) : offer.rows;

  return (
    <div>
      <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-primary">{offer.eyebrow}</p>
      <h3 className="text-3xl font-black leading-tight text-dark md:text-4xl">{offer.title}</h3>
      <p className="mt-5 text-lg leading-relaxed text-gray">{offer.text}</p>

      <div className="mt-8 overflow-hidden rounded border border-border bg-white shadow-sm">
        <div className="grid grid-cols-[1.4fr_0.7fr_0.8fr] bg-dark px-4 py-3 text-xs font-black uppercase tracking-wide text-white md:text-sm">
          <span>Offer</span>
          <span>Detail</span>
          <span>Price</span>
        </div>
        {visibleRows.map((item) => (
          <div
            key={`${offer.id}-${item.name}`}
            className="grid grid-cols-[1.4fr_0.7fr_0.8fr] gap-3 border-t border-border px-4 py-4 text-sm md:text-base"
          >
            <span className="font-black text-dark">{item.name}</span>
            <span className="font-black uppercase text-primary">{item.detail}</span>
            <span className="font-black text-dark">{item.price}</span>
          </div>
        ))}
      </div>

      {!compact && offer.id === 'safari' && (
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
          href={offer.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[3.5rem] items-center justify-center gap-3 rounded border border-border bg-white px-7 py-4 text-sm font-black uppercase tracking-wide text-dark hover:border-primary hover:text-primary transition-colors duration-200"
        >
          <FaWhatsapp size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

function PosterCard({ offer }) {
  return (
    <motion.div
      key={offer.poster}
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.65 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="overflow-hidden rounded bg-white p-3 shadow-[0_28px_80px_rgba(26,26,26,0.16)]">
        <img
          src={offer.poster}
          alt={`${offer.label} Pentagon Quest offer poster`}
          className="max-h-[46rem] w-full rounded object-contain"
        />
      </div>
    </motion.div>
  );
}

export default function CurrentToursSection({ compact = false, mode = 'tabs' }) {
  const [activeOfferId, setActiveOfferId] = useState(offers[0].id);
  const activeOffer = offers.find((offer) => offer.id === activeOfferId) ?? offers[0];

  return (
    <section className="bg-light px-5 py-24 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-primary">Current offers</p>
            <h2 className="text-4xl font-black leading-tight text-dark md:text-5xl">
              Featured packages ready for booking.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray">
              Select an offer poster, view the key package details, then call or WhatsApp Pentagon Quest to reserve your spot.
            </p>
          </div>

          {compact && (
            <Link
              to="/current-tours"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded bg-dark px-6 py-3 text-sm font-black uppercase tracking-wide text-white hover:bg-primary transition-colors duration-200"
            >
              View All Offers
            </Link>
          )}
        </div>

        {mode === 'stacked' ? (
          <div className="space-y-20">
            {offers.map((offer, index) => (
              <div
                key={offer.id}
                className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <PosterCard offer={offer} />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <OfferDetails offer={offer} compact={false} />
                </div>
              </div>
            ))}
          </div>
        ) : (
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <PosterCard offer={activeOffer} />

          <div>
            <div className="mb-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {offers.map((offer) => (
                <button
                  key={offer.id}
                  type="button"
                  onClick={() => setActiveOfferId(offer.id)}
                  className={`group overflow-hidden rounded border bg-white text-left transition-all duration-200 ${
                    activeOfferId === offer.id
                      ? 'border-primary shadow-[0_18px_44px_rgba(255,107,53,0.16)]'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="relative h-32 bg-dark sm:h-40">
                    <img src={offer.poster} alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent"></div>
                    <span className="absolute bottom-3 left-3 text-xs font-black uppercase tracking-[0.18em] text-white">
                      {offer.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <OfferDetails offer={activeOffer} compact={compact} />
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
