import type { Post } from './types';

// Posts de exemplo, só para mostrar o formato do blog — não são conteúdo real.
export const posts: Post[] = [
  {
    id: 'p1',
    slug: 'exemplo',
    titulo: 'Um dia de casamento no campo',
    data: '2026-05-10',
    resumo:
      'Como foi acompanhar a Marina e o Thiago num casamento ao ar livre, entre luz dourada e silêncio.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'Chegamos ainda de manhã, com a luz baixa e o campo em silêncio. O dia começou devagar, com café e nervosismo bom.',
      },
      { tipo: 'foto', legenda: 'Preparação da noiva' },
      {
        tipo: 'texto',
        texto:
          'À tarde, a cerimônia ao ar livre trouxe a luz dourada que a gente sempre persegue.',
      },
      { tipo: 'foto', legenda: 'Cerimônia ao entardecer' },
      {
        tipo: 'video',
        titulo: 'Same day edit do casamento',
        link: '#',
      },
    ],
  },
  {
    id: 'p2',
    slug: 'ensaio-pre-wedding',
    titulo: 'Ensaio pré-wedding: o que levar em conta',
    data: '2026-04-02',
    resumo:
      'Dicas práticas pra aproveitar melhor o ensaio pré-wedding, do horário à escolha do local.',
    blocos: [
      {
        tipo: 'texto',
        texto:
          'O horário do fim de tarde costuma render a luz mais bonita — vale reservar pelo menos duas horas antes do pôr do sol.',
      },
      { tipo: 'foto', legenda: 'Ensaio pré-wedding no campo' },
      {
        tipo: 'link',
        texto: 'Veja os serviços de ensaio',
        href: '/servicos',
      },
    ],
  },
];
