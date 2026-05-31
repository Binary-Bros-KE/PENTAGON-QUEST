import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import BackToTop from './components/BackToTop';
import { ContactModalProvider } from './components/ContactModal';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home/Home';
import Mice from './pages/Mice';
import Services from './pages/Services';
import Tours from './pages/Tours';

function App() {
  return (
    <Router>
      <ContactModalProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white">
          <Header />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/tours" element={<Tours />} />
                <Route path="/mice" element={<Mice />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </ContactModalProvider>
    </Router>
  );
}

export default App;
