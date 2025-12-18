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
    <div className="relative w-full overflow-hidden bg-gray-900" style={{ height: '100vh', minHeight: '500px' }}>
      {/* Imagens de Fundo */}
      {HERO_IMAGES.map((image, index) => (
        <div 
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}

      {/* Overlay Escuro para Contraste */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Conteúdo Central */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="mb-2 font-serif text-3xl sm:text-5xl md:text-7xl font-bold drop-shadow-lg leading-tight">
          Márcio Mota
        </h1>
        <h2 className="mb-6 font-serif text-lg sm:text-2xl md:text-3xl text-sunset-300 font-medium">
          Casas de Temporada
        </h2>
        
        <p className="mb-8 max-w-[280px] sm:max-w-xl text-sm sm:text-lg font-light text-white/90">
          O paraíso rústico da Praia do Maceió te espera. Reserve agora sua experiência no Ceará.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-[280px] sm:max-w-none justify-center">
            <a 
              href="#houses" 
              className="inline-block rounded-full bg-sunset-500 px-8 py-4 text-sm font-bold text-white shadow-xl active:bg-sunset-600 transition-all transform active:scale-95"
            >
              VER ACOMODAÇÕES
            </a>
            
            <a 
              href="#beach" 
              className="inline-block rounded-full border-2 border-white/60 bg-white/10 backdrop-blur-sm px-8 py-4 text-sm font-bold text-white active:bg-white/20 transition-all"
            >
              SOBRE A PRAIA
            </a>
        </div>
      </div>

      {/* Indicadores Visuais (Ocultos em telas muito pequenas) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex space-x-3 z-20">
        {HERO_IMAGES.map((_, idx) => (
            <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-white w-8' : 'bg-white/40 w-2'
                }`}
                aria-label={`Ir para imagem ${idx + 1}`}
            />
        ))}
      </div>
    </div>
  );
};

export default Hero;