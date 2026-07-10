/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0c0a08',
        surface: '#171310',
        rust: '#b0431c',
        whiskey: '#d9a441',
        cream: '#f2e9d8',
        muted: '#a3937c',
      },
      fontFamily: {
        display: ['"Anton"', 'sans-serif'],
        cond: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"Barlow"', 'sans-serif'],
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
