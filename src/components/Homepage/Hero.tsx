import classes from '@/styles/hero.module.css';
import Image from 'next/image';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="An Image Showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi! I&apos;m Max</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;
