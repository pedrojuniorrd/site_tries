// src/components/HeroSlideshow.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const heroImages = [
  '/slides/1.png',
  '/slides/2.png',
  '/slides/3.png',
  '/slides/4.png',
  '/slides/5.png',
];

const SLIDE_DURATION = 6000;

const HeroSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(-1);

  const selectSlide = useCallback((index: number) => {
    setPreviousIndex(currentIndex);
    setCurrentIndex(index);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      selectSlide((currentIndex + 1) % heroImages.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [currentIndex, selectSlide]);

  return (
    <div className="relative w-full h-screen lg:h-[90vh] md:h-[80vh] overflow-hidden">
      {heroImages.map((src, index) => {
        let animationClass = '';
        if (index === currentIndex) {
          animationClass = 'animate-kenburns-in';
        } else if (index === previousIndex) {
          animationClass = 'animate-kenburns-out';
        }

        return (
          <div
            key={src + index}
            className={`absolute inset-0 w-full h-full ${
              index !== currentIndex && index !== previousIndex ? 'opacity-0' : ''
            }`}
          >
            {animationClass && (
              <Image
                src={src}
                alt={`Slide de Projeto ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
                className={animationClass}
              />
            )}
          </div>
        );
      })}

      {/* Overlay Sutil agora como um gradiente */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 to-transparent"></div>

      {/* Texto Flutuante com o novo estilo */}
      <div className="absolute inset-0 z-20 flex flex-col items-start justify-center text-left p-8 lg:p-16">
        <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-playfair-display font-light leading-snug">
          <span className="slide-in-initial-state animate-slide-in-right-1">Triés</span>
          <br />
          <span className="slide-in-initial-state animate-slide-in-right-2">Arquitetura</span>
        </h1>
      </div>

      {/* Indicadores de Paginação (Dots) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => selectSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlideshow;