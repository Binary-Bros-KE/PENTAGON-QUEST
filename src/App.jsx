import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import BackToTop from './components/BackToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
