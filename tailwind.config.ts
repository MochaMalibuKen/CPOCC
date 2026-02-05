import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0c1a2c',
          charcoal: '#1b2431',
          neutral: '#f4f1eb',
          gold: '#c6a664',
        },
        lily: {
          sage: '#d9e2d0',
          blush: '#e8ddd2',
        },
        lab: {
          steel: '#013067', // pulled from CPOCC BDL logo deep navy
          mist: '#cfcabb', // warm neutral tone from logo background
          gold: '#a57518', // accent gold from logo lettering
          sand: '#a98949',
          slate: '#5b626d',
        },
        office: {
          teal: '#5f736e', // muted teal pulled from CPOCC primary logo
          mist: '#e9f1ed', // light gray/green backdrop
          edge: '#90a8a0',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(12, 26, 44, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
