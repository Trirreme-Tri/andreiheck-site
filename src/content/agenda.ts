import type { DataAgenda } from './types';

// Datas fictícias, só para mostrar o formato da agenda visual (ver invariante 3 do design).
export const agendaAno = 2026;
export const agendaMes = 9; // outubro (0 = janeiro)

export const datasAgenda: DataAgenda[] = [
  { data: '2026-10-03', status: 'ocupada' },
  { data: '2026-10-04', status: 'ocupada' },
  { data: '2026-10-10', status: 'ocupada' },
  { data: '2026-10-17', status: 'ocupada' },
  { data: '2026-10-18', status: 'ocupada' },
  { data: '2026-10-24', status: 'ocupada' },
  { data: '2026-10-31', status: 'ocupada' },
];
