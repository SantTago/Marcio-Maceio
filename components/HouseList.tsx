import React from 'react';
import { HOUSES } from '../constants';
import HouseCard from './HouseCard';

const HouseList: React.FC = () => {
  return (
    <section id="houses" className="py-24 px-4 bg-sand-100">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
            <span className="uppercase tracking-widest text-sunset-700 text-sm font-semibold">Nossas Acomodações</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-2 mb-6">Escolha Seu Refúgio</h2>
            <div className="h-1 w-24 bg-sunset-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOUSES.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseList;