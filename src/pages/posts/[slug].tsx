import PostDetailPage from '@/components/PostDetailPage';
import type { Post } from '@/components/Posts/type';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import { getPostData, getPostFiles } from '../../../lib/posts-util';
import { useRouter } from 'next/router';

function PostDetail({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;

  return <PostDetailPage post={post} />;
}

export const getStaticPaths = (async () => {
  const files = getPostFiles();

  const slugs = files.map((fileName) => ({
    params: { slug: fileName.replace(/\.md$/, '') },
  }));

  return {
    paths: slugs,
    fallback: true,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { params } = context;
  const slug = params?.slug;

  if (typeof slug !== 'string') {
    return {
      notFound: true,
    };
  }

  const post = getPostData(slug);

  return {
    props: {
      post,
    },
    revalidate: 50,
  };
}) satisfies GetStaticProps<{
  post: Post;
}>;

export default PostDetail;
