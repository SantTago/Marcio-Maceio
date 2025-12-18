import React from 'react';
import { House } from '../types';

interface HouseCardProps {
  house: House;
  onSelect: (house: House) => void;
}

const HouseCard: React.FC<HouseCardProps> = ({ house, onSelect }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg active:shadow-sm transition-shadow">
      <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => onSelect(house)}>
        <img 
          src={house.imageUrl} 
          alt={house.name} 
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 rounded-lg bg-white/90 px-2.5 py-1 text-xs font-bold text-gray-800 shadow-sm">
          R$ {house.pricePerNight} <span className="font-normal text-[10px] text-gray-500">/noite</span>
        </div>
      </div>
      
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-xl font-serif font-bold text-gray-800">{house.name}</h3>
        
        <div className="flex space-x-3 mb-3 text-[11px] text-gray-500 font-medium uppercase tracking-tight">
            <span className="flex items-center space-x-1"><i className="fa-solid fa-user-group text-sunset-500"></i> <span>{house.capacity} Pessoas</span></span>
            <span className="flex items-center space-x-1"><i className="fa-solid fa-bed text-sunset-500"></i> <span>{house.bedrooms} Quartos</span></span>
        </div>

        <p className="mb-5 flex-1 text-gray-600 text-sm leading-snug line-clamp-2">
          {house.description}
        </p>

        <button 
          onClick={() => onSelect(house)}
          className="w-full rounded-xl bg-gray-900 py-3 text-xs font-bold text-white uppercase tracking-widest active:bg-sunset-700 transition-colors"
        >
          Ver e Reservar
        </button>
      </div>
    </div>
  );
};

export default HouseCard;