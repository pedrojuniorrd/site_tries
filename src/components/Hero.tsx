// src/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-center p-4 md:p-8 parallax-bg"
      style={{ backgroundImage: 'url(/hero-image.jpg)' }}
    >
      <div className="absolute inset-0 bg-zinc-900 opacity-40"></div>
      <div className="relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-light leading-tight">
          Arquitetura que Acolhe
        </h1>
        <p className="mt-4 text-lg md:text-xl font-extralight">
          Design que transforma espaços em refúgios.
        </p>
      </div>
    </section>
  );
};

export default Hero;