import classes from '@/styles/contact-form.module.css';
import { FormEvent, useEffect, useRef, useState } from 'react';
import Notification from '@/ui/Notification';
import { CustomError } from '@/types';
import { createPortal } from 'react-dom';

function ContactForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [responseStatus, setResponseStatus] = useState<
    'unset' | 'pending' | 'success' | 'error'
  >('unset');
  const [requestErrorMessage, setRequestErrorMessage] = useState<string | null>(
    null
  );

  const handleSendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!emailRef.current || !nameRef.current || !messageRef.current) return;

    setResponseStatus('pending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          email: emailRef.current.value,
          name: nameRef.current.value,
          message: messageRef.current.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new CustomError(data.message || 'something went wrong!');
      }

      setResponseStatus('success');
      emailRef.current.value = '';
      nameRef.current.value = '';
      messageRef.current.value = '';
    } catch (error) {
      if (error instanceof CustomError) {
        setRequestErrorMessage(error.message);
      }

      setResponseStatus('error');
    }
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (responseStatus === 'success' || responseStatus === 'error') {
      timer = setTimeout(() => {
        setRequestErrorMessage(null);
        setResponseStatus('unset');
      }, 3000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [responseStatus]);

  let notificationData:
    | {
        status: 'pending' | 'success' | 'error';
        title: string;
        message: string;
      }
    | undefined;

  if (responseStatus === 'pending') {
    notificationData = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }

  if (responseStatus === 'success') {
    notificationData = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (responseStatus === 'error') {
    notificationData = {
      status: 'error',
      title: 'Error!',
      message: requestErrorMessage ?? 'something went wrong!',
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={handleSendMessage}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameRef} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows={5} required ref={messageRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {responseStatus !== 'unset' &&
        notificationData &&
        createPortal(
          <Notification {...notificationData} />,
          document.querySelector('#notifications') as HTMLDivElement
        )}
    </section>
  );
}

export default ContactForm;
