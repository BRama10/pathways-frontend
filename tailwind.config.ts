import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'customA': '0 4px 4px 1px rgba(0, 0, 0, 0.25) inset',
        'customB': '0 4px 4px 20px rgba(0, 0, 0, 0.25)'
      },
      colors: {
        'customYellow' : 'linear-gradient(90deg, #ffd79c, #fff)'
      },
      gridTemplateColumns: {
        'diffComp' : '65% 5% 30%'
      },
      gridTemplateRows: {
        'diffRows' : '15% 85%'
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [],
}
export default config
