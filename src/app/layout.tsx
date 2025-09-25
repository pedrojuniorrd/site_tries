import './globals.css';
import React from 'react';
import { DM_Serif_Display, Inter } from 'next/font/google'; // Importe as novas fontes
import Header from '../components/Header';
import Footer from '../components/Footer';

// Configure as novas fontes
const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'], 
  variable: '--font-dm-serif-display', // Define a variável CSS
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter', // Define a variável CSS
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
    <html lang="pt-BR" className={`${dmSerifDisplay.variable} ${inter.variable} scroll-smooth`}>
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
