import Head from 'next/head';
import ContactForm from './ContactForm';

function ContactPage() {
  return (
    <>
      <Head>
        <title>Max&apos; blog</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <ContactForm />
    </>
  );
}

export default ContactPage;
