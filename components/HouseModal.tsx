import React, { useState, useEffect } from 'react';
import { House } from '../types';

interface HouseModalProps {
  house: House;
  onClose: () => void;
}

const HouseModal: React.FC<HouseModalProps> = ({ house, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const whatsappLink = `https://wa.me/5548999999999?text=${encodeURIComponent(`Olá! Gostaria de reservar a ${house.name} na Praia do Maceió.`)}`;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative flex flex-col w-full h-[95vh] sm:h-auto sm:max-h-[90vh] sm:max-w-4xl overflow-hidden bg-white shadow-2xl sm:rounded-2xl rounded-t-3xl">
        
        {/* Botão Fechar Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-[110] flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white sm:hidden"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="flex flex-col sm:flex-row h-full">
            {/* Galeria de Imagens */}
            <div className="relative w-full h-[40vh] sm:h-auto sm:w-1/2 bg-gray-200 shrink-0">
                <img 
                    src={house.images[activeImageIndex]} 
                    alt={house.name} 
                    className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {house.images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            className={`h-1.5 rounded-full transition-all ${
                                idx === activeImageIndex ? 'w-4 bg-white' : 'bg-white/50 w-1.5'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Informações */}
            <div className="flex flex-col flex-1 overflow-y-auto bg-white p-6 sm:p-10">
                <div className="mb-6">
                    <div className="flex justify-between items-start">
                        <h2 className="text-2xl font-serif font-bold text-gray-900 leading-tight pr-6 sm:pr-0">{house.name}</h2>
                        <button 
                            onClick={onClose}
                            className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <p className="text-xl font-bold text-sunset-500 mt-2">
                        R$ {house.pricePerNight} <span className="text-xs text-gray-400 font-normal">/ noite</span>
                    </p>
                </div>

                <div className="grid grid-cols-3 border-y border-gray-100 py-4 mb-6">
                    <div className="text-center">
                        <i className="fa-solid fa-user-group text-ocean-500"></i>
                        <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase">{house.capacity} Pessoas</p>
                    </div>
                    <div className="text-center border-x border-gray-100">
                        <i className="fa-solid fa-bed text-ocean-500"></i>
                        <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase">{house.bedrooms} Quartos</p>
                    </div>
                    <div className="text-center">
                        <i className="fa-solid fa-bath text-ocean-500"></i>
                        <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase">{house.bathrooms} Banh.</p>
                    </div>
                </div>

                <div className="space-y-6 flex-1">
                    <div>
                        <h3 className="font-bold text-xs text-gray-900 uppercase tracking-widest mb-2">Acomodação</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{house.description}</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xs text-gray-900 uppercase tracking-widest mb-3">Comodidades</h3>
                        <div className="grid grid-cols-2 gap-y-2">
                            {house.features.map((f, i) => (
                                <div key={i} className="flex items-center space-x-2 text-xs text-gray-600">
                                    <i className="fa-solid fa-check text-green-500 text-[10px]"></i>
                                    <span className="truncate">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100">
                    <a 
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center space-x-2 rounded-xl bg-green-600 py-4 text-center font-bold text-white shadow-lg active:bg-green-700 active:scale-95 transition-all"
                    >
                        <i className="fa-brands fa-whatsapp text-xl"></i>
                        <span>RESERVAR NO WHATSAPP</span>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HouseModal;