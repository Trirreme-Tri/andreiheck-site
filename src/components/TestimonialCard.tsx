import type { Depoimento } from '../content/types';

interface TestimonialCardProps {
  depoimento: Depoimento;
}

export function TestimonialCard({ depoimento }: TestimonialCardProps) {
  return (
    <blockquote className="card">
      <p>“{depoimento.texto}”</p>
      <cite>{depoimento.nomeCasal}</cite>
    </blockquote>
  );
}
