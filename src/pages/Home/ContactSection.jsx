import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { useContactModal } from '../../hooks/useContactModal';

const contactImage = '/start-here.jpg';

export default function ContactSection() {
  const { openContactModal } = useContactModal();

  return (
    <section id="contact" className="bg-dark px-5 py-24 text-white md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-stretch">
        <div
          className="min-h-[32rem] rounded bg-cover bg-center"
          style={{
            backgroundImage: contactImage
              ? `url("${contactImage}")`
              : 'linear-gradient(135deg, rgba(0,201,215,0.9), rgba(255,107,53,0.85))',
          }}
        >
          <div className="flex h-full min-h-[32rem] flex-col justify-end rounded bg-dark/25 p-7">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-white/80">Start here</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-black leading-tight text-white">
              Tell us where you want to go. We will shape the route.
            </h2>
          </div>
        </div>

        <div className="rounded bg-white p-6 text-dark md:p-8">
          <div className="grid gap-4 md:grid-cols-3">
            <a href="tel:+254718620982" className="rounded border border-border bg-muted p-5 hover:border-primary transition-colors duration-200">
              <FaPhone className="mb-4 text-primary" size={20} />
              <p className="text-xs font-black uppercase tracking-wide text-gray">Call</p>
              <p className="mt-2 text-sm font-bold text-dark">+254718620982 / +254726528015 </p>
            </a>
            <a href="mailto:info@pentagonquest.com" className="rounded border border-border bg-muted p-5 hover:border-primary transition-colors duration-200">
              <FaEnvelope className="mb-4 text-primary" size={20} />
              <p className="text-xs font-black uppercase tracking-wide text-gray">Email</p>
              <p className="mt-2 text-sm font-bold text-dark">pentagonxquest @gmail.com</p>
            </a>
            <div className="rounded border border-border bg-muted p-5">
              <FaMapMarkerAlt className="mb-4 text-secondary" size={20} />
              <p className="text-xs font-black uppercase tracking-wide text-gray">Offices</p>
              <p className="mt-2 text-sm font-bold text-dark">Nairobi, Eldoret and <br></br> Kericho</p>
            </div>
          </div>

          <form className="mt-8 grid gap-4" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-4 md:grid-cols-2">
              <input className="min-h-[3.25rem] rounded border border-border px-4 focus:border-primary focus:outline-none" placeholder="Your name" />
              <input className="min-h-[3.25rem] rounded border border-border px-4 focus:border-primary focus:outline-none" placeholder="Email or phone" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input className="min-h-[3.25rem] rounded border border-border px-4 focus:border-primary focus:outline-none" placeholder="Destination" />
              <select className="min-h-[3.25rem] rounded border border-border px-4 focus:border-primary focus:outline-none">
                <option>Travel type</option>
                <option>Kenya safari</option>
                <option>International tour</option>
                <option>MICE / corporate</option>
                <option>Airport transfer</option>
              </select>
            </div>
            <textarea className="min-h-36 rounded border border-border px-4 py-3 focus:border-primary focus:outline-none" placeholder="Tell us what you have in mind"></textarea>
            <button
              type="button"
              onClick={() => openContactModal('Send trip request')}
              className="min-h-[3.5rem] rounded bg-primary px-8 py-4 text-sm font-black uppercase tracking-wide text-white hover:bg-primary-dark transition-colors duration-200"
            >
              Send trip request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
