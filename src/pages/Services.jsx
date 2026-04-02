import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Globe, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Target,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, desc, icon, points, idx }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1 }}
    className="glass-card p-16 bg-white/40 border-white/50 group hover:bg-white/60 transition-all duration-700"
  >
    <div className="w-20 h-20 bg-primary/5 rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-primary transition-colors duration-500">
      <div className="group-hover:text-white transition-colors duration-500">{icon}</div>
    </div>
    <h3 className="text-4xl mb-6 font-serif tracking-tight">{title}</h3>
    <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">{desc}</p>
    <div className="space-y-4 mb-12">
      {points.map((p, i) => (
        <div key={i} className="flex items-center space-x-4">
          <div className="w-1.5 h-1.5 bg-accent/40 rounded-full" />
          <span className="text-sm font-black uppercase tracking-widest text-slate-500">{p}</span>
        </div>
      ))}
    </div>
    <Link to="/contact" className="btn-primary inline-flex items-center gap-4 py-4 px-10 group shadow-lg shadow-primary/5">
      Book Selection <ArrowRight className="group-hover:translate-x-2 transition-transform" />
    </Link>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      title: "Metal & Ceramic Braces",
      desc: "Architectural alignment using traditional and aesthetic brackets. We utilize high-tension biological wires to ensure faster, more comfortable results for Ranchi families.",
      icon: <Award className="w-10 h-10 text-primary" />,
      points: ["Stainless Steel Braces", "Elite Ceramic Braces", "Gold-Plated Systems", "Rapid Alignment Technology"]
    },
    {
      title: "Self-Ligating Systems",
      desc: "Damon and SmartClip technology eliminates elastic ties, reducing friction and tightening visits. A premium solution for patients seeking maximum efficiency and hygiene.",
      icon: <Zap className="w-10 h-10 text-primary" />,
      points: ["Reduced Treatment Time", "Minimal Discomfort", "Better Oral Hygiene", "Fewer Clinical Visits"]
    },
    {
      title: "Clear Aligner Therapy",
      desc: "Virtually invisible and removable 3D-printed aligners. Perfect for professionals and students in Ranchi seeking orthodontic correction without metabolic compromises.",
      icon: <Globe className="w-10 h-10 text-primary" />,
      points: ["Digital Intraoral Scans", "Removable Convenience", "Discreet Aesthetics", "Custom 3D Fabrication"]
    },
    {
      title: "Lingual (Hidden) Braces",
      desc: "Braces placed on the inner surface of teeth. Truly hidden orthodontics for elite patients who demand complete invisibility throughout their smile journey.",
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      points: ["100% Invisible", "Custom Gold Brackets", "No Frontal Profile Change", "Expert Surgical Hands"]
    },
    {
      title: "Dentofacial Orthopaedics",
      desc: "Correcting facial development and jaw growth in children and adults. We treat biological imbalances before they become permanent architectural issues.",
      icon: <Target className="w-10 h-10 text-primary" />,
      points: ["Jaw Growth Guidance", "Functional Appliances", "Surgical Prep", "Bite Mechanics Rebalancing"]
    }
  ];

  return (
    <div className="pt-52 pb-40">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-32"
        >
          <h4 className="text-primary font-black tracking-[0.4em] uppercase text-xs mb-8">Clinical Portfolio</h4>
          <h1 className="text-6xl md:text-8xl font-serif text-primary leading-[1.05] tracking-tight mb-12">
            World-Class Orthodontic <span className="italic opacity-30">Architecture.</span>
          </h1>
          <p className="text-2xl text-slate-500 font-medium leading-[1.8] italic">
            Dr. Dhananjay Rathod (MDS) offers a curated selection of advanced orthodontic 
            treatments tailored to the unique biological and aesthetic needs of his patients in Ranchi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} idx={i} />
          ))}
        </div>
        
        {/* Additional Clinical Info (Long Page Feature) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-40 glass-card p-20 bg-primary text-white relative overflow-hidden"
        >
          <div className="bubble w-[600px] h-[600px] bg-white/10 opacity-20 -top-1/2 -right-1/10 blur-[100px]" />
          <div className="relative z-10 flex flex-col md:flex-row gap-20 items-center">
            <div className="flex-1">
              <h2 className="text-5xl md:text-7xl font-serif text-white mb-10 tracking-tight italic">Why Precision Matters.</h2>
              <p className="text-xl text-white/80 leading-[1.8] italic font-medium">
                Orthodontics is more than just straightening teeth—it is about biological health and facial architecture. 
                Dr. Dhananjay Rathod utilizes digital 3D scans and surgical precision to ensure your bite is as healthy as it is beautiful.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-10 flex-1">
              {[
                { label: "Digital Scans", val: "100%" },
                { label: "Pain Minimization", val: "99%" },
                { label: "Arch Precision", val: "MICRON" },
                { label: "Specialist Care", val: "MDS" }
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="text-4xl font-serif font-black mb-2 opacity-50 italic">{stat.val}</div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-white">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
