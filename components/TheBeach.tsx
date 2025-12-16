import React from 'react';

const TheBeach: React.FC = () => {
  return (
    <section id="beach" className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-ocean-100/30 -skew-x-12 transform translate-x-20"></div>
        
        <div className="container mx-auto px-4 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                
                {/* Visuals */}
                <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                    <img 
                        src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=600&auto=format&fit=crop" 
                        alt="Praia do Rosa Areia" 
                        className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
                    />
                    <img 
                        src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=600&auto=format&fit=crop" 
                        alt="Surf na Praia do Rosa" 
                        className="rounded-2xl shadow-lg w-full h-64 object-cover"
                    />
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="h-px w-12 bg-sunset-500"></span>
                        <span className="uppercase tracking-widest text-sunset-700 text-sm font-semibold">A Praia</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
                        Uma das Baías Mais <br/>
                        <span className="text-ocean-500 italic">Belas do Mundo</span>
                    </h2>
                    
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        A Praia do Rosa não é apenas um destino; é um estado de espírito. Com suas areias brancas, mar cristalino e natureza preservada, ela foi eleita uma das 30 baías mais belas do mundo.
                    </p>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Perfeita para o surf, windsurf ou apenas para relaxar nas piscinas naturais que se formam nos cantos da praia. Durante o inverno e a primavera, é o berçário natural das Baleias Francas, oferecendo um espetáculo inesquecível a poucos metros da areia.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-sunset-500 mb-1">2km</span>
                            <span className="text-sm text-gray-500">de Extensão de Areia</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-ocean-500 mb-1">Surf</span>
                            <span className="text-sm text-gray-500">Mundialmente Reconhecido</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default TheBeach;