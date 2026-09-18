import { agendaAno, agendaMes, datasAgenda } from '../content/agenda';
import { DemoBadge } from '../components/DemoBadge';
import type { StatusAgenda } from '../content/types';

const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const nomesDosMeses = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];

function statusDoDia(dia: number): StatusAgenda {
  const chave = `${String(agendaAno)}-${String(agendaMes + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
  const encontrada = datasAgenda.find((data) => data.data === chave);
  return encontrada ? encontrada.status : 'disponivel';
}

export function Agenda() {
  const primeiroDiaSemana = new Date(agendaAno, agendaMes, 1).getDay();
  const totalDias = new Date(agendaAno, agendaMes + 1, 0).getDate();
  const celulas = [
    ...Array.from({ length: primeiroDiaSemana }, () => null),
    ...Array.from({ length: totalDias }, (_, indice) => indice + 1),
  ];

  return (
    <div className="page-agenda">
      <h1>Agenda</h1>
      <DemoBadge />
      <p>
        {nomesDosMeses[agendaMes]} de {agendaAno} — datas fictícias, só para
        mostrar o formato. Nenhuma data é reservada por aqui.
      </p>
      <div className="calendar">
        {diasDaSemana.map((dia) => (
          <div key={dia} className="calendar-weekday">
            {dia}
          </div>
        ))}
        {celulas.map((dia, indice) =>
          dia === null ? (
            <div
              key={`vazio-${String(indice)}`}
              className="calendar-day calendar-day-empty"
            />
          ) : (
            <div
              key={dia}
              className={`calendar-day calendar-day-${statusDoDia(dia)}`}
            >
              {dia}
            </div>
          ),
        )}
      </div>
      <ul className="calendar-legend">
        <li className="calendar-day-disponivel">Disponível</li>
        <li className="calendar-day-ocupada">Ocupada</li>
      </ul>
    </div>
  );
}
