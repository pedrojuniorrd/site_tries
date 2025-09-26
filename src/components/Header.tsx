// src/components/Header.tsx
'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // O estilo do header agora é fixo, garantindo legibilidade e elegância constantes.
  const headerClasses = `fixed w-full z-50 p-6 transition-all duration-300 ${
    isOpen ? 'bg-white/95 shadow-md' : 'bg-white/80 backdrop-blur-sm shadow-sm'
  }`;

  return (
    <header className={headerClasses}>
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-wide">
          <Link href="/">
            <h1 className="text-3xl font-montserrat font-light text-zinc-900 tracking-wide">
              Triés Arquitetura
            </h1>
          </Link>
        </div>
        
        {/* Ícone do menu hamburguer para mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-zinc-800 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 L 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Links de navegação para desktop */}
        <ul className="hidden md:flex space-x-8 font-montserrat text-zinc-700">
          <li><Link href="#home" className="nav-link hover:text-black transition-colors">Home</Link></li>
          <li><Link href="#projetos" className="nav-link hover:text-black transition-colors">Projetos</Link></li>
          <li><Link href="#sobre" className="nav-link hover:text-black transition-colors">Sobre</Link></li>
          <li><Link href="#contato" className="nav-link hover:text-black transition-colors">Contato</Link></li>
        </ul>
      </nav>

      {/* Menu mobile */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-6 pt-8 pb-4 font-montserrat font-medium text-zinc-800">
          <li><Link href="#home" onClick={toggleMenu} className="nav-link hover:text-black">Home</Link></li>
          <li><Link href="#projetos" onClick={toggleMenu} className="nav-link hover:text-black">Projetos</Link></li>
          <li><Link href="#sobre" onClick={toggleMenu} className="nav-link hover:text-black">Sobre</Link></li>
          <li><Link href="#contato" onClick={toggleMenu} className="nav-link hover:text-black">Contato</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;