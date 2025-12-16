import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const PhotoGallery: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-12 bg-white" id="gallery">
      <div className="mx-auto max-w-7xl text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mb-4">Mural de Experiências</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Momentos capturados por nossos hóspedes. Da tranquilidade da manhã ao espetáculo dourado do fim de tarde.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mx-auto max-w-7xl">
        {GALLERY_IMAGES.map((src, index) => (
          <div key={index} className="break-inside-avoid relative group overflow-hidden rounded-xl shadow-lg cursor-pointer">
            <img 
              src={src} 
              alt={`Galeria ${index + 1}`} 
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;