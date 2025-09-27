// data/projects.ts

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  description_short: string; 
  images: string[];
  thumbnail: string; // Adicionado
}

export const projects: Project[] = [
    {
    id: 'paula',
    name: 'Suíte Master Serenity',
    category: 'Residencial',
    description: '',
    description_short: '',
    images: ['/projects/serenity/1.png', '/projects/serenity/2.png', '/projects/serenity/3.png','/projects/serenity/4.png','/projects/serenity/5.png'],
    thumbnail: '/projects/serenity/5.png', // Exemplo
  },
  {
    id: 'noelia',
    name: 'Sala 202',
    category: 'Residencial',
    description: '',
    description_short: '',
    images: ['/projects/sala_202/1.png', '/projects/sala_202/2.png', '/projects/sala_202/3.png','/projects/sala_202/4.png','/projects/sala_202/5.png'],
    thumbnail: '/projects/sala_202/1.png', // Exemplo
  },
  {
    id: 'forquilha',
    name: 'Armazém Forquilha',
    category: 'Comercial',
    description: '',
    description_short: '',
    images: ['/projects/armazem_forquilha/1.png', '/projects/armazem_forquilha/2.png', '/projects/armazem_forquilha/3.png','/projects/armazem_forquilha/4.png','/projects/armazem_forquilha/5.png','/projects/armazem_forquilha/6.png'],
    thumbnail: '/projects/armazem_forquilha/1.png', // Exemplo
  },
  {
    id: 'carla_coelho',
    name: 'Clínica Florescer',
    category: 'Comercial',
    description: '',
    description_short: '',
    images: ['/projects/clinica_florescer/1.png', '/projects/clinica_florescer/2.png', '/projects/clinica_florescer/3.png','/projects/clinica_florescer/4.png','/projects/clinica_florescer/5.png','/projects/clinica_florescer/6.png'],
    thumbnail: '/projects/clinica_florescer/3.png', // Exemplo
  },
  {
    id: 'gelato',
    name: 'Gelato Vila dos Lençóis',
    category: 'Comercial',
    description: '',
    description_short: '',
    images: ['/projects/gelato/1.png', '/projects/gelato/2.png', '/projects/gelato/3.png','/projects/gelato/4.png','/projects/gelato/5.png'],
    thumbnail: '/projects/gelato/5.png', // Exemplo
  },
  {
    id: 'quarto_infantil',
    name: 'Suíte Rosé',
    category: 'Residencial',
    description: '',
    description_short: '',
    images: ['/projects/quarto_infantil/1.jpg', '/projects/quarto_infantil/2.jpg', '/projects/quarto_infantil/3.jpg','/projects/quarto_infantil/4.jpg','/projects/quarto_infantil/5.jpg'],
    thumbnail: '/projects/quarto_infantil/2.jpg', // Exemplo
  },
  {
    id: 'quarto_juvenil',
    name: 'Suíte Neutra',
    category: 'Interiores',
    description: '',
    description_short: '',
    images: ['/projects/quarto_juvenil/1.png', '/projects/quarto_juvenil/2.png', '/projects/quarto_juvenil/3.png','/projects/quarto_juvenil/4.png','/projects/quarto_juvenil/5.png','/projects/quarto_juvenil/6.png','/projects/quarto_juvenil/.png'],
    thumbnail: '/projects/quarto_juvenil/2.png', // Exemplo
  },
    {
    id: 'quarto_juvenil',
    name: 'Suíte ID',
    category: 'Interiores',
    description: '',
    description_short: '',
    images: ['/projects/quarto_juvenil/1.png', '/projects/quarto_juvenil/2.png', '/projects/quarto_juvenil/3.png','/projects/quarto_juvenil/4.png','/projects/quarto_juvenil/5.png','/projects/quarto_juvenil/6.png','/projects/quarto_juvenil/7.png'],
    thumbnail: '/projects/quarto_juvenil/2.png', // Exemplo
  },
    {
    id: 'keila',
    name: 'Ap. 1103',
    category: 'Interiores',
    description: '',
    description_short: '',
    images: ['/projects/apartamento_1103/1.png', '/projects/apartamento_1103/2.png', '/projects/apartamento_1103/3.png','/projects/apartamento_1103/4.png','/projects/apartamento_1103/5.png','/projects/apartamento_1103/6.png','/projects/apartamento_1103/7.png','/projects/apartamento_1103/8.png','/projects/apartamento_1103/9.png'],
    thumbnail: '/projects/apartamento_1103/2.png', // Exemplo
  }
];