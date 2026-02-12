import React from 'react';

const reviews = [
  {
    name: "Sakshi Jain",
    text: "Aftab is a magician! I went for a balayage and the results were beyond expectations. The transition is so smooth.",
    stars: 5,
    tag: "Best Balayage"
  },
  {
    name: "Priya Sharma",
    text: "Friendly staff & relaxing ambience. They use premium products. Definitely the best luxury salon in Indore.",
    stars: 5,
    tag: "Highly Recommended"
  },
  {
    name: "Rahul Verma",
    text: "Massimo Academy is top-tier. Learned advanced techniques from the masters. 10/10 training.",
    stars: 5,
    tag: "Academy Student"
  }
];

const SocialProof: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24 reveal">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic">315+ Clients Trust Massimo</h2>
        <div className="w-16 h-1 bg-gold mx-auto opacity-50"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {reviews.map((review, idx) => (
          <div 
            key={idx} 
            className="bg-zinc-900/50 p-10 border border-zinc-900 group transition-all hover:border-gold/30 active:border-gold/30 reveal cursor-pointer"
            style={{ transitionDelay: `${(idx + 1) * 150}ms` }}
          >
            <div className="flex text-gold mb-6 gap-1 group-hover:scale-110 group-active:scale-110 transition-transform duration-500 origin-left">
              {[...Array(review.stars)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-zinc-400 text-sm italic mb-10 leading-relaxed group-hover:text-zinc-200 group-active:text-zinc-200 transition-colors">"{review.text}"</p>
            <div className="flex justify-between items-center border-t border-zinc-800 pt-8">
              <span className="font-bold text-white text-xs uppercase tracking-widest">{review.name}</span>
              <span className="text-[9px] text-gold border border-gold/20 px-3 py-1 uppercase tracking-[0.2em] font-bold">{review.tag}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-24 flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-20 grayscale hover:grayscale-0 active:grayscale-0 hover:opacity-100 active:opacity-100 transition-all duration-1000 reveal">
        <span className="text-2xl font-serif font-bold tracking-tighter">L'ORÉAL</span>
        <span className="text-2xl font-serif tracking-[0.3em] font-light">MAC</span>
        <span className="text-2xl font-serif font-bold">KÉRASTASE</span>
        <span className="text-2xl font-serif tracking-widest uppercase text-sm">Schwarzkopf</span>
      </div>
    </div>
  );
};

export default SocialProof;