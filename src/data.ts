/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'restauro' | 'escultura';
  description: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Cristaleira Século XIX',
    category: 'restauro',
    description: 'Restauração completa de cristaleira em jacarandá, recuperação de verniz e metais originais.',
    imageUrl: '/assets/images/restored_cabinet_detail_1782236223650.jpg',
  },
  {
    id: '2',
    title: 'Fluidez em Mogno',
    category: 'escultura',
    description: 'Escultura abstrata esculpida à mão em bloco único de mogno recuperado.',
    imageUrl: '/assets/images/modern_wood_sculpture_1782236234205.jpg',
  },
  {
    id: '3',
    title: 'Poltrona Luís XV',
    category: 'restauro',
    description: 'Recuperação estrutural e acabamento manual em cera de abelha.',
    imageUrl: '/assets/images/hero_restoration_workshop_1782236210337.jpg',
  },
];

export const services: Service[] = [
  {
    id: 'restauro',
    title: 'Restauro de Móveis',
    description: 'Preservação da história e integridade de peças antigas com técnicas tradicionais.',
    icon: 'Hammer',
  },
  {
    id: 'escultura',
    title: 'Esculturas Autorais',
    description: 'Criação de peças únicas em madeira e metais, unindo técnica e expressão artística.',
    icon: 'Palette',
  },
  {
    id: 'reparo',
    title: 'Reparos Técnicos',
    description: 'Consertos estruturais, acabamentos e manutenção de mobiliário de alta qualidade.',
    icon: 'Wrench',
  },
];
