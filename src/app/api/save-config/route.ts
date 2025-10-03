// src/app/api/save-config/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { SiteConfig } from '../../../data/config';

export async function POST(request: Request) {
  try {
    const data: SiteConfig = await request.json();

    // O caminho para o arquivo de configuração
    const configPath = path.join(process.cwd(), 'src', 'data', 'config.ts');

    // Formata o conteúdo do arquivo TypeScript
    const fileContent = `
// src/data/config.ts

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface SiteConfig {
  siteName: string;
  description: string;
  contact: {
    email: string;
    phone: string;
  };
  socialMedia: {
    instagram: string;
    linkedin: string;
    facebook: string;
  };
  about: {
    title: string;
    description: string;
    team: TeamMember[];
  };
}

export const config: SiteConfig = ${JSON.stringify(data, null, 2)};
`;

    // Escreve o novo conteúdo no arquivo
    fs.writeFileSync(configPath, fileContent, 'utf-8');

    return NextResponse.json({ message: 'Configuração salva com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar a configuração:', error);
    return NextResponse.json({ message: 'Erro ao salvar a configuração' }, { status: 500 });
  }
}