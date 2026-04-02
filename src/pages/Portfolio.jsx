import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  ArrowRight,
  TrendingUp,
  Award,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Assets
import transform1 from '../assets/clinic/image3.jpeg';
import transform2 from '../assets/clinic/image4.jpeg';
import interiorImg from '../assets/clinic/image2.jpeg';

const PortfolioItem = ({ img, title, desc, clinicalData, idx }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1 }}
    className="glass-card mb-24 overflow-hidden border-white/50 bg-white/40 group hover:shadow-primary/5 shadow-2xl"
  >
    <div className="flex flex-col lg:flex-row gap-0">
      <div className="flex-1 relative overflow-hidden h-[400px] lg:h-auto">
        <img src={img} alt={title} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]" />
        <div className="absolute top-8 left-8 glass-card bg-primary px-8 py-3 text-white text-xs font-black uppercase tracking-widest shadow-2xl">
          Clinical Case #{idx + 1}
        </div>
      </div>
      <div className="flex-1 p-16 flex flex-col justify-center">
        <h3 className="text-4xl md:text-5xl font-serif text-primary tracking-tight mb-8">{title}</h3>
        <p className="text-xl text-slate-500 mb-10 leading-relaxed font-bold italic">"{desc}"</p>
        
        <div className="grid grid-cols-2 gap-8 mb-12">
          {clinicalData.map((data, i) => (
            <div key={i}>
              <div className="text-primary font-serif font-black text-2xl italic">{data.val}</div>
              <div className="text-[10px] uppercase font-black tracking-widest text-slate-400 mt-1">{data.label}</div>
            </div>
          ))}
        </div>
        
        <Link to="/contact" className="btn-primary inline-flex items-center gap-4 py-4 px-10 self-start group shadow-xl shadow-primary/5">
          Consult Similar Case <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </div>
  </motion.div>
);

const Portfolio = () => {
  const cases = [
    {
      img: transform1,
      title: "Arch Expansion Strategy",
      desc: "Severe crowding and narrow dental arch architecture corrected through precision orthodontic expansion.",
      clinicalData: [
        { label: "Treatment Duration", val: "14 Months" },
        { label: "Appliance System", val: "Self-Ligating" },
        { label: "Arch Expansion", val: "+8mm" },
        { label: "Symmetry Gain", val: "100%" }
      ]
    },
    {
      img: transform2,
      title: "Biological Aesthetic Recovery",
      desc: "Complete smile reconstruction using high-aesthetics ceramic systems for a natural, harmonious finish.",
      clinicalData: [
        { label: "Treatment Duration", val: "12 Months" },
        { label: "Appliance System", val: "Elite Ceramic" },
        { label: "Bite Realignment", val: "Precise" },
        { label: "Patient Comfort", val: "Maximum" }
      ]
    }
  ];

  return (
    <div className="pt-52 pb-40 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-32"
        >
          <h4 className="text-primary font-black tracking-[0.4em] uppercase text-xs mb-8">Our Transformations</h4>
          <h1 className="text-6xl md:text-[8rem] font-serif text-primary leading-[1] tracking-tighter mb-12">
            The Evidence <br />
            of <span className="italic opacity-30">Artistry.</span>
          </h1>
          <p className="text-2xl text-slate-500 font-medium leading-[1.8] italic">
            Clinical results are the cornerstone of our practice. Explore how Dr. Dhananjay Rathod transforms 
            biological imbalances into world-class smiles for his Ranchi patients.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div>
          {cases.map((c, i) => (
            <PortfolioItem key={i} {...c} idx={i} />
          ))}
        </div>

        {/* Clinical Hub / Environment (Long Page Feature) */}
        <div className="flex flex-col lg:flex-row gap-24 items-center mt-32 mb-40">
           <div className="flex-1 order-2 lg:order-1">
             <h4 className="text-primary font-black tracking-[0.4em] uppercase text-xs mb-8">Clinical Mastery</h4>
             <h2 className="text-5xl md:text-7xl font-serif text-primary tracking-tight leading-tight mb-10">Where Results <br /> Meet <span className="italic opacity-30">Science.</span></h2>
             <p className="text-xl text-slate-600 leading-[1.8] font-medium mb-12 italic">
               Every patient at our Morabadi HQ receives a customized digital treatment plan. 
               We don't settle for "straight enough"—we engineer clinical perfection using 
               the highest world-standard orthodontic protocols.
             </p>
             <div className="grid grid-cols-2 gap-x-12 gap-y-10 mb-12 opacity-80">
                <div>
                  <TrendingUp className="text-primary w-10 h-10 mb-4" />
                  <div className="text-lg font-bold">Iterative 3D Scans</div>
                </div>
                <div>
                  <Star className="text-primary w-10 h-10 mb-4" />
                  <div className="text-lg font-bold">Elite Case Management</div>
                </div>
                <div>
                  <CheckCircle2 className="text-primary w-10 h-10 mb-4" />
                  <div className="text-lg font-bold">Guaranteed Stability</div>
                </div>
                <div>
                  <Award className="text-primary w-10 h-10 mb-4" />
                  <div className="text-lg font-bold">MDS Clinical Lead</div>
                </div>
             </div>
             <Link to="/contact" className="btn-primary inline-flex items-center gap-4 py-5 px-12 group shadow-xl shadow-primary/10">
               Begin Your Transformation <ArrowRight className="group-hover:translate-x-2 transition-transform" />
             </Link>
           </div>
           
           <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 order-1 lg:order-2 relative w-full"
          >
            <div className="aspect-[1/1.2] rounded-[5rem] overflow-hidden shadow-2xl border-[15px] border-white">
              <img src={interiorImg} alt="Clinic Mastery" className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-[2s]" />
            </div>
            <div className="absolute -bottom-10 -left-12 glass-card p-12 bg-white/40 backdrop-blur-3xl shadow-2xl">
              <div className="text-5xl font-black font-serif italic mb-2 text-primary">5,000+</div>
              <div className="text-[10px] uppercase font-black tracking-widest text-slate-500">Documented Results</div>
            </div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-20 bg-primary text-white text-center relative overflow-hidden"
        >
          <div className="bubble w-[600px] h-[600px] bg-white/10 opacity-20 -bottom-1/2 -left-1/4 blur-[100px]" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-serif text-white mb-12 tracking-tight italic">Ready for your Story?</h2>
            <p className="text-2xl text-white/80 font-medium leading-[1.8] mb-12 italic">
              Your transformation begins with a single digital consultation. Let's design 
              the clinical architecture of your new smile.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-primary hover:bg-white/90 py-5 px-16 text-xl shadow-2xl">
              Book Appointment Now
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
