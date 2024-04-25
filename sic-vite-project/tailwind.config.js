/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      textColor: {
        skin : {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
        },
      },
      backgroundColor:{
        skin: {
          fill: 'var(--color-fill)',
          'button-primary': 'var(--color-secondary)',
          'button-primary-hover': 'var(--color-button-accent)',

          'button-secondary': 'var(--color-accent)',
          
        }
      },
      colors: {
        transparent: 'transparent',
        'primary': '#e3e0f1',
        'secondary': '#301a8a',
        'accent': '#512de5',
      },
    },
  },
  plugins: [
    {
    'tailwindcss/nesting': 'postcss-nesting',
    },
  ],
}

