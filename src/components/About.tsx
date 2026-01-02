import type { Translation } from '../translations';

interface AboutProps {
  about: Translation['about'];
}

const About = ({ about }: AboutProps) => {
  return (
    <section id="about" className="border-b border-black/10 bg-white/70 py-16 dark:border-white/10 dark:bg-white/5">
      <div className="mx-auto max-w-4xl px-4">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-muted dark:text-neutral-400">{about.title}</p>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-brand-charcoal/90 dark:text-neutral-200">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
