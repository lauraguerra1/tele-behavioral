import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'cover': 'cover'
      }, 
      backgroundColor: {
        'sandy': '#FDF6EB'
      }, 
      colors: {
        'great-gray': '#a0a09f',
        'blackish-gray': '#404041'
      },
      width: {
        '87vw': '87vw'
      },
      height: {
        '650px': '650px'
      }
    },
  },
  plugins: [],
}
export default config
