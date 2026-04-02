import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  MessageCircle, 
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Orthodontic Consultation (Braces)',
    date: '',
    time: '10:00 AM - 12:00 PM'
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    date: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: !formData.name,
      phone: !formData.phone,
      date: !formData.date
    };
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.phone && !newErrors.date) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className="pt-52 pb-40 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-32"
        >
          <h4 className="text-primary font-black tracking-[0.4em] uppercase text-xs mb-8">Direct Access</h4>
          <h1 className="text-6xl md:text-[8rem] font-serif text-primary leading-[1] tracking-tighter mb-12">
            Clinical <br />
            <span className="italic opacity-30">Consultation.</span>
          </h1>
          <p className="text-2xl text-slate-500 font-medium leading-[1.8] italic">
            Begin your personal transformation today. High-precision orthodontic care 
            is only one application away.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Enhanced Appointment Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-20 bg-white/50 border-white/60 shadow-[0_40px_80px_-20px_rgba(30,58,138,0.1)]"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-12 tracking-tight italic opacity-30 cursor-default">"The first step to perfection."</h2>
            
            <form className="space-y-10" onSubmit={handleSubmit} noValidate>
              {/* Name Block */}
              <div className="space-y-4">
                <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-2 flex items-center gap-2">
                  Patient Registry Name {errors.name && <AlertCircle size={14} className="text-red-500" />}
                </label>
                <input 
                  type="text" 
                  placeholder="Ishani Gupta" 
                  className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({...formData, name: e.target.value});
                    setErrors({...errors, name: false});
                  }}
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      exit={{ opacity: 0 }}
                      className="error-message"
                    >
                      Fill this out to proceed.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Phone Block */}
              <div className="space-y-4">
                <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-2 flex items-center gap-2">
                  Direct Phone Identity {errors.phone && <AlertCircle size={14} className="text-red-500" />}
                </label>
                <input 
                  type="tel" 
                  placeholder="98765 43210" 
                  className={`form-input ${errors.phone ? 'form-input-error' : ''}`}
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({...formData, phone: e.target.value});
                    setErrors({...errors, phone: false});
                  }}
                />
                <AnimatePresence>
                  {errors.phone && (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      exit={{ opacity: 0 }}
                      className="error-message"
                    >
                      Fill this out to proceed.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Service & Date Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-2">Clinical Service</label>
                  <select 
                    className="form-input appearance-none"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option>Orthodontic Consultation (Braces)</option>
                    <option>Aligners Aesthetic Journey</option>
                    <option>Biological Dentofacial Orthopaedics</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-2 flex items-center gap-2">
                    Session Date {errors.date && <AlertCircle size={14} className="text-red-500" />}
                  </label>
                  <input 
                    type="date" 
                    className={`form-input ${errors.date ? 'form-input-error' : ''}`}
                    value={formData.date}
                    onChange={(e) => {
                      setFormData({...formData, date: e.target.value});
                      setErrors({...errors, date: false});
                    }}
                  />
                  <AnimatePresence>
                    {errors.date && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        exit={{ opacity: 0 }}
                        className="error-message"
                      >
                        Fill this out to proceed.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-2">Selected Time Slot</label>
                <select 
                  className="form-input appearance-none"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                >
                  <option>10:00 AM - 12:00 PM</option>
                  <option>12:00 PM - 02:00 PM</option>
                  <option>04:00 PM - 08:00 PM</option>
                </select>
              </div>

              <motion.button 
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="btn-primary w-full py-6 text-2xl tracking-tighter"
              >
                Schedule Consultation
              </motion.button>
              
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-6 bg-green-50 border border-green-200 text-green-700 rounded-3xl text-center font-bold"
                  >
                    Successfully Submitted! Arjun at Ranchi HQ will contact you soon.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Right Info Section (Long Content) */}
          <div className="space-y-16 lg:pt-14">
            <div>
              <h4 className="text-primary font-black tracking-[0.4em] uppercase text-xs mb-8">Clinical HQ</h4>
              <h2 className="text-5xl md:text-7xl font-serif text-primary tracking-tight leading-tight">Morabadi <br /> <span className="italic opacity-30">Excellence.</span></h2>
            </div>
            
            <div className="space-y-14">
              <div className="flex items-start space-x-8 group">
                <div className="w-16 h-16 bg-primary/5 rounded-[1.5rem] flex items-center justify-center shrink-0 shadow-lg transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white text-primary">
                  <MapPin size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-black font-serif italic mb-2 tracking-tight text-primary">Our Location</h4>
                  <p className="text-slate-500 text-lg leading-relaxed font-bold italic max-w-sm">
                    Barbie Dental Clinic, PM MALL and Ranchi Science Center Road, Morabadi, Ranchi, Jharkhand 834006
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-8 group">
                <div className="w-16 h-16 bg-primary/5 rounded-[1.5rem] flex items-center justify-center shrink-0 shadow-lg transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white text-primary">
                  <Clock size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-black font-serif italic mb-2 tracking-tight text-primary">Service Hours</h4>
                  <div className="text-slate-500 text-lg font-bold italic space-y-1">
                    <div className="flex justify-between w-64"><span>Mon - Sat:</span> <span>10:00 - 08:00 PM</span></div>
                    <div className="flex justify-between w-64 opacity-50 underline decoration-primary/20 italic"><span>Sunday:</span> <span>Private Session Only</span></div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-8 group">
                <div className="w-16 h-16 bg-primary/5 rounded-[1.5rem] flex items-center justify-center shrink-0 shadow-lg transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white text-primary">
                  <Phone size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-black font-serif italic mb-2 tracking-tight text-primary">Direct Path</h4>
                  <div className="text-4xl font-serif font-black text-primary tracking-tighter">06207461073</div>
                  <div className="mt-2 text-[10px] uppercase font-black tracking-widest text-slate-400">Ranchi Clinical Priority Line</div>
                </div>
              </div>
            </div>

            {/* Mission / Trust Info (Long Content) */}
            <div className="p-10 bg-primary/5 rounded-[3rem] border border-primary/10">
              <h4 className="text-primary font-black uppercase text-[10px] tracking-widest mb-6 px-2">Clinical Standards</h4>
              <div className="space-y-4">
                {[
                  "Stereoscopic Digital Diagnostic Workflow",
                  "MDS Specialist Orthodontic Oversight",
                  "Direct Biological Arch Correction",
                  "Morabadi PM Mall Executive Facility"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4 bg-white/50 p-4 rounded-2xl border border-white">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* --- Clinical Location Map --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white glass-card bg-white/40 p-4"
        >
          <div className="w-full h-full min-h-[450px] rounded-[2.5rem] overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.644!2d85.337!3d23.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e10698379447%3A0xe54d92ee2407421f!2sBarbie%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1712071234567!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              title="Barbie Dental Clinic Location"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
