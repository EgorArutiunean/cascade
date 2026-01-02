import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const About = ({ about }) => {
    return (_jsx("section", { id: "about", className: "border-b border-black/10 bg-white/70 py-16 dark:border-white/10 dark:bg-white/5", children: _jsxs("div", { className: "mx-auto max-w-4xl px-4", children: [_jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-brand-muted dark:text-neutral-400", children: about.title }), _jsx("div", { className: "mt-6 space-y-4 text-lg leading-relaxed text-brand-charcoal/90 dark:text-neutral-200", children: about.paragraphs.map((paragraph) => (_jsx("p", { children: paragraph }, paragraph))) })] }) }));
};
export default About;
