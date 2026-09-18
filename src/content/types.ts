export interface Perfil {
  nome: string;
  fraseImpacto: string;
  bioCurta: string;
  bioCompleta: string;
  cidadeBase: string;
  whatsapp: string;
  email: string;
  instagram: string;
  facebook: string;
}

export type CategoriaFoto = 'casamento' | 'ensaio';

export interface Foto {
  id: string;
  categoria: CategoriaFoto;
  legenda: string;
  destaque: boolean;
  ordem: number;
}

export interface Video {
  id: string;
  titulo: string;
  link: string;
}

export interface Servico {
  id: string;
  titulo: string;
  descricao: string;
  observacao: string;
}

export interface Depoimento {
  id: string;
  nomeCasal: string;
  texto: string;
}

export type BlocoConteudo =
  | { tipo: 'texto'; texto: string }
  | { tipo: 'foto'; legenda: string }
  | { tipo: 'video'; titulo: string; link: string }
  | { tipo: 'link'; texto: string; href: string };

export interface Post {
  id: string;
  slug: string;
  titulo: string;
  data: string;
  resumo: string;
  blocos: BlocoConteudo[];
}

export type StatusAgenda = 'disponivel' | 'ocupada';

export interface DataAgenda {
  data: string;
  status: StatusAgenda;
}
