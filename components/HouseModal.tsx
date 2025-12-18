import React, { useState } from 'react';
import { House } from '../types';

interface HouseModalProps {
  house: House;
  onClose: () => void;
}

const HouseModal: React.FC<HouseModalProps> = ({ house, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const whatsappLink = `https://wa.me/5548999999999?text=${encodeURIComponent(`Olá! Gostaria de reservar a ${house.name} que vi no site Márcio Mota Aluguéis.`)}`;

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-end md:items-center justify-center bg-black/80 md:bg-black/60 md:p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="relative flex flex-col w-full h-[92%] md:h-auto md:max-h-[90vh] md:max-w-4xl overflow-hidden bg-white shadow-2xl md:rounded-2xl md:flex-row rounded-t-2xl">
        
        {/* Close Button Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md md:hidden"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Image Section */}
        <div className="relative h-[35vh] md:h-auto w-full bg-gray-200 md:w-1/2 shrink-0">
          <img 
            src={house.images[activeImageIndex]} 
            alt={house.name} 
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 space-x-2 rounded-full bg-black/20 p-1.5 backdrop-blur-md">
            {house.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`h-1.5 w-1.5 rounded-full transition-all ${
                  idx === activeImageIndex ? 'w-3 bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-1 flex-col overflow-y-auto bg-white p-5 md:p-8 -webkit-overflow-scrolling-touch">
            <div className="mb-4">
                <div className="flex justify-between items-start">
                    <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 leading-tight pr-8 md:pr-0">{house.name}</h2>
                    <button 
                        onClick={onClose}
                        className="hidden md:flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <p className="text-lg font-light text-sunset-500 mt-1">
                    R$ {house.pricePerNight} <span className="text-xs text-gray-400">/ noite</span>
                </p>
            </div>

            <div className="grid grid-cols-3 border-y border-gray-100 py-3 mb-5">
                <div className="text-center">
                    <i className="fa-solid fa-user-group text-lg text-ocean-500"></i>
                    <p className="text-[10px] uppercase font-bold text-gray-400 mt-1">{house.capacity} Pessoas</p>
                </div>
                <div className="text-center border-x border-gray-100">
                    <i className="fa-solid fa-bed text-lg text-ocean-500"></i>
                    <p className="text-[10px] uppercase font-bold text-gray-400 mt-1">{house.bedrooms} Quartos</p>
                </div>
                <div className="text-center">
                    <i className="fa-solid fa-bath text-lg text-ocean-500"></i>
                    <p className="text-[10px] uppercase font-bold text-gray-400 mt-1">{house.bathrooms} Banh.</p>
                </div>
            </div>

            <div className="space-y-4 mb-20 md:mb-0">
                <div>
                    <h3 className="font-bold text-sm text-gray-900 uppercase tracking-wider mb-2">Descrição</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{house.description}</p>
                </div>
                <div>
                    <h3 className="font-bold text-sm text-gray-900 uppercase tracking-wider mb-2">Comodidades</h3>
                    <div className="grid grid-cols-2 gap-y-1.5">
                        {house.features.map((f, i) => (
                            <div key={i} className="flex items-center space-x-2 text-xs text-gray-600">
                                <i className="fa-solid fa-check text-green-500"></i>
                                <span className="truncate">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="fixed md:static bottom-0 left-0 right-0 p-4 md:p-0 bg-white/95 border-t border-gray-100 md:border-0 md:mt-6">
                <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center space-x-2 rounded-xl bg-green-600 py-3.5 text-center font-bold text-white shadow-lg active:scale-95"
                >
                    <i className="fa-brands fa-whatsapp text-lg"></i>
                    <span>RESERVAR AGORA</span>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HouseModal;