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
      className="fixed inset-0 z-[60] flex items-end md:items-center justify-center bg-black/80 md:bg-black/60 md:p-4 md:backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      {/* Modal Container: Fullscreen on mobile, rounded card on desktop */}
      <div className="relative flex flex-col w-full h-full md:h-auto md:max-h-[90vh] md:max-w-4xl overflow-hidden bg-white shadow-2xl md:rounded-2xl md:flex-row">
        
        {/* Close Button Mobile (Floating) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md shadow-lg transition-colors hover:bg-black/60 md:hidden"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        {/* Image Gallery Section (Mobile: Top 40%, Desktop: Left 50%) */}
        <div className="relative h-[40vh] md:h-auto w-full bg-gray-100 md:w-1/2 shrink-0">
          <div className="h-full w-full">
            <img 
              src={house.images[activeImageIndex]} 
              alt={house.name} 
              className="h-full w-full object-cover"
            />
          </div>
          
          {/* Gradient Overlay for text visibility on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden pointer-events-none"></div>

          {/* Gallery Controls */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/30 p-2 backdrop-blur-md z-10">
            {house.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setActiveImageIndex(idx); }}
                className={`h-2 w-2 rounded-full transition-all shadow-sm ${
                  idx === activeImageIndex ? 'w-4 bg-white' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Ver foto ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-1 flex-col overflow-y-auto bg-white p-6 md:p-8">
            <div className="mb-auto">
                <div className="flex justify-between items-start mb-2">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-tight">{house.name}</h2>
                    <button 
                        onClick={onClose}
                        className="hidden md:flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                
                <p className="text-xl md:text-2xl font-light text-sunset-500 mb-6">
                    R$ {house.pricePerNight} <span className="text-sm text-gray-400">/ noite</span>
                </p>

                <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6 border-y border-gray-100 py-4">
                    <div className="text-center">
                        <i className="fa-solid fa-user-group text-xl md:text-2xl text-ocean-500 mb-1"></i>
                        <p className="text-xs md:text-sm text-gray-600">{house.capacity} Hóspedes</p>
                    </div>
                    <div className="text-center border-x border-gray-100 px-1">
                        <i className="fa-solid fa-bed text-xl md:text-2xl text-ocean-500 mb-1"></i>
                        <p className="text-xs md:text-sm text-gray-600">{house.bedrooms} Quartos</p>
                    </div>
                    <div className="text-center">
                        <i className="fa-solid fa-bath text-xl md:text-2xl text-ocean-500 mb-1"></i>
                        <p className="text-xs md:text-sm text-gray-600">{house.bathrooms} Banheiros</p>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Sobre a acomodação</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {house.description}
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">O que esse lugar oferece</h3>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-1">
                        {house.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                <i className="fa-solid fa-check text-green-500 text-xs shrink-0"></i>
                                <span className="truncate">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sticky Action Button */}
            <div className="sticky bottom-0 -mx-6 -mb-6 p-6 border-t border-gray-100 bg-white/95 backdrop-blur-sm md:static md:mx-0 md:mb-0 md:border-0 md:p-0">
                <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-4 text-center font-bold text-white shadow-lg transition-all hover:bg-green-700 active:scale-95"
                >
                    <i className="fa-brands fa-whatsapp text-xl"></i>
                    Reservar pelo WhatsApp
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HouseModal;