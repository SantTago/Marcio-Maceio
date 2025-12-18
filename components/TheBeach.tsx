import React from 'react';

const TheBeach: React.FC = () => {
  return (
    <section id="beach" className="py-20 bg-white relative overflow-hidden">
        {/* Elemento Decorativo */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-ocean-100/20 hidden md:block"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
                
                {/* Imagens com Margens Manuais */}
                <div className="w-full lg:w-1/2 flex flex-col space-y-4 mb-12 lg:mb-0">
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <img 
                                src="https://i.ibb.co/YFTXWxq7/1f8cfd6b8a6da21fc5e43c57e4214e53.jpg" 
                                alt="Praia do Maceió" 
                                className="rounded-xl shadow-md w-full h-48 sm:h-64 object-cover"
                            />
                        </div>
                        <div className="w-1/2">
                            <img 
                                src="https://i.ibb.co/KjzbVYpX/470229171-18095028463500076-8977065317194053441-n.jpg" 
                                alt="Kitesurf" 
                                className="rounded-xl shadow-md w-full h-48 sm:h-64 object-cover mt-8"
                            />
                        </div>
                    </div>
                </div>

                {/* Texto */}
                <div className="w-full lg:w-1/2 lg:pl-16">
                    <div className="mb-6">
                        <span className="text-sunset-500 font-bold text-xs uppercase tracking-widest block mb-2">Descubra Maceió</span>
                        <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 leading-tight">
                            Natureza Intocada e <span className="text-ocean-500">Ventos Perfeitos</span>
                        </h2>
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                        Localizada em Camocim, a Praia do Maceió preserva o charme de uma vila de pescadores com infraestrutura de luxo discreto. Águas mornas e cristalinas esperam por você.
                    </p>

                    <div className="flex space-x-8 mt-8 border-t border-gray-100 pt-6">
                        <div>
                            <span className="block text-2xl font-bold text-sunset-500">30°C</span>
                            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Água o ano todo</span>
                        </div>
                        <div>
                            <span className="block text-2xl font-bold text-ocean-500">Top 3</span>
                            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Mundo no Kitesurf</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default TheBeach;