import React from 'react';
import classes from '@/styles/all-posts.module.css';
import { Post } from '../Posts/type';
import { PostsGrid } from '../Posts';
import Head from 'next/head';

type Props = {
  posts: Post[];
};

function PostsPage({ posts }: Props) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={posts} />
      </section>
    </>
  );
}

export default PostsPage;
