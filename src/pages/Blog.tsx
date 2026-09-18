import { posts } from '../content/posts';
import { PostCard } from '../components/PostCard';
import { DemoBadge } from '../components/DemoBadge';

export function Blog() {
  return (
    <div className="page-blog">
      <h1>Blog</h1>
      <DemoBadge />
      <div className="cards">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
