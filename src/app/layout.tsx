import './globals.css';
import React from 'react';
import { Playfair_Display, Lato } from 'next/font/google'; // Importe as fontes
import Header from '../components/Header';
import Footer from '../components/Footer';

// Configure as fontes
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair-display', // Define a variável CSS
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato', // Define a variável CSS
});

export const metadata = {
  title: 'Triés Arquitetura',
  description: 'Projetos de arquitetura e design de interiores.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Adicione a classe 'scroll-smooth' para ativar a rolagem suave
    <html lang="pt-BR" className={`${playfairDisplay.variable} ${lato.variable} scroll-smooth`}>
      <body>
        <Header />
        <main className="pt-[84px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}