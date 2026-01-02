import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { SOCIAL_LINKS } from '../data/socialLinks';
const renderIcon = (platform) => {
    switch (platform) {
        case 'telegram':
            return (_jsx("path", { d: "M21.5 4.5 3.3 11.6c-.7.3-.7 1.3.1 1.5l4.5 1.4 1.7 5.2c.2.7 1.1.9 1.6.3l2.6-3.2 4.5 3.2c.6.4 1.4.1 1.5-.6l2.3-13.4c.1-.7-.6-1.2-1.2-.9z", fill: "currentColor" }));
        case 'youtube':
            return (_jsx("path", { d: "M21.6 7.2c-.2-1.5-1.2-2.5-2.7-2.6C16.5 4.3 12 4.3 12 4.3s-4.5 0-6.9.3c-1.5.1-2.5 1.1-2.7 2.6C2.1 8.8 2 10.7 2 12.5s.1 3.7.4 5.3c.2 1.5 1.2 2.5 2.7 2.6 2.4.3 6.9.3 6.9.3s4.5 0 6.9-.3c1.5-.1 2.5-1.1 2.7-2.6.3-1.6.4-3.5.4-5.3s-.1-3.7-.4-5.3z", fill: "currentColor" }));
        case 'instagram':
            return (_jsxs(_Fragment, { children: [_jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "5", ry: "5", fill: "none", stroke: "currentColor", strokeWidth: "2" }), _jsx("circle", { cx: "12", cy: "12", r: "4", fill: "none", stroke: "currentColor", strokeWidth: "2" }), _jsx("circle", { cx: "18", cy: "6", r: "1.3", fill: "currentColor" })] }));
        case 'tiktok':
            return (_jsx("path", { d: "M19 7.3c-1.3 0-2.6-.5-3.6-1.4v6.2c0 3-2.5 5.5-5.6 5.5-1 0-2-.3-2.9-.8-.5-.3-.6-1-.2-1.4.4-.4 1-.5 1.4-.2.5.3 1.1.4 1.7.4 1.7 0 3.1-1.3 3.1-3V4.5c0-.6.5-1.1 1.1-1.1h1.5c.6 1.6 2.2 2.7 4 2.8v1.8h-.5z", fill: "currentColor" }));
        case 'facebook':
            return (_jsx("path", { d: "M16 5h2.5V1.8C17.9 1.5 16.3 1.3 15 1.3c-3.5 0-5.9 2.1-5.9 6v2.7H6v3.7h3.1V24h3.7v-10h3.1l.5-3.7H12.8V7.6c0-1.1.3-2.6 2.5-2.6h.7z", fill: "currentColor" }));
        default:
            return null;
    }
};
const SocialLinks = ({ social }) => {
    return (_jsx("section", { id: "social", className: "border-b border-black/10 py-16 dark:border-white/10", children: _jsxs("div", { className: "mx-auto max-w-5xl px-4", children: [_jsxs("div", { className: "mb-8 space-y-3", children: [_jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-brand-muted dark:text-neutral-400", children: social.subtitle }), _jsx("h2", { className: "text-3xl font-semibold", children: social.title })] }), _jsx("div", { className: "grid gap-4 md:grid-cols-2", children: SOCIAL_LINKS.map((link) => {
                        const copy = social.platforms[link.id];
                        return (_jsx("a", { href: link.url, target: "_blank", rel: "noreferrer", className: "group rounded-3xl border border-black/10 bg-white/70 p-5 transition hover:-translate-y-1 hover:border-brand-accent dark:border-white/10 dark:bg-white/5", style: { borderColor: `${link.accent}44` }, children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-brand-charcoal transition group-hover:-translate-y-0.5 dark:bg-white/10", style: { color: link.accent }, children: _jsx("svg", { width: "28", height: "28", viewBox: "0 0 24 24", "aria-hidden": "true", children: renderIcon(link.id) }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-semibold uppercase tracking-wide", children: copy.name }), _jsx("p", { className: "text-sm text-brand-muted dark:text-neutral-300", children: copy.description })] })] }) }, link.id));
                    }) })] }) }));
};
export default SocialLinks;
