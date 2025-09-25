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
    id: 'nonato',
    name: 'Projeto Nonato',
    category: 'Residencial',
    description: 'Um projeto de arquitetura residencial que une modernidade e conforto, com foco na iluminação natural e em espaços de convívio amplos e integrados.',
    description_short: 'Modernidade e conforto unidos em um projeto residencial com espaços integrados.',
    images: ['/projects/nonato/2.png', '/projects/nonato/3.png', '/projects/nonato/4.png'],
    thumbnail: '/projects/nonato/thumbnail.png', // Exemplo
  },
  {
    id: 'residencia-alpha',
    name: 'Residência Alpha',
    category: 'Residencial',
    description: 'Um projeto que equilibra o minimalismo com o calor da madeira, criando um refúgio urbano para a família. As linhas retas e os grandes vãos de vidro conectam o interior com a natureza ao redor, promovendo a sensação de amplitude e leveza.',
    description_short: 'Um refúgio urbano que une minimalismo e a beleza natural da madeira.',
    images: ['/projects/residencia-alpha/1.jpg', '/projects/residencia-alpha/2.jpg', '/projects/residencia-alpha/3.jpg'],
    thumbnail: '/projects/residencia-alpha/thumbnail.png', // Exemplo
  },
  {
    id: 'clinica-bem-estar',
    name: 'Clínica de Bem-Estar',
    category: 'Comercial',
    description: 'Espaços pensados para promover a calma e o relaxamento. A paleta de cores neutra e a luz natural são os destaques, criando um ambiente acolhedor e profissional para pacientes e terapeutas.',
    description_short: 'Ambientes serenos e acolhedores, projetados para a calma e o relaxamento.',
    images: ['/projects/clinica-bem-estar/1.jpg', '/projects/clinica-bem-estar/2.jpg', '/projects/clinica-bem-estar/3.jpg'],
    thumbnail: '/projects/clinica-bem-estar/thumbnail.png', // Exemplo
  },
  {
    id: 'loft-urbano',
    name: 'Loft Urbano',
    category: 'Interiores',
    description: 'Um projeto de interiores que transforma um espaço pequeno em um ambiente funcional e moderno. O design inteligente, com móveis multifuncionais e cores vibrantes, otimiza cada metro quadrado sem abrir mão do estilo.',
    description_short: 'Design inteligente e funcional que otimiza espaços pequenos com estilo.',
    images: ['/projects/loft-urbano/1.jpg', '/projects/loft-urbano/2.jpg', '/projects/loft-urbano/3.jpg'],
    thumbnail: '/projects/loft-urbano/thumbnail.png', // Exemplo
  },
  {
    id: 'vila-das-palmeiras',
    name: 'Vila das Palmeiras',
    category: 'Residencial',
    description: 'Uma residência familiar projetada com foco na integração social e no contato com a área externa. A piscina em formato orgânico e a área gourmet com churrasqueira são o coração da casa, perfeitos para receber amigos e familiares.',
    description_short: 'Uma residência familiar focada na integração social e no lazer ao ar livre.',
    images: ['/projects/vila-das-palmeiras/1.jpg', '/projects/vila-das-palmeiras/2.jpg', '/projects/vila-das-palmeiras/3.jpg'],
    thumbnail: '/projects/vila-das-palmeiras/thumbnail.png', // Exemplo
  },
  {
    id: 'restaurante-fusion',
    name: 'Restaurante Fusion',
    category: 'Comercial',
    description: 'O design interior deste restaurante foi concebido para refletir a culinária que ele oferece: uma fusão de tradição e modernidade. Elementos rústicos como tijolos expostos se misturam a um mobiliário contemporâneo, criando uma atmosfera única.',
    description_short: 'Design interior que une o rústico com o contemporâneo, criando uma atmosfera única.',
    images: ['/projects/restaurante-fusion/1.jpg', '/projects/restaurante-fusion/2.jpg', '/projects/restaurante-fusion/3.jpg'],
    thumbnail: '/projects/restaurante-fusion/thumbnail.png', // Exemplo
  },
  {
    id: 'apartamento-cobertura',
    name: 'Apartamento Cobertura',
    category: 'Interiores',
    description: 'Um projeto de interiores de alto padrão que prioriza vistas panorâmicas e conforto. A suíte master conta com uma banheira de hidromassagem e um sistema de automação completo para controle de luz e temperatura.',
    description_short: 'Um projeto de interiores de alto padrão com foco em vistas panorâmicas e conforto.',
    images: ['/projects/apartamento-cobertura/1.jpg', '/projects/apartamento-cobertura/2.jpg', '/projects/apartamento-cobertura/3.jpg'],
    thumbnail: '/projects/apartamento-cobertura/thumbnail.png', // Exemplo
  }
];