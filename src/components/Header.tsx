import { Language } from '../translations';
import type { Theme } from '../types/theme';

interface HeaderProps {
  projectName: string;
  subscribeLabel: string;
  language: Language;
  onLanguageChange: (language: Language) => void;
  theme: Theme;
  onThemeToggle: () => void;
  languageLabels: Record<Language, string>;
  themeToggleLabel: string;
}

const languageOptions: Language[] = ['ru', 'ua'];

const Header = ({
  projectName,
  subscribeLabel,
  language,
  onLanguageChange,
  theme,
  onThemeToggle,
  languageLabels,
  themeToggleLabel,
}: HeaderProps) => {
  return (
    <header className="border-b border-black/10 bg-brand-ivory/95 backdrop-blur-md dark:border-white/10 dark:bg-neutral-950/95">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-2xl font-semibold tracking-tight">{projectName}</p>
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
          <div
            className="flex items-center gap-1 rounded-full border border-black/10 bg-white/70 px-1 py-1 dark:border-white/10 dark:bg-white/5"
            role="group"
            aria-label="Language selector"
          >
            {languageOptions.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => onLanguageChange(code)}
                className={`rounded-full px-3 py-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent ${
                  language === code
                    ? 'bg-brand-charcoal text-white dark:bg-white dark:text-neutral-900'
                    : 'text-brand-muted dark:text-neutral-300'
                }`}
                aria-pressed={language === code}
              >
                {languageLabels[code]}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={onThemeToggle}
            className="h-10 w-10 rounded-full border border-black/10 bg-white text-lg transition hover:-translate-y-0.5 dark:border-white/20 dark:bg-white/10"
            aria-label={themeToggleLabel}
            title={themeToggleLabel}
          >
            {theme === 'dark' ? '?' : '?'}
          </button>
          <a
            href="#social"
            className="rounded-full border border-brand-charcoal/20 bg-brand-charcoal px-5 py-2 text-white transition hover:-translate-y-0.5 hover:bg-transparent hover:text-brand-charcoal dark:border-white/30 dark:bg-white dark:text-neutral-900 dark:hover:text-white"
          >
            {subscribeLabel}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
