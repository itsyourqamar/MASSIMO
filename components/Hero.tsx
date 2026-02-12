import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with luxury professional imagery */}
      <div className="absolute inset-0 z-0 animate-zoom-out">
        <img 
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=100&w=2000" 
          className="w-full h-full object-cover opacity-80"
          alt="Premium Salon Interior"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
      </div>

      <div className="relative z-10 text-center px-[var(--side-padding)] w-full max-w-6xl py-20 md:py-0">
        {/* Rating Stars */}
        <div className="flex justify-center items-center gap-2 mb-6 md:mb-8 animate-fade-up [animation-delay:400ms] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <div className="flex text-gold">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 md:h-4 md:w-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase bg-black/40 backdrop-blur-md px-3 md:px-4 py-1.5 rounded-full border border-gold/20">4.7 Rating | 315+ Clients</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif font-bold mb-6 tracking-tight animate-fade-up [animation-delay:100ms] opacity-0 drop-shadow-2xl" style={{ animationFillMode: 'forwards' }}>
          Massimo Salon <br className="hidden sm:block" />
          <span className="text-gold italic">& Academy</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-sm md:text-xl text-zinc-100 mb-10 md:mb-12 tracking-[0.2em] md:tracking-[0.5em] uppercase font-semibold animate-fade-up [animation-delay:200ms] opacity-0 drop-shadow-md px-2" style={{ animationFillMode: 'forwards' }}>
          Indore's Premium Hair & Beauty Destination
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-fade-up [animation-delay:300ms] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <a 
            href="#services"
            className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 border border-white/40 text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-white active:bg-white hover:text-black active:text-black transition-all backdrop-blur-md cursor-pointer whitespace-nowrap"
          >
            View Services
          </a>
          <a 
            href="https://wa.me/910000000000"
            className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-gold text-black font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-white active:bg-white transition-all glow-pulse cursor-pointer whitespace-nowrap"
          >
            Book on WhatsApp
          </a>
        </div>
        
        <div className="mt-12 md:mt-16 text-zinc-200 flex items-center justify-center gap-2 animate-fade-up [animation-delay:500ms] opacity-0" style={{ animationFillMode: 'forwards' }}>
           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
           </svg>
           <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold bg-black/40 backdrop-blur-sm px-4 py-2 border border-white/10">Vijay Nagar, Indore</span>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-8 md:h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;