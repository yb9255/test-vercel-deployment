import Image from 'next/image';
import classes from '@/styles/post-header.module.css';

type Props = {
  title: string;
  slug: string;
  image: string;
};

function PostHeader({ title, slug, image }: Props) {
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={imagePath} alt={title} width={200} height={150} />
    </header>
  );
}

export default PostHeader;
