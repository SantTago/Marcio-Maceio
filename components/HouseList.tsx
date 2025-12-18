import React, { useState } from 'react';
import { HOUSES } from '../constants';
import HouseCard from './HouseCard';
import HouseModal from './HouseModal';
import { House } from '../types';

const HouseList: React.FC = () => {
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);

  return (
    <section id="houses" className="py-16 px-4 sm:px-6 bg-sand-100">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
            <span className="uppercase tracking-widest text-sunset-700 text-xs font-bold">Catálogo</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mt-2 mb-4">Escolha sua estadia</h2>
            <div className="h-1 w-16 bg-sunset-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-wrap -mx-2">
          {HOUSES.map((house) => (
            <div key={house.id} className="w-full sm:w-1/2 lg:w-1/4 p-2 mb-4">
                <HouseCard 
                  house={house} 
                  onSelect={(house) => setSelectedHouse(house)}
                />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedHouse && (
        <HouseModal 
          house={selectedHouse} 
          onClose={() => setSelectedHouse(null)} 
        />
      )}
    </section>
  );
};

export default HouseList;