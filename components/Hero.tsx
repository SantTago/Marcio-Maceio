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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[100vh] h-[100dvh] w-full overflow-hidden bg-gray-900">
      {/* Carousel Background Images */}
      {HERO_IMAGES.map((image, index) => (
        <div 
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            backgroundImage: `url('${image}')`,
            // Performance optimization for older devices: avoid constant scaling transforms if possible
          }}
        />
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
        <h1 className="mb-2 font-serif text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight drop-shadow-xl">
          Márcio Mota
        </h1>
        <h2 className="mb-6 font-serif text-base sm:text-2xl md:text-4xl text-sunset-200 font-medium drop-shadow-md">
          Aluguéis para Temporadas
        </h2>
        
        <p className="mb-8 max-w-sm sm:max-w-2xl text-sm sm:text-lg md:text-xl font-light text-white/90 drop-shadow-md">
          Descubra o encanto da Praia do Maceió. Sinta a brisa do Ceará e o descanso que você merece.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <a 
            href="#houses" 
            className="rounded-full bg-sunset-500 px-8 py-3.5 font-semibold text-white shadow-lg transition-all active:bg-sunset-600 active:scale-95"
            >
            Ver Casas de Praia
            </a>
            
            <a 
            href="#beach" 
            className="rounded-full border-2 border-white/50 bg-black/20 backdrop-blur-sm px-8 py-3.5 font-semibold text-white transition-all active:bg-white/10"
            >
            Conheça a Praia
            </a>
        </div>
      </div>

      {/* Carousel Indicators - hidden on very small screens to save space */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden sm:flex space-x-2 z-20">
        {HERO_IMAGES.map((_, idx) => (
            <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-white w-8' : 'bg-white/40 w-2'
                }`}
                aria-label={`Slide ${idx + 1}`}
            />
        ))}
      </div>
    </div>
  );
};

export default Hero;