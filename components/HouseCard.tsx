import React from 'react';
import { House } from '../types';

interface HouseCardProps {
  house: House;
}

const HouseCard: React.FC<HouseCardProps> = ({ house }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={house.imageUrl} 
          alt={house.name} 
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-gray-800 shadow-sm backdrop-blur-sm">
          R$ {house.pricePerNight} <span className="font-normal text-xs text-gray-500">/noite</span>
        </div>
      </div>
      
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-2xl font-serif font-semibold text-gray-800">{house.name}</h3>
        
        <div className="flex gap-4 mb-4 text-sm text-gray-500">
            <span className="flex items-center gap-1"><i className="fa-solid fa-user-group text-sunset-500"></i> {house.capacity} Pessoas</span>
            <span className="flex items-center gap-1"><i className="fa-solid fa-bed text-sunset-500"></i> {house.bedrooms} Quartos</span>
            <span className="flex items-center gap-1"><i className="fa-solid fa-bath text-sunset-500"></i> {house.bathrooms} Banh.</span>
        </div>

        <p className="mb-6 flex-1 text-gray-600 leading-relaxed text-sm">
          {house.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
            {house.features.slice(0, 3).map((feature, idx) => (
                <span key={idx} className="rounded-md bg-ocean-100 px-2 py-1 text-xs font-medium text-ocean-900">
                    {feature}
                </span>
            ))}
            {house.features.length > 3 && (
                <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                    +{house.features.length - 3} mais
                </span>
            )}
        </div>

        <button className="w-full rounded-lg bg-gray-900 py-3 text-sm font-semibold text-white transition-colors hover:bg-sunset-700 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:ring-offset-2">
          Ver Detalhes e Reservar
        </button>
      </div>
    </div>
  );
};

export default HouseCard;