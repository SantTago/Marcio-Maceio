import React, { useState } from 'react';
import { House } from '../types';

interface HouseModalProps {
  house: House;
  onClose: () => void;
}

const HouseModal: React.FC<HouseModalProps> = ({ house, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close on Escape key or outside click
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const whatsappLink = `https://wa.me/5548999999999?text=${encodeURIComponent(`Olá! Gostaria de reservar a ${house.name} que vi no site Márcio Mota Aluguéis.`)}`;

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:flex-row">
        
        {/* Close Button Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-colors hover:bg-black/40 md:hidden"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        {/* Image Gallery Section (Left/Top) */}
        <div className="relative h-64 w-full bg-gray-100 md:h-auto md:w-1/2">
          <div className="h-full w-full">
            <img 
              src={house.images[activeImageIndex]} 
              alt={house.name} 
              className="h-full w-full object-cover transition-opacity duration-300"
            />
          </div>
          
          {/* Gallery Controls */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/20 p-2 backdrop-blur-md">
            {house.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setActiveImageIndex(idx); }}
                className={`h-2 w-2 rounded-full transition-all ${
                  idx === activeImageIndex ? 'w-4 bg-white' : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Details Section (Right/Bottom) */}
        <div className="flex flex-1 flex-col overflow-y-auto p-6 md:p-8">
            <div className="mb-auto">
                <div className="flex justify-between items-start mb-2">
                    <h2 className="text-3xl font-serif font-bold text-gray-900">{house.name}</h2>
                    <button 
                        onClick={onClose}
                        className="hidden md:flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                
                <p className="text-2xl font-light text-sunset-500 mb-6">
                    R$ {house.pricePerNight} <span className="text-sm text-gray-400">/ noite</span>
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6 border-y border-gray-100 py-4">
                    <div className="text-center">
                        <i className="fa-solid fa-user-group text-2xl text-ocean-500 mb-1"></i>
                        <p className="text-sm text-gray-600">{house.capacity} Hóspedes</p>
                    </div>
                    <div className="text-center border-x border-gray-100">
                        <i className="fa-solid fa-bed text-2xl text-ocean-500 mb-1"></i>
                        <p className="text-sm text-gray-600">{house.bedrooms} Quartos</p>
                    </div>
                    <div className="text-center">
                        <i className="fa-solid fa-bath text-2xl text-ocean-500 mb-1"></i>
                        <p className="text-sm text-gray-600">{house.bathrooms} Banheiros</p>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Sobre a acomodação</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {house.description}
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="font-semibold text-gray-900 mb-3">O que esse lugar oferece</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {house.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                <i className="fa-solid fa-check text-green-500 text-xs"></i>
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="sticky bottom-0 mt-4 border-t border-gray-100 bg-white pt-4 md:static md:border-0 md:bg-transparent md:pt-0">
                <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-4 text-center font-bold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-green-500/30"
                >
                    <i className="fa-brands fa-whatsapp text-xl"></i>
                    Fazer Reserva pelo WhatsApp
                </a>
                <p className="mt-2 text-center text-xs text-gray-400">
                    Fale diretamente com nosso concierge para verificar datas.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HouseModal;