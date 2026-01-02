import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const MAIL_TO = 'av.cozacenco@gmail.com';
const MAIL_SUBJECT = '??????? ??? ?????, ? ? ??????!?';
const SubmitNewsForm = ({ form }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const body = encodeURIComponent(`${form.labels.name}: ${name}
${form.labels.email}: ${email}
${form.labels.message}:
${message}`);
        const subject = encodeURIComponent(MAIL_SUBJECT);
        window.location.href = `mailto:${MAIL_TO}?subject=${subject}&body=${body}`;
    };
    return (_jsx("section", { className: "border-b border-black/10 bg-white/80 py-16 dark:border-white/10 dark:bg-white/5", children: _jsxs("div", { className: "mx-auto max-w-3xl px-4", children: [_jsx("h2", { className: "text-3xl font-semibold", children: form.title }), _jsx("p", { className: "mt-2 text-base text-brand-muted dark:text-neutral-300", children: form.description }), _jsxs("form", { className: "mt-8 space-y-6", onSubmit: handleSubmit, children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "news-name", className: "text-sm font-medium", children: form.labels.name }), _jsx("input", { id: "news-name", name: "name", type: "text", required: true, value: name, onChange: (event) => setName(event.target.value), className: "mt-2 w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-base outline-none transition focus-visible:ring-2 focus-visible:ring-brand-accent dark:border-white/10 dark:bg-white/5", autoComplete: "name" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "news-email", className: "text-sm font-medium", children: form.labels.email }), _jsx("input", { id: "news-email", name: "email", type: "email", required: true, value: email, onChange: (event) => setEmail(event.target.value), className: "mt-2 w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-base outline-none transition focus-visible:ring-2 focus-visible:ring-brand-accent dark:border-white/10 dark:bg-white/5", autoComplete: "email" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "news-message", className: "text-sm font-medium", children: form.labels.message }), _jsx("textarea", { id: "news-message", name: "message", required: true, value: message, onChange: (event) => setMessage(event.target.value), className: "mt-2 h-40 w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-base outline-none transition focus-visible:ring-2 focus-visible:ring-brand-accent dark:border-white/10 dark:bg-white/5" })] }), _jsx("button", { type: "submit", className: "rounded-full border border-brand-charcoal/20 bg-brand-charcoal px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-transparent hover:text-brand-charcoal dark:border-white/30 dark:bg-white dark:text-neutral-900 dark:hover:text-white", children: form.submitLabel })] })] }) }));
};
export default SubmitNewsForm;
