import Homepage from '@/components/Homepage';
import { getFeaturedPosts } from '../../lib/posts-util';
import { Post } from '@/components/Posts/type';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';

function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <Homepage posts={posts} />;
}

export const getStaticProps = (async () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 50,
  };
}) satisfies GetStaticProps<{
  posts: Post[];
}>;

export default Home;
