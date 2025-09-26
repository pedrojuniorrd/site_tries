import React from 'react';
import Link from 'next/link';

// Se você estiver usando ícones Feather Icons ou qualquer outra biblioteca de ícones
// que precise ser renderizada como SVG, você pode adicionar o código do SVG aqui.
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);

const Footer: React.FC = () => {
    return (
      // Fundo preto puro
      <footer className="w-full bg-black text-white py-16 font-montserrat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
            
            {/* Coluna 1: Informações da Empresa / Logo */}
            <div>
              <h3 className="text-xl font-playfair-display font-light mb-6 uppercase border-t border-gray-700 pt-4 tracking-wider">
                Triés Arquitetura
              </h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Excelência em projetos arquitetônicos residenciais e comerciais, transformando visões em realidade.
              </p>
            </div>

            {/* Coluna 2: Navegação */}
            <div>
              <h3 className="text-sm font-montserrat font-semibold mb-6 uppercase border-t border-gray-700 pt-4 tracking-widest">
                Links Rápidos
              </h3>
              <ul className="space-y-3 text-gray-300 font-light">
                <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#projetos" className="hover:text-white transition-colors">Projetos</Link></li>
                <li><Link href="#sobre" className="hover:text-white transition-colors">Sobre</Link></li>
                <li><Link href="#contato" className="hover:text-white transition-colors">Contato</Link></li>
              </ul>
            </div>

            {/* Coluna 3: Contato */}
            <div>
              <h3 className="text-sm font-montserrat font-semibold mb-6 uppercase border-t border-gray-700 pt-4 tracking-widest">
                Fale Conosco
              </h3>
              <p className="text-gray-300 font-light">E-mail: tries.arquitetura@gmail.com</p>
              <p className="text-gray-300 font-light">Telefone: +55 11 99999-9999</p>
            </div>

            {/* Coluna 4: Redes Sociais */}
            <div>
              <h3 className="text-sm font-montserrat font-semibold mb-6 uppercase border-t border-gray-700 pt-4 tracking-widest">
                Mídias Sociais
              </h3>
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Instagram">
                  <InstagramIcon />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                  <LinkedinIcon />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Facebook">
                  <FacebookIcon />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Direitos Autorais: Agora com text-gray-500 para maior visibilidade */}
          <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs font-light">
            <p>&copy; {new Date().getFullYear()} Triés Arquitetura. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;