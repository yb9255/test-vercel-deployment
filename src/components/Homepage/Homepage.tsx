import type { Post } from '../Posts/type';
import FeaturedPosts from './FeaturedPosts';
import Hero from './Hero';

const DUMMY_DATA: Post[] = [
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
    slug: 'getting-started-nextjs',
  },
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
    slug: 'getting-started-nextjs2',
  },
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
    slug: 'getting-started-nextjs3',
  },
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
    slug: 'getting-started-nextjs4',
  },
];

function Homepage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_DATA} />
    </>
  );
}

export default Homepage;
