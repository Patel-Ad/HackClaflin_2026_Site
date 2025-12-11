/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Inter', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial']
      },
      colors: {
        claflin: {
          maroon: '#7C1D33',
          gold: '#C5A253',
          maroonLight: '#A84357',
          maroonDark: '#5A1525',
          goldLight: '#E8D08A',
          goldDark: '#A0853F',
          purple: '#8B5CF6',
          blue: '#3B82F6',
          teal: '#14B8A6',
          pink: '#EC4899',
          orange: '#F97316'
        },
        gradient: {
          start: '#7C1D33',
          mid: '#C5A253',
          end: '#8B5CF6'
        }
      },
      backgroundImage: {
        'gradient-claflin': 'linear-gradient(135deg, #7C1D33 0%, #C5A253 50%, #8B5CF6 100%)',
        'gradient-maroon-gold': 'linear-gradient(135deg, #7C1D33 0%, #C5A253 100%)',
        'gradient-gold-purple': 'linear-gradient(135deg, #C5A253 0%, #8B5CF6 100%)',
        'gradient-rainbow': 'linear-gradient(135deg, #7C1D33 0%, #C5A253 25%, #8B5CF6 50%, #3B82F6 75%, #14B8A6 100%)'
      }
    },
  },
  plugins: [],
}
