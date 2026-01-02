import type { Translation } from '../translations';

interface FooterProps {
  footer: Translation['footer'];
  projectName: string;
  year: number;
}

const Footer = ({ footer, projectName, year }: FooterProps) => {
  return (
    <footer className="border-t border-black/10 bg-brand-ivory/90 py-10 text-sm dark:border-white/10 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">? {year} {projectName}</p>
          <p className="text-xs text-brand-muted dark:text-neutral-400">{footer.disclaimer}</p>
        </div>
        <a
          href="https://t.me/Mama_Polska"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-brand-charcoal underline decoration-brand-accent underline-offset-4 transition hover:opacity-80 dark:text-white"
        >
          {footer.telegramCta}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
