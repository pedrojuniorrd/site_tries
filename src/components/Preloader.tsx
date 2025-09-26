// src/components/Preloader.tsx
'use client';

import React from 'react';

interface PreloaderProps {
  loading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ loading }) => {
  const preloaderClasses = `
    fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white
    transition-opacity duration-[1500ms] ease-out /* <-- DURAÇÃO AUMENTADA AQUI */
    ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}
  `;

  return (
    <div className={preloaderClasses}>
      <div className="relative flex items-center justify-center">
        <div className="absolute h-24 w-24 rounded-full border border-gray-400 animate-pulse-ring"></div>
        <div className="h-16 w-16 rounded-full border border-gray-300"></div>
      </div>
      <p className="mt-8 text-lg font-light text-gray-600 tracking-widest animate-fade-in-slow">
        Seja bem-vindo à Triés Arquitetura
      </p>
    </div>
  );
};

export default Preloader;