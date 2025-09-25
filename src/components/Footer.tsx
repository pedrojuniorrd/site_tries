import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 p-8 text-center text-gray-600">
      <p>&copy; {new Date().getFullYear()} Triés Arquitetura. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;