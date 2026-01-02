import type { Translation } from '../translations';

interface HeroProps {
  hero: Translation['hero'];
}

const Hero = ({ hero }: HeroProps) => {
  return (
    <section className="border-b border-black/10 py-16 dark:border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-muted dark:text-neutral-400">
          <span className="h-px flex-1 bg-brand-muted/40" aria-hidden="true" />
          <span>{hero.ticker}</span>
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{hero.title}</h1>
          <p className="text-lg text-brand-muted dark:text-neutral-300 sm:text-xl">{hero.subtitle}</p>
        </div>
        <div>
          <a
            href="#social"
            className="inline-flex items-center gap-2 rounded-full border border-brand-charcoal/20 bg-brand-charcoal px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-transparent hover:text-brand-charcoal dark:border-white/30 dark:bg-white dark:text-neutral-900 dark:hover:text-white"
          >
            <span>{hero.ctaLabel}</span>
            <span aria-hidden="true" className="text-lg">
              ?
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
