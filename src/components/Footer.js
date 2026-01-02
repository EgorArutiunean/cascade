import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
const Footer = ({ footer, projectName, year }) => {
    return (_jsx("footer", { className: "border-t border-black/10 bg-brand-ivory/90 py-10 text-sm dark:border-white/10 dark:bg-neutral-950", children: _jsxs("div", { className: "mx-auto flex max-w-5xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between", children: [_jsxs("div", { children: [_jsxs("p", { className: "font-semibold", children: ["? ", year, " ", projectName] }), _jsx("p", { className: "text-xs text-brand-muted dark:text-neutral-400", children: footer.disclaimer })] }), _jsx("a", { href: "https://t.me/Mama_Polska", target: "_blank", rel: "noreferrer", className: "font-semibold text-brand-charcoal underline decoration-brand-accent underline-offset-4 transition hover:opacity-80 dark:text-white", children: footer.telegramCta })] }) }));
};
export default Footer;
