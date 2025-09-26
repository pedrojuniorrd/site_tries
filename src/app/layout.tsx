// src/app/layout.tsx
import './globals.css';
import React from 'react';
import { Montserrat } from 'next/font/google';
import ClientWrapper from '../components/ClientWrapper'; // Importe o novo wrapper

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
});

// Agora a metadata pode ser exportada sem problemas!
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
    <html lang="pt-BR" className={`${montserrat.variable} scroll-smooth`}>
      <body>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}