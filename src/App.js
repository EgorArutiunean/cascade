import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SocialLinks from './components/SocialLinks';
import SubmitNewsForm from './components/SubmitNewsForm';
import Footer from './components/Footer';
import { defaultLanguage, translations } from './translations';
const isBrowser = () => typeof window !== 'undefined';
const getInitialLanguage = () => {
    if (!isBrowser()) {
        return defaultLanguage;
    }
    const stored = window.localStorage.getItem('language');
    return stored === 'ua' ? 'ua' : defaultLanguage;
};
const getInitialTheme = () => {
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
    const [language, setLanguage] = useState(() => getInitialLanguage());
    const [theme, setTheme] = useState(() => getInitialTheme());
    const translation = translations[language];
    const currentYear = new Date().getFullYear();
    useEffect(() => {
        if (!isBrowser())
            return;
        window.localStorage.setItem('language', language);
    }, [language]);
    useEffect(() => {
        if (!isBrowser())
            return;
        window.localStorage.setItem('theme', theme);
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);
    useEffect(() => {
        if (typeof document === 'undefined')
            return;
        document.title = translation.meta.title;
        const mappings = [
            { selector: 'meta[name="description"]', value: translation.meta.description },
            { selector: 'meta[property="og:title"]', value: translation.meta.ogTitle },
            { selector: 'meta[property="og:description"]', value: translation.meta.ogDescription },
        ];
        mappings.forEach(({ selector, value }) => {
            const metaTag = document.querySelector(selector);
            if (metaTag) {
                metaTag.setAttribute('content', value);
            }
        });
    }, [translation]);
    useEffect(() => {
        if (typeof document === 'undefined')
            return;
        const root = document.documentElement;
        if (!root.classList.contains('light') && !root.classList.contains('dark')) {
            root.classList.add(theme);
        }
    }, []);
    const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    return (_jsxs("div", { className: "min-h-screen bg-brand-ivory text-brand-charcoal transition-colors dark:bg-neutral-950 dark:text-white", children: [_jsx("div", { className: "h-1 w-full bg-brand-accent", "aria-hidden": "true" }), _jsx(Header, { projectName: translation.projectName, subscribeLabel: translation.hero.ctaLabel, language: language, onLanguageChange: setLanguage, theme: theme, onThemeToggle: toggleTheme, languageLabels: translation.languageLabels, themeToggleLabel: translation.themeToggleLabel }), _jsxs("main", { children: [_jsx(Hero, { hero: translation.hero }), _jsx(About, { about: translation.about }), _jsx(SocialLinks, { social: translation.social }), _jsx(SubmitNewsForm, { form: translation.form })] }), _jsx(Footer, { footer: translation.footer, projectName: translation.projectName, year: currentYear })] }));
}
export default App;
