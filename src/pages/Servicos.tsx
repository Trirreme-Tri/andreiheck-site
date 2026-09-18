import { servicos } from '../content/services';
import { ServiceCard } from '../components/ServiceCard';

export function Servicos() {
  return (
    <div className="page-servicos">
      <h1>Serviços</h1>
      <div className="cards">
        {servicos.map((servico) => (
          <ServiceCard key={servico.id} servico={servico} />
        ))}
      </div>
    </div>
  );
}
