/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0A0A0F',
          card: '#111118',
          cardHover: '#171722',
          border: '#1F1F2E',
          text: '#F5F5F7',
          muted: '#A1A1AA',
          accent: '#8B5CF6',
          accentSecondary: '#22D3EE',
        },
        light: {
          bg: '#FAFAFA',
          card: '#FFFFFF',
          cardHover: '#F4F4F5',
          border: '#E4E4E7',
          text: '#18181B',
          muted: '#52525B',
          accent: '#8B5CF6',
          accentSecondary: '#0891B2',
        },
        accent: {
          violet: '#8B5CF6',
          cyan: '#22D3EE',
          violetHover: '#7C3AED',
          cyanHover: '#06B6D4',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle-glow': '0 0 30px -5px rgba(139, 92, 246, 0.2)',
        'cyan-glow': '0 0 30px -5px rgba(34, 211, 238, 0.2)',
        'card-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.4), 0 0 15px -3px rgba(139, 92, 246, 0.05)',
        'card-light': '0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 0 15px -3px rgba(139, 92, 246, 0.04)',
      }
    },
  },
  plugins: [],
}
