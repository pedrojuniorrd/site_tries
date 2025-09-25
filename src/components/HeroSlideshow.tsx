// src/components/HeroSlideshow.tsx

import React from 'react';
import Image from 'next/image';

const images = [
  '/slides/1.png',
  '/slides/2.png',
  '/slides/3.png',
  '/slides/4.png',
  '/slides/5.png',
];

const HeroSlideshow: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide de Projeto ${index + 1}`}
          layout="fill"
          objectFit="cover"
          priority={index === 0} // Carrega a primeira imagem com prioridade
          className={`absolute inset-0 z-0 opacity-0 animate-zoom-out`}
          style={{ animationDelay: `${index * 8}s` }} // Tempo entre as transições
        />
      ))}
      <div className="absolute inset-0 bg-black/50 z-10 flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-white text-7xl md:text-8xl lg:text-9xl font-playfair-display font-light mb-4 leading-tight">
          Arquitetura que Acolhe
        </h1>
      </div>
    </div>
  );
};

export default HeroSlideshow;