import { Link } from 'react-router-dom';
import type { Post } from '../content/types';
import { formatarData } from '../lib/date';
import { PhotoPlaceholder } from './PhotoPlaceholder';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="card">
      <PhotoPlaceholder legenda={post.titulo} aspectRatio="16 / 9" />
      <h3>
        <Link to={`/blog/${post.slug}`}>{post.titulo}</Link>
      </h3>
      <p className="card-note">{formatarData(post.data)}</p>
      <p>{post.resumo}</p>
      <Link to={`/blog/${post.slug}`}>Ler mais</Link>
    </article>
  );
}
