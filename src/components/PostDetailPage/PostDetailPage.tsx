import React from 'react';
import { Post } from '../Posts/type';
import PostHeader from './PostHeader';
import classes from '@/styles/post-content.module.css';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

import Head from 'next/head';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

type Props = {
  post: Post;
};

function PostDetailPage({ post }: Props) {
  const { title, slug, image, content, excerpt } = post;

  const customRenderers = {
    p(paragraph: any) {
      const { node } = paragraph;

      if (node?.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image?.properties?.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code: any) {
      const { className, children } = code;
      const language = className?.split('-')[1];

      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
      </Head>
      <article className={classes.content}>
        <PostHeader title={title} slug={slug} image={image} />
        <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
      </article>
    </>
  );
}

export default PostDetailPage;
