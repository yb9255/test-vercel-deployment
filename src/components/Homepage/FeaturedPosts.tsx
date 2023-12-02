import classes from '@/styles/featured-posts.module.css';
import { PostsGrid } from '../Posts';
import type { Post } from '../Posts/type';

type Props = {
  posts: Post[];
};

function FeaturedPosts({ posts }: Props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
