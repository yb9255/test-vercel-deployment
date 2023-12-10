import Head from 'next/head';
import type { Post } from '../Posts/type';
import FeaturedPosts from './FeaturedPosts';
import Hero from './Hero';

type Props = {
  posts: Post[];
};

function Homepage({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Max&apos; blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export default Homepage;
