import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-[var(--side-padding)] text-center w-full">
      <div className="max-w-4xl mx-auto">
        <div className="reveal">
          <h2 className="font-serif font-bold mb-6 md:mb-10 tracking-tight">Ready for your <br /><span className="text-gold italic">New Look?</span></h2>
          <p className="text-gold uppercase tracking-[0.3em] md:tracking-[0.5em] mb-12 md:mb-16 text-[10px] md:text-xs font-bold animate-pulse">⚡ Limited Slots available everyday</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mb-16 md:mb-24 reveal" style={{ transitionDelay: '200ms' }}>
          <a 
            href="https://wa.me/910000000000"
            className="w-full sm:w-auto px-10 md:px-16 py-4 md:py-6 bg-gold text-black font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs transition-all hover:bg-white active:bg-white glow-pulse cursor-pointer whitespace-nowrap"
          >
            WhatsApp Booking
          </a>
          <a 
            href="tel:+910000000000"
            className="w-full sm:w-auto px-10 md:px-16 py-4 md:py-6 border border-zinc-800 text-white font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs hover:border-gold active:border-gold transition-all cursor-pointer whitespace-nowrap"
          >
            Call Now
          </a>
        </div>
        
        <div className="relative h-[250px] sm:h-[350px] md:h-[400px] border border-zinc-900 grayscale brightness-50 hover:grayscale-0 active:grayscale-0 hover:brightness-100 active:brightness-100 transition-all duration-1000 reveal overflow-hidden cursor-pointer w-full rounded-sm" style={{ transitionDelay: '400ms' }}>
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.123456789!2d75.8943!3d22.7533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ1JzExLjkiTiA3NcKwNTMnMzkuNSJF!5e0!3m2!1sen!2sin!4v1620000000000" 
            className="w-full h-full border-none"
            loading="lazy"
            title="Massimo Salon Map"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-4">
             <div className="bg-black/70 backdrop-blur-md px-6 md:px-10 py-3 md:py-4 border border-gold/30">
               <span className="text-[10px] md:text-xs text-gold font-bold uppercase tracking-widest whitespace-nowrap">Vijay Nagar, Indore</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;