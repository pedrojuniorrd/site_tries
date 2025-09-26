// src/components/HeroSlideshow.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

// Lista de imagens para o slide
const heroImages = [
'/slides/1.png',
'/slides/2.png',
'/slides/3.png',
'/slides/4.png',
'/slides/5.png',
];

// Duração de cada slide (8 segundos)
const SLIDE_DURATION = 8000;
// Duração da transição/fade entre os slides (1.5 segundos)
const TRANSITION_DURATION = 1500; 

const HeroSlideshow: React.FC = () => {
const [currentIndex, setCurrentIndex] = useState(0);
const [previousIndex, setPreviousIndex] = useState(-1);

const nextSlide = useCallback(() => {
 setPreviousIndex(currentIndex);
 setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
}, [currentIndex]);

useEffect(() => {
 const interval = setInterval(nextSlide, SLIDE_DURATION);
 return () => clearInterval(interval);
}, [nextSlide]);

return (
 <div className="relative w-full h-screen lg:h-[90vh] md:h-[80vh] overflow-hidden">
  
  {heroImages.map((src, index) => (
   <Image
    key={index}
    src={src}
    alt={`Slide de Projeto ${index + 1}`}
    layout="fill"
    objectFit="cover"
    priority={index === 0}
    className={`
     absolute inset-0 z-0 
     transition-opacity duration-[${TRANSITION_DURATION}ms] ease-in-out
     ${
      index === currentIndex
        ? 'opacity-100'
        : index === previousIndex
        ? 'animate-slide-out-dynamic'
        : 'opacity-0'
     }
    `}
    style={index !== currentIndex && index !== previousIndex ? { transform: 'scale(1)' } : {}}
   />
  ))}
   
  {/* Overlay Sutil (mantido) */}
  <div className="absolute inset-0 z-5 bg-black/20"></div>

  {/* Texto Flutuante - Centralizado e Delicado */}
  {/* Removido `inset-0` e `flex`, e centralizado o conteúdo `h1` diretamente */}
<div className="absolute inset-0 z-10 flex flex-col items-start justify-center text-left p-8 lg:p-16">
   {/* AQUI ESTÁ A CORREÇÃO: Fundo no próprio H1, e sem backdrop-blur */}
   <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-dm-serif-display font-light leading-snug 
           bg-zinc-800/40 p-4 inline-block rounded-md"> {/* APLICADO DIRETAMENTE NO H1 */}
    <span className="slide-in-initial-state animate-slide-in-right-1">Triés</span>
    <br/>
    <span className="slide-in-initial-state animate-slide-in-right-2">Arquitetura</span>
   </h1>
  </div>

  {/* Indicadores de Paginação (Dots) (mantido) */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
   {heroImages.map((_, index) => (
    <button
     key={index}
     onClick={() => setCurrentIndex(index)}
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