import { useParams } from 'react-router-dom';
import { PagePlaceholder } from '../components/PagePlaceholder';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  return <PagePlaceholder title={`Post: ${slug ?? ''}`} />;
}
