import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" className="relative bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="md:w-1/2 z-10">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">Localização Privilegiada</h2>
          <h3 className="text-xl text-sunset-500 font-medium mb-4">Praia do Maceió, Camocim - CE</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Nossas casas estão situadas na charmosa vila de pescadores da Praia do Maceió. Um refúgio de tranquilidade cercado por dunas, coqueirais e o mar morno do Ceará. A localização perfeita para quem busca sossego ou os melhores ventos do mundo para a prática de Kitesurf.
          </p>
          <ul className="space-y-3 mb-8 text-gray-600">
            <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ocean-100 text-ocean-500">
                    <i className="fa-solid fa-water"></i>
                </span>
                <span>Águas mornas e piscinas naturais na maré baixa</span>
            </li>
            <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sand-100 text-sand-900">
                    <i className="fa-solid fa-wind"></i>
                </span>
                <span>Paraíso mundial do Kitesurf</span>
            </li>
            <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sunset-100 text-sunset-500">
                    <i className="fa-solid fa-umbrella-beach"></i>
                </span>
                <span>Barracas de praia rústicas e gastronomia local</span>
            </li>
          </ul>
          
          <a 
            href="https://www.google.com/maps/place/Praia+do+Macei%C3%B3/@-2.8789522,-40.9604759,1018m/data=!3m2!1e3!4b1!4m6!3m5!1s0x7ebe0a64090383f:0x92d6e6f9468272c9!8m2!3d-2.8789522!4d-40.9578956!16s%2Fg%2F11cs5swz3t?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-white transition-colors hover:bg-gray-800"
          >
            <i className="fa-solid fa-map-location-dot"></i>
            Ver no Google Maps
          </a>
        </div>

        {/* Visual/Decorative */}
        <div className="md:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group">
            <img 
                src="https://i.ibb.co/MxpYwZ6P/images-2.jpg" 
                alt="Vista da Praia do Maceió"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <p className="text-white font-serif text-2xl italic">"Onde o vento encontra o paraíso."</p>
            </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-sunset-100/50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-ocean-100/50 blur-3xl"></div>
    </section>
  );
};

export default Location;