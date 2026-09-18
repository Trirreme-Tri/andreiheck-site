import type { Servico } from './types';

export const servicos: Servico[] = [
  {
    id: 'casamento',
    titulo: 'Casamento',
    descricao:
      'Cobertura completa do dia: preparação, cerimônia, festa e os detalhes que contam a história do casal.',
    observacao: 'Taxa de locomoção para eventos fora de Alto Paraíso.',
  },
  {
    id: 'ensaio',
    titulo: 'Ensaio',
    descricao:
      'Ensaios pré-wedding, casal ou família, em locação externa ou em estúdio.',
    observacao: 'Aluguel de estúdio cobrado à parte, quando aplicável.',
  },
  {
    id: 'video',
    titulo: 'Vídeo',
    descricao:
      'Registro em vídeo do casamento ou do ensaio, com edição para redes sociais ou filme completo.',
    observacao: 'Taxa de locomoção para eventos fora de Alto Paraíso.',
  },
];
