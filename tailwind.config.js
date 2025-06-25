/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{js,css}',
    './views/**/*.njk',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1a1f36',
        'navy-light': '#252b42',
        'navy-dark': '#151829',
        accent: '#ff6b35',
        'accent-hover': '#e55a2b',
        'grid-line': '#2a3441',
        'grid-dot': '#3a4553',
        'green-eid-dark': '#1a4d3a',
        'green-eid-medium': '#2d6a4f',
        'green-eid-light': '#40916c',
        'green-eid-bright': '#52b788',
        'green-eid-pale': '#74c69d',
        'green-eid-mint': '#95d5b2',
        'green-eid-soft': '#b7e4c7',
        'green-eid-very-light': '#d8f3dc',
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(to right, #2a3441 1px, transparent 1px),
          linear-gradient(to bottom, #2a3441 1px, transparent 1px)
        `,
        'grid-dots': `
          radial-gradient(circle at 1px 1px, #3a4553 1px, transparent 0)
        `,
        'grid-subtle': `
          linear-gradient(to right, rgba(42, 52, 65, 0.3) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(42, 52, 65, 0.3) 1px, transparent 1px)
        `,
        'grid-glow': `
          linear-gradient(to right, rgba(255, 107, 53, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 107, 53, 0.1) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid-sm': '20px 20px',
        'grid-md': '40px 40px',
        'grid-lg': '60px 60px',
        'grid-xl': '80px 80px',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [],
};
