import type { Foto } from './types';

// Fotos de exemplo — substituídas pelas fotos reais do cliente antes da apresentação.
export const fotos: Foto[] = [
  {
    id: 'c1',
    categoria: 'casamento',
    legenda: 'Cerimônia ao entardecer',
    destaque: true,
    ordem: 1,
  },
  {
    id: 'c2',
    categoria: 'casamento',
    legenda: 'Troca de alianças',
    destaque: true,
    ordem: 2,
  },
  {
    id: 'c3',
    categoria: 'casamento',
    legenda: 'Primeira dança',
    destaque: false,
    ordem: 3,
  },
  {
    id: 'c4',
    categoria: 'casamento',
    legenda: 'Detalhes da decoração',
    destaque: false,
    ordem: 4,
  },
  {
    id: 'e1',
    categoria: 'ensaio',
    legenda: 'Ensaio pré-wedding no campo',
    destaque: true,
    ordem: 1,
  },
  {
    id: 'e2',
    categoria: 'ensaio',
    legenda: 'Ensaio ao amanhecer',
    destaque: false,
    ordem: 2,
  },
];
