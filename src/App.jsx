import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  MessageCircle, 
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const BackgroundBubbles = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
    <div className="bubble w-[600px] h-[600px] bg-primary/10 top-[-10%] left-[-5%]" />
    <div className="bubble w-[500px] h-[500px] bg-accent/15 top-[30%] right-[-10%]" />
    <div className="bubble w-[700px] h-[700px] bg-primary/5 bottom-[-5%] left-[10%]" />
    <div className="bubble w-[400px] h-[400px] bg-accent/20 bottom-[40%] right-[20%]" />
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Our Work', path: '/work' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 transition-all duration-500">
        <div className="glass-card rounded-[2rem] px-8 py-4 flex justify-between items-center bg-white/40 backdrop-blur-3xl shadow-xl shadow-primary/5">
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
              <span className="text-white font-serif text-2xl font-bold italic tracking-tighter">DR</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-serif text-xl font-bold leading-tight">Dr. Dhananjay Rathod</span>
              <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest opacity-80">Orthodontic Specialist</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.path} 
                className={`text-sm font-semibold tracking-wide uppercase transition-colors px-2 py-1 relative group ${
                  location.pathname === link.path ? 'text-primary' : 'text-slate-600 hover:text-primary'
                }`}
              >
                {link.label}
                <motion.div 
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary origin-left"
                  initial={false}
                  animate={{ scaleX: location.pathname === link.path ? 1 : 0 }}
                />
              </Link>
            ))}
            <Link to="/contact" className="btn-primary py-3 px-8 shadow-sm">Book Consult</Link>
          </div>

          {/* Mobile Nav Toggle */}
          <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 bg-beige/95 backdrop-blur-2xl flex items-center justify-center pt-20 px-8 lg:hidden"
          >
            <div className="flex flex-col space-y-8 text-center w-full">
              {navLinks.map((link) => (
                <Link 
                  key={link.label} 
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-4xl font-serif text-primary tracking-tight"
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)} 
                className="btn-primary py-5 text-xl"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = () => (
  <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
    <div className="bubble w-[800px] h-[800px] bg-white/5 opacity-10 -bottom-1/2 left-[-10%] blur-[120px]" />
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-20 items-start mb-20">
        <div className="col-span-2 space-y-8">
          <div className="flex items-center space-x-5">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-primary font-serif text-3xl font-black italic tracking-tighter">DR</span>
            </div>
            <h3 className="text-3xl font-serif tracking-tight">Dr. Dhananjay Rathod</h3>
          </div>
          <p className="text-slate-300 max-w-lg text-lg italic leading-[1.8] opacity-80">
            Pioneering world-class orthodontic and dentofacial orthopaedic care in Ranchi. 
            Engineering biological health through perfectly aligned smiles.
          </p>
        </div>
        <div>
          <h4 className="font-black mb-8 uppercase tracking-[0.4em] text-xs text-accent">Contact Path</h4>
          <div className="space-y-4 text-slate-300">
            <div className="flex items-center space-x-3"><MapPin size={18} /> <span>Morabadi, Ranchi</span></div>
            <div className="flex items-center space-x-3"><Phone size={18} /> <span>06207461073</span></div>
          </div>
        </div>
        <div>
          <h4 className="font-black mb-8 uppercase tracking-[0.4em] text-xs text-accent">Explore</h4>
          <ul className="space-y-4 text-slate-300 font-medium">
            {[
              { label: 'Services', path: '/services' },
              { label: 'Our Work', path: '/work' },
              { label: 'About', path: '/about' },
              { label: 'Contact', path: '/contact' }
            ].map(link => (
              <li key={link.label}>
                <Link to={link.path} className="hover:text-white transition-colors duration-300 flex items-center space-x-2">
                  <ChevronRight size={14} /> <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] font-black tracking-widest uppercase opacity-40">
        <span>&copy; {new Date().getFullYear()} Dr. Dhananjay Rathod | Orthodontic specialist</span>
        <span>Morabadi, Ranchi, Jharkhand</span>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setShowStickyCTA(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative selection:bg-primary/20">
      <BackgroundBubbles />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      {/* Floating Elements */}
      <a 
        href="https://wa.me/916207461073" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-[1.5rem] flex items-center justify-center shadow-[0_20px_50px_rgba(37,211,102,0.4)] transition-all hover:scale-110 group"
      >
        <MessageCircle size={32} className="group-hover:animate-pulse" />
      </a>

      {/* Mobile Sticky CTA */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div 
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            exit={{ y: 120 }}
            className="fixed bottom-0 left-0 right-0 z-[90] p-6 bg-white/90 backdrop-blur-3xl border-t border-slate-100 lg:hidden"
          >
            <div className="flex gap-4">
              <Link to="/contact" className="btn-primary flex-1 flex items-center justify-center gap-3 py-4 text-sm uppercase font-black">
                <Calendar size={20} /> Book Now
              </Link>
              <a href="tel:06207461073" className="btn-outline flex-1 flex items-center justify-center gap-3 py-4 text-sm uppercase font-black">
                <Phone size={20} /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
