import React from 'react';
import classes from '@/styles/all-posts.module.css';
import { Post } from '../Posts/type';
import { PostsGrid } from '../Posts';

type Props = {
  posts: Post[];
};

function PostsPage({ posts }: Props) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default PostsPage;
