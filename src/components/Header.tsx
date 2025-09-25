import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed w-full z-10 p-6 bg-white bg-opacity-80 backdrop-blur-sm shadow-sm">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-wide">
          <Link href="/">
            <Image
              src="/LOGO_PRETO.png"
              alt="Logo Triés Arquitetura"
              width={180}
              height={40}
              priority
              className="h-auto w-auto"
            />
          </Link>
        </div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
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