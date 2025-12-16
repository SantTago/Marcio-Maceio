import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2000&auto=format&fit=crop')`, // Stunning beach sunset
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-sunset-900/20 to-ocean-900/20 mix-blend-overlay"></div>
      </div>

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

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
        <i className="fa-solid fa-chevron-down text-3xl"></i>
      </div>
    </div>
  );
};

export default Hero;