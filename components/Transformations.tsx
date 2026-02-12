import React from 'react';

const items = [
  {
    title: "Signature Balayage",
    before: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600",
    after: "https://images.unsplash.com/photo-1560869713-7d0a29430863?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Keratin Therapy",
    before: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&q=80&w=600",
    after: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Bridal Makeover",
    before: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600",
    after: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600"
  }
];

const Transformations: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-[var(--side-padding)] w-full">
      <div className="text-center mb-16 md:mb-24 reveal">
        <h2 className="font-serif font-bold mb-4 italic text-gold">Real Transformations</h2>
        <p className="text-zinc-600 uppercase tracking-[0.4em] text-[10px] font-bold">The Magic of Massimo</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className="group space-y-4 md:space-y-6 reveal cursor-pointer"
            style={{ transitionDelay: `${(idx + 1) * 150}ms` }}
          >
            <div className="flex gap-1 h-[clamp(300px,50vw,450px)] border border-zinc-900 p-1 bg-zinc-950 transition-transform duration-700 active:scale-95 lg:hover:scale-[1.02] w-full">
              <div className="relative flex-1 overflow-hidden">
                <img src={item.before} className="w-full h-full object-cover grayscale brightness-50 transition-transform duration-1000 group-hover:scale-110 group-active:scale-110" alt="Before" />
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md text-[8px] md:text-[9px] px-2 md:px-3 py-1 uppercase tracking-widest border border-white/10">Before</div>
              </div>
              <div className="relative flex-1 overflow-hidden">
                <img src={item.after} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-active:scale-110" alt="After" />
                <div className="absolute bottom-3 right-3 bg-gold text-black text-[8px] md:text-[9px] px-2 md:px-3 py-1 uppercase tracking-widest font-bold">After</div>
              </div>
            </div>
            <h3 className="text-center text-xs md:text-sm font-bold text-zinc-300 uppercase tracking-[0.2em] group-hover:text-gold group-active:text-gold transition-colors">{item.title}</h3>
          </div>
        ))}
      </div>

      <div className="mt-16 md:mt-24 text-center reveal">
        <a 
          href="https://wa.me/910000000000"
          className="inline-block px-10 md:px-14 py-5 md:py-6 bg-gold text-black font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs transition-all hover:bg-white active:bg-white glow-pulse cursor-pointer w-full sm:w-auto"
        >
          Book Your Transformation
        </a>
      </div>
    </div>
  );
};

export default Transformations;