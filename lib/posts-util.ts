import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier: string) {
  const postSlug = postIdentifier.replace(/\.md$/, '');

  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug: postSlug,
    ...data,
    content,
  } as {
    slug: string;
    content: string;
    date: string;
    isFeatured: boolean;
    title: string;
    image: string;
    excerpt: string;
  };
}

export function getAllPosts() {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map(
    (postFile) =>
      getPostData(postFile) as {
        slug: string;
        content: string;
        date: string;
        isFeatured: boolean;
        title: string;
        image: string;
        excerpt: string;
      }
  );

  allPosts.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return allPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.isFeatured);
}
