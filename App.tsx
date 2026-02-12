import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Transformations from './components/Transformations';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Academy from './components/Academy';
import FinalCTA from './components/FinalCTA';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold selection:text-black font-sans w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <section id="home">
          <Hero />
        </section>
        
        <section id="reviews" className="py-[var(--section-spacing)] bg-zinc-950 overflow-hidden">
          <SocialProof />
        </section>

        <section id="transformations" className="py-[var(--section-spacing)] bg-black overflow-hidden">
          <Transformations />
        </section>

        <section id="services" className="py-[var(--section-spacing)] bg-zinc-950 overflow-hidden">
          <Services />
        </section>

        <section id="why-us" className="py-[var(--section-spacing)] bg-black overflow-hidden">
          <WhyChooseUs />
        </section>

        <section id="academy" className="py-[var(--section-spacing)] bg-zinc-950 overflow-hidden">
          <Academy />
        </section>

        <section id="contact" className="py-[var(--section-spacing)] bg-black overflow-hidden">
          <FinalCTA />
        </section>
      </main>
      
      <footer className="py-12 px-[var(--side-padding)] border-t border-zinc-900 bg-black text-center text-zinc-600 text-[var(--xs-text)] tracking-widest uppercase">
        <p>© {new Date().getFullYear()} Massimo Salon & Academy Indore. Premium Experience Guaranteed.</p>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default App;