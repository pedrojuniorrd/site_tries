import './globals.css';
import React from 'react';
import { Montserrat } from 'next/font/google'; // Importe a nova fonte Montserrat
import Header from '../components/Header';
import Footer from '../components/Footer';

// Configure a fonte Montserrat
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat', // Define a variável CSS
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
    // Aplica a classe de variável da Montserrat
    <html lang="pt-BR" className={`${montserrat.variable} scroll-smooth`}>
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