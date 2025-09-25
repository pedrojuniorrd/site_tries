import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
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
        <ul className="flex space-x-6 font-lato text-gray-700 font-medium">
          {/* Link para a seção de projetos */}
          <li><Link href="#projetos" className="hover:text-black transition-colors duration-300">Projetos</Link></li>
          
          {/* Link para a seção sobre */}
          <li><Link href="#sobre" className="hover:text-black transition-colors duration-300">Sobre</Link></li>
          
          {/* Link para a seção de contato */}
          <li><Link href="#contato" className="hover:text-black transition-colors duration-300">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;