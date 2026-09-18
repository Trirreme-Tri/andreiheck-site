import { useState, type SubmitEvent } from 'react';
import { perfil } from '../content/profile';
import { buildWhatsAppLink } from '../lib/whatsapp';
import { WhatsAppLink } from '../components/WhatsAppLink';

interface FormularioOrcamento {
  nome: string;
  telefone: string;
  tipoServico: string;
  dataEvento: string;
  mensagem: string;
}

const valoresIniciais: FormularioOrcamento = {
  nome: '',
  telefone: '',
  tipoServico: 'Casamento',
  dataEvento: '',
  mensagem: '',
};

function montarMensagem(form: FormularioOrcamento): string {
  const linhas = [
    `Olá! Meu nome é ${form.nome}.`,
    `Tenho interesse em: ${form.tipoServico}.`,
  ];
  if (form.dataEvento) {
    linhas.push(`Data prevista: ${form.dataEvento}.`);
  }
  linhas.push(`Telefone para contato: ${form.telefone}.`);
  if (form.mensagem) {
    linhas.push(form.mensagem);
  }
  return linhas.join('\n');
}

export function Contato() {
  const [form, setForm] = useState<FormularioOrcamento>(valoresIniciais);

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const mensagem = montarMensagem(form);
    window.open(buildWhatsAppLink(perfil.whatsapp, mensagem), '_blank');
  }

  return (
    <div className="page-contato">
      <h1>Contato</h1>
      <p>
        Prefere falar direto?{' '}
        <WhatsAppLink mensagem="Olá! Vim pelo site e gostaria de um orçamento.">
          Fale pelo WhatsApp
        </WhatsAppLink>
        .
      </p>

      <form className="form-orcamento" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          required
          value={form.nome}
          onChange={(event) => {
            setForm({ ...form, nome: event.target.value });
          }}
        />

        <label htmlFor="telefone">Telefone</label>
        <input
          id="telefone"
          type="tel"
          required
          value={form.telefone}
          onChange={(event) => {
            setForm({ ...form, telefone: event.target.value });
          }}
        />

        <label htmlFor="tipoServico">Tipo de serviço</label>
        <select
          id="tipoServico"
          value={form.tipoServico}
          onChange={(event) => {
            setForm({ ...form, tipoServico: event.target.value });
          }}
        >
          <option value="Casamento">Casamento</option>
          <option value="Ensaio">Ensaio</option>
          <option value="Vídeo">Vídeo</option>
        </select>

        <label htmlFor="dataEvento">Data prevista do evento</label>
        <input
          id="dataEvento"
          type="date"
          value={form.dataEvento}
          onChange={(event) => {
            setForm({ ...form, dataEvento: event.target.value });
          }}
        />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          value={form.mensagem}
          onChange={(event) => {
            setForm({ ...form, mensagem: event.target.value });
          }}
        />

        <p className="form-note">
          Ao enviar, o pedido é aberto no WhatsApp — nada é salvo ou enviado por
          aqui.
        </p>

        <button type="submit" className="button-primary">
          Enviar pedido pelo WhatsApp
        </button>
      </form>
    </div>
  );
}
