import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" className="relative bg-sand-100 py-16 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        
        <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-12">
          <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-6 leading-tight">Como chegar ao Paraíso</h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
            Nossas casas estão localizadas no melhor ponto da Praia do Maceió, em Camocim/CE. Siga o mapa e encontre o seu refúgio.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3">
                <i className="fa-solid fa-map-pin text-sunset-500 mt-1"></i>
                <p className="text-sm text-gray-700 font-medium">Praia do Maceió, Camocim - Ceará</p>
            </div>
            <div className="flex items-start space-x-3">
                <i className="fa-solid fa-car text-ocean-500 mt-1"></i>
                <p className="text-sm text-gray-600">Acesso facilitado para todos os veículos.</p>
            </div>
          </div>
          
          <a 
            href="https://maps.app.goo.gl/ZnWqZQ23QY2n6Y7HA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 rounded-xl bg-gray-900 px-8 py-4 text-white font-bold text-sm w-full sm:w-max active:bg-gray-800 transition-all"
          >
            <i className="fa-solid fa-location-arrow"></i>
            <span>ABRIR LOCALIZAÇÃO NO MAPA</span>
          </a>
        </div>

        <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ paddingBottom: '75%' }}>
                <img 
                    src="https://i.ibb.co/MxpYwZ6P/images-2.jpg" 
                    alt="Mapa e Localização"
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-serif text-lg italic leading-tight">
                        "Onde o vento faz a curva e o sol descansa no mar."
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Location;