module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-ivory': '#f7f3ea',
        'brand-charcoal': '#141414',
        'brand-accent': '#d7c79a',
        'brand-muted': '#5c5c5c'
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
