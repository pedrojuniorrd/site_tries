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
          priority={index === 0}
          className={`absolute inset-0 z-0 opacity-0 animate-zoom-out`}
          style={{ animationDelay: `${index * 8}s` }}
        />
      ))}
      <div className="absolute inset-0 z-10 flex flex-col items-start justify-center text-left p-8 lg:p-16 bg-black/50">
        <h1 className="text-white text-7xl md:text-8xl lg:text-9xl font-dm-serif-display font-light leading-tight">
          <span className="slide-in-initial-state animate-slide-in-right-1">Triés</span>
          <br/>
          <span className="slide-in-initial-state animate-slide-in-right-2">Arquitetura</span>
          <br/>
          {/* <span className="slide-in-initial-state animate-slide-in-right-3">Arquitetura</span> */}
        </h1>
      </div>
    </div>
  );
};

export default HeroSlideshow;
