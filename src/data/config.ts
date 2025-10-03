
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

export const config: SiteConfig = {
  "siteName": "Triés Arquitetura",
  "description": "Excelência em projetos arquitetônicos residenciais e comerciais, transformando visões em realidade.",
  "contact": {
    "email": "tries.arquitetura@gmail.com",
    "phone": "+55 98 98477-4897"
  },
  "socialMedia": {
    "instagram": "#",
    "linkedin": "#",
    "facebook": "#"
  },
  "about": {
    "title": "Sobre a Triés Arquitetura",
    "description": "Somos uma equipe composta por três arquitetas, que uniram suas experiências e visões para criar projetos que aliam estética, funcionalidade e propósito. Atuamos no desenvolvimento de projetos residenciais, comerciais e corporativos, sempre com foco em entender as necessidades de cada cliente e transformar espaços em ambientes únicos.",
    "team": [
      {
        "name": "Maria Eduarda",
        "role": "Especialista em Projeto Executivo de Arquitetura e Design de Interiores",
        "image": "/arquitetas/maria_eduarda.jpg"
      },
      {
        "name": "Kianny Dutra",
        "role": "Especialista em Design de Interiores, Iluminação e Produção Criativa",
        "image": "/arquitetas/kianny_dutra.jpg"
      },
      {
        "name": "Sabrina Britto",
        "role": "Especialista em Projetos Arquitetônicos e Luminotécnico",
        "image": "/arquitetas/sabrina_moura.jpg"
      }
    ]
  }
};
