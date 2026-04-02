import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Phone, 
  Award, 
  CheckCircle2, 
  ChevronRight,
  TrendingUp,
  UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Assets
import doctorImg from '../assets/clinic/image5.jpeg';
import clinicImg from '../assets/clinic/image1.jpeg';
import transform1 from '../assets/clinic/image3.jpeg';

const Home = () => {
  const reviews = [
    {
      name: "Harsh Kumar Sinha",
      text: "One of the best dental experiences I've ever had. The dentist is extremely professional, patient, and explains everything clearly. Highly suggested.",
      rating: 5
    },
    {
      name: "Paulina Bara",
      text: "Very good dental clinic. The doctor was polite, explained everything clearly, and the treatment was painless. Clean clinic and friendly staff. Highly recommended.",
      rating: 5
    },
    {
      name: "Vidya Sharma",
      text: "Best doctor for ortho treatment with excellent services. Truly professional hands.",
      rating: 5
    }
  ];

  return (
    <div className="pt-32">
      {/* --- Elite Hero Section --- */}
      <section className="relative min-h-[90vh] flex items-center px-4 overflow-hidden mb-20 md:mb-40">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="flex-1 text-center lg:text-left z-20"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-3 px-6 py-2 bg-primary/5 rounded-full mb-10 border border-primary/10 shadow-sm"
            >
              <TrendingUp size={16} className="text-primary" />
              <span className="text-primary text-xs font-black tracking-[0.2em] uppercase">Ranchi's Leading Orthodontic Center</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-[8rem] font-serif text-primary leading-[1] tracking-tighter mb-10">
              Perfecting <br />
              <span className="text-accent italic underline underline-offset-[20px] decoration-accent/10">Precision</span> <br />
              Smiles.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 mb-14 max-w-xl leading-relaxed font-medium">
              Experience world-class dental mastery led by Dr. Dhananjay Rathod (MDS). 
              Where surgical precision meets artistic dental design in Morabadi, Ranchi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start mb-16">
              <Link to="/contact" className="btn-primary flex items-center justify-center gap-4 py-6 px-14 text-xl group shadow-2xl shadow-primary/20">
                Book Consultation <ArrowRight className="w-7 h-7 group-hover:translate-x-3 transition-transform" />
              </Link>
              <a href="tel:06207461073" className="btn-outline flex items-center justify-center gap-4 py-6 px-14 text-xl group">
                <Phone className="w-7 h-7" /> 06207461073
              </a>
            </div>

            {/* Repositioned Clinical Accolades (Previously on image) */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start mb-16">
              <div className="flex items-center space-x-4 bg-primary/5 px-6 py-4 rounded-3xl border border-primary/10 backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                  <Award className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-black font-serif text-primary">MDS Specialist</div>
                  <div className="text-[9px] uppercase font-black text-slate-400 tracking-widest">Orthodontics</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-accent/5 px-6 py-4 rounded-3xl border border-accent/10 backdrop-blur-sm">
                <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center">
                  <UserCheck className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-black font-serif text-primary italic">4.9/5 Rating</div>
                  <div className="text-[9px] uppercase font-black text-slate-400 tracking-widest">Patient Excellence</div>
                </div>
              </div>
            </div>
            
            {/* Quick Stats Overlapping (Desktop Only) */}
            <div className="hidden lg:flex mt-24 items-center space-x-12 opacity-80">
              <div className="flex flex-col">
                <span className="text-4xl font-serif font-black text-primary italic">15+</span>
                <span className="text-[11px] uppercase font-black text-slate-400 tracking-widest mt-1">Specialist Years</span>
              </div>
              <div className="w-px h-12 bg-primary/10" />
              <div className="flex flex-col">
                <span className="text-4xl font-serif font-black text-primary italic">5000+</span>
                <span className="text-[11px] uppercase font-black text-slate-400 tracking-widest mt-1">Total Smiles</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image & Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="flex-1 relative lg:max-w-xl w-full"
          >
            {/* Main Portrait */}
            <div className="relative z-10 w-full aspect-[1/1.2] rounded-[5rem] overflow-hidden shadow-[0_60px_100px_-30px_rgba(30,58,138,0.3)] border-[15px] border-white backdrop-blur-sm">
              <img src={doctorImg} alt="Dr. Dhananjay Rathod" className="w-full h-full object-cover transition-all duration-[2s]" />
            </div>

            {/* Decoration (Now cleaner without cards) */}
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] z-0" />
            <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] z-0" />
          </motion.div>
        </div>
      </section>

      {/* --- Actual Reviews Section --- */}
      <section className="section-spacing bg-white/30 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl mb-8 md:mb-0">
              <h2 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight">Voices of Trust</h2>
              <p className="text-xl text-slate-500 italic font-medium leading-relaxed">
                Authentic testimonials from our valued patients in Ranchi. Why families choose Dr. Dhananjay Rathod for their orthodontic journey.
              </p>
            </div>
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="text-4xl font-serif font-black text-primary">4.9</div>
                <div className="text-[10px] uppercase font-bold text-slate-400">Google Rating</div>
              </div>
              <div className="w-px h-12 bg-primary/10 self-center" />
              <div className="text-center text-primary">
                <Star size={32} className="fill-current" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {reviews.map((rev, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-12 bg-white/40 group hover:bg-white/60 transition-all duration-500 border-white/50"
              >
                <div className="flex space-x-1 mb-8">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-xl italic text-slate-600 mb-10 leading-relaxed font-medium">"{rev.text}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black uppercase text-sm">
                    {rev.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-primary font-serif italic text-lg">{rev.name}</div>
                    <div className="text-[10px] uppercase tracking-widest font-black text-slate-400">Verified Patient</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Featured Work Preview --- */}
      <section className="section-spacing px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="flex-1 order-2 lg:order-1">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-[4rem] overflow-hidden shadow-2xl border-[15px] border-white aspect-[4/3]"
            >
              <img src={transform1} alt="Smile Case" className="w-full h-full object-cover" />
            </motion.div>
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <h4 className="text-primary font-black tracking-[0.4em] uppercase text-xs mb-8">Clinical Excellence</h4>
            <h2 className="text-5xl md:text-7xl mb-10 leading-tight tracking-tight">Architecting World-Class <span className="italic opacity-30">Smiles</span></h2>
            <p className="text-xl text-slate-600 mb-12 leading-[1.8] font-medium">
              Every transformation is a masterclass in dentofacial orthopaedics. Explore our extensive gallery of life-changing dental results delivered in Ranchi.
            </p>
            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <CheckCircle2 size={24} className="text-primary" />
                <span className="text-lg font-bold">5000+ Success Stories</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle2 size={24} className="text-primary" />
                <span className="text-lg font-bold">14-Month Average Treatment</span>
              </div>
            </div>
            <Link to="/work" className="btn-primary inline-flex items-center gap-4 py-5 px-12 group shadow-xl shadow-primary/10">
              View All Work <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
