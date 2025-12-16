import React, { useState, useEffect } from 'react';

const HERO_IMAGES = [
  'https://i.ibb.co/hjGNVL3/Praia-da-Tatajuba-no-Cear.jpg',
  'https://i.ibb.co/MxpYwZ6P/images-2.jpg',
  'https://i.ibb.co/99fHm35V/Camocim-4-1-1024x732.jpg',
  'https://i.ibb.co/V0KsSZvK/f469e07ac84a4569a91a855b3b4b475d.webp'
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Carousel Background Images */}
      {HERO_IMAGES.map((image, index) => (
        <div 
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ 
            backgroundImage: `url('${image}')`,
          }}
        />
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-sunset-900/20 to-ocean-900/20 mix-blend-overlay z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="mb-6 font-serif text-5xl md:text-7xl font-bold tracking-tight drop-shadow-lg">
          Sunset Villas <span className="text-sunset-300">Rosa</span>
        </h1>
        <p className="mb-10 max-w-2xl text-lg md:text-xl font-light text-white/90 drop-shadow-md">
          Experimente a magia do Caminho do Rei. Acorde com o som das ondas e viva o melhor da praia com pés na areia.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
            <a 
            href="#houses" 
            className="group relative overflow-hidden rounded-full bg-sunset-500 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-sunset-600 hover:shadow-sunset-500/50"
            >
            <span className="relative z-10">Ver Casas de Praia</span>
            <div className="absolute inset-0 -z-0 h-full w-full translate-y-full rounded-full bg-white/20 transition-transform group-hover:translate-y-0"></div>
            </a>
            
            <a 
            href="#beach" 
            className="group relative overflow-hidden rounded-full border-2 border-white/50 bg-black/20 backdrop-blur-sm px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-white/10 hover:border-white"
            >
            <span className="relative z-10">Conheça a Praia</span>
            </a>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {HERO_IMAGES.map((_, idx) => (
            <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-white w-8' : 'bg-white/40 w-2 hover:bg-white/70'
                }`}
                aria-label={`Slide ${idx + 1}`}
            />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
        <i className="fa-solid fa-chevron-down text-3xl"></i>
      </div>
    </div>
  );
};

export default Hero;