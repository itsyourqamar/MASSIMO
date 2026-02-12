import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Academy', href: '#academy' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-2 border-b border-gold/20' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-[var(--side-padding)] flex justify-between items-center">
        <div className="flex items-center gap-1.5 md:gap-2">
          <span className="text-xl md:text-2xl font-serif font-bold tracking-widest text-gold leading-none">MASSIMO</span>
          <span className="hidden lg:inline text-[9px] uppercase tracking-widest text-zinc-400 border-l border-zinc-700 pl-2">Salon & Academy</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs lg:text-sm uppercase tracking-widest hover:text-gold active:text-gold transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/910000000000" 
            className="px-4 lg:px-6 py-2 bg-gold text-black text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:bg-white active:bg-white transition-all rounded-sm cursor-pointer whitespace-nowrap"
          >
            Book Now
          </a>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <a 
            href="https://wa.me/910000000000" 
            className="px-3 py-1.5 bg-gold text-black text-[10px] font-bold uppercase tracking-widest rounded-sm"
          >
            Book
          </a>
          <button className="text-gold active:scale-95 transition-transform cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;