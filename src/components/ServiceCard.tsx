import type { Servico } from '../content/types';

interface ServiceCardProps {
  servico: Servico;
}

export function ServiceCard({ servico }: ServiceCardProps) {
  return (
    <article className="card">
      <h3>{servico.titulo}</h3>
      <p>{servico.descricao}</p>
      <p className="card-note">{servico.observacao}</p>
    </article>
  );
}
