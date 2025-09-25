'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full z-10 p-6 bg-white bg-opacity-80 backdrop-blur-sm shadow-sm">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-wide">
          <Link href="/">
            <h1 className="text-3xl font-playfair-display font-light text-zinc-900 tracking-wide">
              Triés Arquitetura
            </h1>
          </Link>
        </div>
        
        {/* Ícone do menu hamburguer para mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Links de navegação para desktop */}
        <ul className="hidden md:flex space-x-6 font-lato text-gray-700 font-medium">
          <li><Link href="#projetos" className="hover:text-black transition-colors duration-300">Projetos</Link></li>
          <li><Link href="#sobre" className="hover:text-black transition-colors duration-300">Sobre</Link></li>
          <li><Link href="#contato" className="hover:text-black transition-colors duration-300">Contato</Link></li>
        </ul>
      </nav>

      {/* Menu mobile (aparece quando isOpen é true) */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-4 pt-4 pb-2 font-lato text-gray-700 font-medium">
          <li><Link href="#projetos" onClick={toggleMenu} className="hover:text-black transition-colors duration-300">Projetos</Link></li>
          <li><Link href="#sobre" onClick={toggleMenu} className="hover:text-black transition-colors duration-300">Sobre</Link></li>
          <li><Link href="#contato" onClick={toggleMenu} className="hover:text-black transition-colors duration-300">Contato</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;