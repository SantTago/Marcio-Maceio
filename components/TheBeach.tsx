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
                        src="https://i.ibb.co/YFTXWxq7/1f8cfd6b8a6da21fc5e43c57e4214e53.jpg" 
                        alt="Areia Branca Ceará" 
                        className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
                    />
                    <img 
                        src="https://i.ibb.co/KjzbVYpX/470229171-18095028463500076-8977065317194053441-n.jpg" 
                        alt="Kitesurf e Praia" 
                        className="rounded-2xl shadow-lg w-full h-64 object-cover"
                    />
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="h-px w-12 bg-sunset-500"></span>
                        <span className="uppercase tracking-widest text-sunset-700 text-sm font-semibold">O Destino</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
                        O Caribe do <br/>
                        <span className="text-ocean-500 italic">Litoral Cearense</span>
                    </h2>
                    
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        A Praia do Maceió, em Camocim, é um tesouro escondido. Com suas águas mornas e tranquilas protegidas por arrecifes, é o cenário ideal para quem busca paz e contato direto com a natureza intocada.
                    </p>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Reconhecida internacionalmente pelos ventos constantes, é um dos melhores lugares do mundo para a prática de Kitesurf e Windsurf. Desfrute de caminhadas intermináveis pela areia branca, passeios de buggy pelas dunas e um pôr do sol inesquecível no mar.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-sunset-500 mb-1">30°C</span>
                            <span className="text-sm text-gray-500">Temperatura Média da Água</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-ocean-500 mb-1">Ventos</span>
                            <span className="text-sm text-gray-500">Perfeitos para Esportes</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default TheBeach;