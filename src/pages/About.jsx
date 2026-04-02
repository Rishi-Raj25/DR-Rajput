import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  MapPin, 
  CheckCircle2, 
  Target,
  ArrowRight,
  TrendingUp,
  UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Assets
import doctorImg from '../assets/clinic/image5.jpeg';
import clinicImg from '../assets/clinic/image1.jpeg';

const About = () => {
  return (
    <div className="pt-52 pb-40 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-32"
        >
          <h4 className="text-primary font-black tracking-[0.4em] uppercase text-xs mb-8">Professional Legacy</h4>
          <h1 className="text-6xl md:text-[8rem] font-serif text-primary leading-[1] tracking-tighter mb-12">
            The Mastery <br />
            of Dr. Rathod.
          </h1>
          <p className="text-2xl text-slate-500 font-medium leading-[1.8] italic">
            A decade and a half of clinical excellence in orthodontics and dentofacial orthopaedics, 
            dedicated exclusively to the people of Ranchi.
          </p>
        </motion.div>

        {/* Doctor Section */}
        <div className="flex flex-col lg:flex-row gap-24 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative lg:max-w-xl w-full"
          >
            <div className="aspect-[1/1.2] rounded-[5rem] overflow-hidden shadow-2xl border-[15px] border-white">
              <img src={doctorImg} alt="Dr. Dhananjay Rathod" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 glass-card p-12 bg-primary text-white shadow-2xl">
              <div className="text-5xl font-black font-serif italic mb-2">MDS</div>
              <div className="text-[10px] uppercase font-black tracking-[0.2em] opacity-50">Clinical specialist</div>
            </div>
          </motion.div>

          <div className="flex-1 space-y-10">
            <h2 className="text-5xl md:text-7xl font-serif text-primary tracking-tight leading-tight">Mastering Biological <span className="italic opacity-30">Balance.</span></h2>
            <div className="space-y-8 text-xl text-slate-600 leading-[1.8] font-medium italic">
              <p>
                Dr. Dhananjay Rathod is not just a dentist; he is an **orthodontic architect**. 
                Specializing in **Dentofacial Orthopaedics**, he focuses on how the underlying bone 
                structure influences the final dental aesthetic.
              </p>
              <p>
                With over **5,000 cases** treated in Ranchi, his clinical approach relies on digital precision. 
                From 3D intraoral scans to high-tension biological wires, every tool is used to ensure 
                orthodontic results are achieved faster and with maximum biological health.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              {[
                { icon: <Award />, label: "MDS Orthodontic Specialist" },
                { icon: <CheckCircle2 />, label: "15+ Years Expert Mastery" },
                { icon: <TrendingUp />, label: "Digital Workflow Pioneer" },
                { icon: <UserCheck />, label: "5,000+ Happy Patients" }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-primary/5 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-12">
                    {item.icon}
                  </div>
                  <span className="text-base font-black uppercase tracking-widest text-slate-500">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clinic & Philosophy (Long Page Feature) */}
        <div className="flex flex-col lg:flex-row gap-24 items-center mb-40">
           <div className="flex-1 order-2 lg:order-1">
             <h4 className="text-primary font-black tracking-[0.4em] uppercase text-xs mb-8">Clinical Environment</h4>
             <h2 className="text-5xl md:text-7xl font-serif text-primary tracking-tight leading-tight mb-10">A Sanctuary <br /> of <span className="italic opacity-30">Care.</span></h2>
             <p className="text-xl text-slate-600 leading-[1.8] font-medium mb-10 italic">
               Located in the prestigious **PM Mall, Morabadi**, Ranchi's newest clinical hub. 
               Our facility is designed to be a calming, sterile, and technologically advanced 
               sanctuary where you can begin your transformation journey in peace.
             </p>
             <div className="space-y-6 mb-12">
               <div className="flex items-start space-x-4">
                 <div className="w-2 h-2 bg-accent mt-3 rounded-full" />
                 <p className="text-lg font-bold text-primary/80">World-Class Sterile Protocols (ISA Standards)</p>
               </div>
               <div className="flex items-start space-x-4">
                 <div className="w-2 h-2 bg-accent mt-3 rounded-full" />
                 <p className="text-lg font-bold text-primary/80">Premium Digital 3D Diagnostic Scanners</p>
               </div>
               <div className="flex items-start space-x-4">
                 <div className="w-2 h-2 bg-accent mt-3 rounded-full" />
                 <p className="text-lg font-bold text-primary/80">Ergonomic Specialty Orthodontic Chairs</p>
               </div>
             </div>
             <Link to="/contact" className="btn-primary inline-flex items-center gap-4 py-5 px-12 group shadow-xl shadow-primary/10">
               Visit Ranchi HQ <ArrowRight className="group-hover:translate-x-2 transition-transform" />
             </Link>
           </div>
           
           <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 order-1 lg:order-2 relative w-full"
          >
            <div className="aspect-[4/3] rounded-[5rem] overflow-hidden shadow-2xl border-[15px] border-white">
              <img src={clinicImg} alt="Clinic Hub" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-12 -left-12 glass-card p-12 bg-white/40 backdrop-blur-3xl shadow-2xl">
              <MapPin size={32} className="text-primary mb-4" />
              <div className="text-sm font-black uppercase tracking-widest text-slate-500">Morabadi, Ranchi Hub</div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-20 bg-primary/5 text-center relative overflow-hidden"
        >
          <div className="bubble w-[600px] h-[600px] bg-primary/10 -top-1/2 -left-1/4 blur-[100px]" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-serif text-primary mb-12 tracking-tight italic opacity-30 cursor-default">"We don't just align teeth, we engineer confidence."</h2>
            <div className="w-24 h-1 bg-primary/20 mx-auto mb-10" />
            <p className="text-2xl text-slate-600 font-medium leading-[1.8] italic">
              Our clinical mission is to provide Ranchi with orthodontic results that are 
              built to last a lifetime. Balanced bite. Biological health. Aesthetic perfection.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
