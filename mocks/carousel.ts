import { CAROUSEL_1, CAROUSEL_2, CAROUSEL_3 } from '@/config';

export interface CarouselProps {
  id: string;
  image: string;
  period: string;
  description: string;
}

export const CAROUSEL: CarouselProps[] = [
  {
    id: '1',
    description:
      'Laboratório de Maricultura da Univali estuda nova espécie invasora de mexilhão na região.',
    image: CAROUSEL_1,
    period: '3 Semanas atrás',
  },
  {
    id: '2',
    description: 'Univali inicia uma exploração marinha em Penha.',
    image: CAROUSEL_2,
    period: '1 Semana atrás',
  },
  {
    id: '3',
    description:
      'Laboratório de Estudos Marinhos Aplicados (LEMA) apresenta seu projeto ao público.',
    image: CAROUSEL_3,
    period: '2 Dias atrás',
  },
];
