import React from 'react';

const serviceCategories = [
  {
    title: "Haircut & Styling",
    desc: "Precision cuts and luxury blowouts for the elite.",
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Signature Balayage",
    desc: "Indore's most loved seamless color transitions.",
    img: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Keratin Therapy",
    desc: "Premium frizz-free long-lasting mirror shine.",
    img: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Bridal HD Makeover",
    desc: "Luxury HD and Airbrush makeovers for brides.",
    img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Aesthetic Skin Care",
    desc: "Hydra-dermabrasion & Advanced Facials.",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1000"
  }
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-[var(--side-padding)] w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 md:gap-12 reveal">
        <div className="max-w-xl">
          <h2 className="font-serif font-bold mb-4 uppercase tracking-tighter">Luxury Services</h2>
          <p className="text-zinc-500 uppercase tracking-widest text-[10px] md:text-sm">Global brands. International styles. Unmatched precision.</p>
        </div>
        <a href="https://wa.me/910000000000" className="text-gold border-b border-gold/30 pb-2 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold hover:text-white active:text-white hover:border-white active:border-white transition-all cursor-pointer whitespace-nowrap">
          Price List on WhatsApp
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {serviceCategories.map((service, idx) => (
          <div 
            key={idx} 
            className="relative group cursor-pointer h-[400px] md:h-[500px] overflow-hidden border border-zinc-900 bg-black reveal w-full"
            style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
          >
            <img 
              src={service.img} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-1000 group-hover:scale-110 group-active:scale-110 opacity-60" 
              alt={service.title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full translate-y-6 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-700">
              <div className="w-8 h-8 md:w-10 md:h-10 border border-gold/40 flex items-center justify-center mb-4 md:mb-6 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 group-active:scale-110 transition-all duration-700">
                <div className="w-1 h-1 bg-gold rounded-full"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 md:mb-3 group-hover:text-gold group-active:text-gold transition-colors">{service.title}</h3>
              <p className="text-[10px] text-zinc-500 mb-6 md:mb-8 uppercase tracking-widest opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-700">{service.desc}</p>
              <a href="https://wa.me/910000000000" className="inline-block px-6 md:px-8 py-2 md:py-3 bg-gold text-black text-[10px] font-bold uppercase tracking-widest hover:bg-white active:bg-white transition-all opacity-0 group-hover:opacity-100 group-active:opacity-100 whitespace-nowrap">Book Session</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;