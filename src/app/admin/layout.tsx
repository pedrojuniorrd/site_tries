// src/app/admin/layout.tsx
import React from 'react';

export const metadata = {
  title: 'Painel de Controle | Triés Arquitetura',
  description: 'Painel de administração para o site Triés Arquitetra.',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Retorne apenas o conteúdo, sem as tags <html> e <body>
  return (
    <div className="bg-gray-50">
      <main>{children}</main>
    </div>
  );
}