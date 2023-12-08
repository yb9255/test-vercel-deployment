import React from 'react';
import { Post } from '../Posts/type';
import PostHeader from './PostHeader';
import classes from '@/styles/post-content.module.css';
import ReactMarkdown from 'react-markdown';

type Props = {
  post: Post;
};

function PostDetailPage({ post }: Props) {
  const { title, slug, image } = post;

  return (
    <article className={classes.content}>
      <PostHeader title={title} slug={slug} image={image} />
    </article>
  );
}

export default PostDetailPage;
