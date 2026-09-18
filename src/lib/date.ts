export function formatarData(dataIso: string): string {
  return new Date(`${dataIso}T00:00:00`).toLocaleDateString('pt-BR');
}
