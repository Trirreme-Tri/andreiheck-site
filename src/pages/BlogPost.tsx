import { Link, useParams } from 'react-router-dom';
import { posts } from '../content/posts';
import type { BlocoConteudo } from '../content/types';
import { formatarData } from '../lib/date';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { DemoBadge } from '../components/DemoBadge';

function Bloco({ bloco }: { bloco: BlocoConteudo }) {
  switch (bloco.tipo) {
    case 'texto':
      return <p>{bloco.texto}</p>;
    case 'foto':
      return <PhotoPlaceholder legenda={bloco.legenda} aspectRatio="16 / 9" />;
    case 'video':
      return (
        <p>
          <a href={bloco.link} target="_blank" rel="noreferrer">
            {bloco.titulo}
          </a>
        </p>
      );
    case 'link':
      return bloco.href.startsWith('/') ? (
        <p>
          <Link to={bloco.href}>{bloco.texto}</Link>
        </p>
      ) : (
        <p>
          <a href={bloco.href} target="_blank" rel="noreferrer">
            {bloco.texto}
          </a>
        </p>
      );
  }
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((candidato) => candidato.slug === slug);

  if (!post) {
    return (
      <div className="page-blog-post">
        <h1>Post não encontrado</h1>
        <p>
          Este post de exemplo não existe. Volte para o{' '}
          <Link to="/blog">blog</Link>.
        </p>
      </div>
    );
  }

  return (
    <article className="page-blog-post">
      <DemoBadge />
      <h1>{post.titulo}</h1>
      <p className="card-note">{formatarData(post.data)}</p>
      {post.blocos.map((bloco, indice) => (
        <Bloco key={indice} bloco={bloco} />
      ))}
    </article>
  );
}
