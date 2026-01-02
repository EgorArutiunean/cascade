import { FormEvent, useState } from 'react';
import type { Translation } from '../translations';

const MAIL_TO = 'av.cozacenco@gmail.com';
const MAIL_SUBJECT = '??????? ??? ?????, ? ? ??????!?';

interface SubmitNewsFormProps {
  form: Translation['form'];
}

const SubmitNewsForm = ({ form }: SubmitNewsFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = encodeURIComponent(
      `${form.labels.name}: ${name}
${form.labels.email}: ${email}
${form.labels.message}:
${message}`
    );
    const subject = encodeURIComponent(MAIL_SUBJECT);
    window.location.href = `mailto:${MAIL_TO}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="border-b border-black/10 bg-white/80 py-16 dark:border-white/10 dark:bg-white/5">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-semibold">{form.title}</h2>
        <p className="mt-2 text-base text-brand-muted dark:text-neutral-300">{form.description}</p>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="news-name" className="text-sm font-medium">
              {form.labels.name}
            </label>
            <input
              id="news-name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-base outline-none transition focus-visible:ring-2 focus-visible:ring-brand-accent dark:border-white/10 dark:bg-white/5"
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="news-email" className="text-sm font-medium">
              {form.labels.email}
            </label>
            <input
              id="news-email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-base outline-none transition focus-visible:ring-2 focus-visible:ring-brand-accent dark:border-white/10 dark:bg-white/5"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="news-message" className="text-sm font-medium">
              {form.labels.message}
            </label>
            <textarea
              id="news-message"
              name="message"
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="mt-2 h-40 w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-base outline-none transition focus-visible:ring-2 focus-visible:ring-brand-accent dark:border-white/10 dark:bg-white/5"
            />
          </div>
          <button
            type="submit"
            className="rounded-full border border-brand-charcoal/20 bg-brand-charcoal px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-transparent hover:text-brand-charcoal dark:border-white/30 dark:bg-white dark:text-neutral-900 dark:hover:text-white"
          >
            {form.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubmitNewsForm;
