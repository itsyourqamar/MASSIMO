import React, { useState } from 'react';

const Academy: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', course: 'Hair Course' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-[var(--side-padding)] w-full">
      <div className="bg-black border border-zinc-900 overflow-hidden w-full">
        <div className="grid lg:grid-cols-2">
          <div className="p-8 md:p-12 lg:p-24 reveal">
            <h2 className="font-serif font-bold mb-6">Join Massimo <br /><span className="text-gold italic">Academy</span></h2>
            <p className="text-zinc-500 mb-10 uppercase tracking-widest text-xs leading-loose">Master the craft. Get certified by Indore's best. Career-ready training in Hair & Makeup.</p>
            
            <ul className="space-y-4 md:space-y-6">
              {['Professional Hair Mastery', 'Advanced Bridal Makeup', 'Job Assistance & Certification'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 md:gap-4 text-zinc-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] reveal" style={{ transitionDelay: `${(idx + 1) * 100}ms` }}>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gold rounded-full flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-zinc-950 p-8 md:p-12 lg:p-24 border-t lg:border-t-0 lg:border-l border-zinc-900 reveal" style={{ transitionDelay: '200ms' }}>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-up py-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gold rounded-full flex items-center justify-center mb-6 md:mb-8 glow-pulse">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif font-bold mb-2 italic">Request Received</h3>
                <p className="text-zinc-500 uppercase tracking-widest text-[9px] md:text-[10px] font-bold">Our Counselor will call you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] mb-8 md:mb-12 text-gold">Inquiry Form</h3>
                
                <div className="reveal" style={{ transitionDelay: '300ms' }}>
                  <input 
                    type="text" required
                    className="w-full bg-transparent border-b border-zinc-800 p-3 md:p-4 focus:border-gold outline-none transition-colors text-white text-[11px] md:text-sm uppercase tracking-widest rounded-none" 
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div className="reveal" style={{ transitionDelay: '400ms' }}>
                  <input 
                    type="tel" required
                    className="w-full bg-transparent border-b border-zinc-800 p-3 md:p-4 focus:border-gold outline-none transition-colors text-white text-[11px] md:text-sm uppercase tracking-widest rounded-none" 
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                
                <div className="reveal" style={{ transitionDelay: '500ms' }}>
                  <select 
                    className="w-full bg-transparent border-b border-zinc-800 p-3 md:p-4 focus:border-gold outline-none transition-colors text-zinc-400 text-[11px] md:text-sm uppercase tracking-widest rounded-none"
                    value={formData.course}
                    onChange={(e) => setFormData({...formData, course: e.target.value})}
                  >
                    <option className="bg-black">Hair Course</option>
                    <option className="bg-black">Makeup Course</option>
                    <option className="bg-black">Self Grooming</option>
                  </select>
                </div>
                
                <button type="submit" className="w-full py-4 md:py-6 bg-gold text-black font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs hover:bg-white active:bg-white transition-all slow-pulse reveal" style={{ transitionDelay: '600ms' }}>
                  Get Course Details
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;