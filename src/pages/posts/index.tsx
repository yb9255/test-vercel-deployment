import PostsPage from '@/components/PostsPage';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getAllPosts } from '../../../lib/posts-util';
import type { Post } from '@/components/Posts/type';

function Posts({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <PostsPage posts={posts} />;
}

export const getStaticProps = (async () => {
  const featuredPosts = getAllPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 50,
  };
}) satisfies GetStaticProps<{
  posts: Post[];
}>;

export default Posts;
