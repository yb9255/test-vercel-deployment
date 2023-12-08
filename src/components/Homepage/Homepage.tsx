import type { Post } from '../Posts/type';
import FeaturedPosts from './FeaturedPosts';
import Hero from './Hero';

type Props = {
  posts: Post[];
};

function Homepage({ posts }: Props) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export default Homepage;
