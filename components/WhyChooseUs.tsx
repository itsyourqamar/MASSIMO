import React from 'react';

const reasons = [
  {
    title: "Certified Masters",
    desc: "Trained by international experts for high-end results.",
    icon: "01"
  },
  {
    title: "Premium Imports",
    desc: "Only L'Oreal, Kerastase and MAC for our VIPs.",
    icon: "02"
  },
  {
    title: "Elite Ambience",
    desc: "Designed for comfort, privacy and luxury vibe.",
    icon: "03"
  },
  {
    title: "300+ Testimonials",
    desc: "Indore's most recommended premium salon hub.",
    icon: "04"
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-[var(--side-padding)] w-full">
      <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="reveal order-2 lg:order-1">
          <h2 className="font-serif font-bold mb-6 md:mb-8 leading-[1.1]">
            Why Discerning <br />
            Clients Choose <span className="text-gold italic">Massimo</span>
          </h2>
          <p className="text-zinc-500 mb-10 md:mb-16 tracking-wide">
            Crafting perfection is our heritage. We don't just cut hair; we redefine personalities through artistic vision and premium care.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            {reasons.map((reason, idx) => (
              <div 
                key={idx} 
                className="flex flex-col gap-4 md:gap-6 reveal group cursor-default"
                style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="text-gold font-serif text-2xl md:text-3xl italic opacity-30 border-b border-gold/10 w-fit pb-2 group-hover:opacity-100 group-active:opacity-100 transition-opacity">
                  {reason.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 uppercase tracking-[0.2em] text-[10px] md:text-xs">{reason.title}</h4>
                  <p className="text-zinc-500 text-[10px] md:text-xs leading-relaxed uppercase tracking-widest">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative reveal cursor-pointer order-1 lg:order-2" style={{ transitionDelay: '300ms' }}>
          <div className="aspect-[4/5] border border-zinc-900 p-2 md:p-3 bg-zinc-950 w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 active:grayscale-0 hover:opacity-100 active:opacity-100 transition-all duration-1000" 
              alt="Massimo Expert Stylist" 
            />
          </div>
          <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-gold p-6 md:p-10 max-w-[180px] md:max-w-[280px] shadow-2xl glow-pulse z-10">
            <p className="text-black font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[8px] md:text-xs mb-2 md:mb-3 leading-none">Est. 2021</p>
            <p className="text-black text-[8px] md:text-[10px] leading-relaxed font-bold uppercase tracking-widest">Pioneering luxury salon culture in Indore.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;