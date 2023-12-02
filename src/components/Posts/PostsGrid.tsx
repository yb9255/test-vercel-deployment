import classes from '@/styles/posts-grid.module.css';
import PostItem from './PostItem';
import type { Post } from './type';

type Props = {
  posts: Post[];
};

function PostsGrid({ posts }: Props) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
