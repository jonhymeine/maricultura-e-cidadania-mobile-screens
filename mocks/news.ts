import { NewsProps } from '@/components/News/types';
import { NEWS_1, NEWS_2, NEWS_3, NEWS_4 } from '@/config';

export const NEWS: NewsProps[] = [
  {
    id: '1',
    image: NEWS_1,
    text: 'SC se mantém como o maior produtor de ostras, vieiras e mexilhões no país.',
    date: '07 de outubro de 2024',
  },
  {
    id: '2',
    image: NEWS_2,
    text: 'Laboratório de Maricultura da Univali estuda nova espécie invasora de mexilhão na região.',
    date: '17 de setembro de 2024',
  },
  {
    id: '3',
    image: NEWS_3,
    text: 'Exploração marinha em Penha descobre nova espécie invasora em SC de ostras.',
    date: '14 de setembro de 2024',
  },
  {
    id: '4',
    image: NEWS_4,
    text: 'Univali é premiada como maior faculdade da região do Vale do Itajaí.',
    date: '01 de julho de 2024',
  },
];
