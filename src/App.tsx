import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SocialLinks from './components/SocialLinks';
import SubmitNewsForm from './components/SubmitNewsForm';
import Footer from './components/Footer';
import { defaultLanguage, translations, Language } from './translations';
import type { Theme } from './types/theme';

const isBrowser = () => typeof window !== 'undefined';

const getInitialLanguage = (): Language => {
  if (!isBrowser()) {
    return defaultLanguage;
  }
  const stored = window.localStorage.getItem('language');
  return stored === 'ua' ? 'ua' : defaultLanguage;
};

const getInitialTheme = (): Theme => {
  if (!isBrowser()) {
    return 'light';
  }
  const stored = window.localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') {
    return stored;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

function App() {
  const [language, setLanguage] = useState<Language>(() => getInitialLanguage());
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  const translation = translations[language];
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (!isBrowser()) return;
    window.localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    if (!isBrowser()) return;
    window.localStorage.setItem('theme', theme);
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.title = translation.meta.title;
    const mappings: Array<{ selector: string; value: string }> = [
      { selector: 'meta[name="description"]', value: translation.meta.description },
      { selector: 'meta[property="og:title"]', value: translation.meta.ogTitle },
      { selector: 'meta[property="og:description"]', value: translation.meta.ogDescription },
    ];
    mappings.forEach(({ selector, value }) => {
      const metaTag = document.querySelector<HTMLMetaElement>(selector);
      if (metaTag) {
        metaTag.setAttribute('content', value);
      }
    });
  }, [translation]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    if (!root.classList.contains('light') && !root.classList.contains('dark')) {
      root.classList.add(theme);
    }
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className="min-h-screen bg-brand-ivory text-brand-charcoal transition-colors dark:bg-neutral-950 dark:text-white">
      <div className="h-1 w-full bg-brand-accent" aria-hidden="true" />
      <Header
        projectName={translation.projectName}
        subscribeLabel={translation.hero.ctaLabel}
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeToggle={toggleTheme}
        languageLabels={translation.languageLabels}
        themeToggleLabel={translation.themeToggleLabel}
      />
      <main>
        <Hero hero={translation.hero} />
        <About about={translation.about} />
        <SocialLinks social={translation.social} />
        <SubmitNewsForm form={translation.form} />
      </main>
      <Footer footer={translation.footer} projectName={translation.projectName} year={currentYear} />
    </div>
  );
}

export default App;
