import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-neutral-50 p-8 text-center text-gray-500 font-inter text-sm md:text-base">
      <p>&copy; {new Date().getFullYear()} Triés Arquitetura. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
