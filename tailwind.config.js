/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F766E', // Teal-700: Professional, Scientific, Trustworthy
          light: '#14B8A6',   // Teal-500
          dark: '#134E4A',    // Teal-800
        },
        secondary: {
          DEFAULT: '#16A34A', // Green-600: Natural, Vitality, Fresh
          light: '#4ADE80',   // Green-400
          dark: '#15803D',    // Green-700
        },
        accent: {
          DEFAULT: '#10B981', // Emerald-500: Vitality, Growth, Nature (CTA)
          hover: '#059669',   // Emerald-600
        },
        slate: {
          850: '#1E293B',     // Custom dark slate for softer dark mode
          900: '#0F172A',     // Deep space black/blue
        },
        surface: {
          50: '#F8FAFC',      // Lab white
          100: '#F1F5F9',     // Subtle gray
          200: '#E2E8F0',     // Border
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'Noto Sans TC', 'sans-serif'],
        body: ['Inter', 'Noto Sans TC', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'], // For scientific data/parameters
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' stroke='%2394a3b8' stroke-opacity='0.1' stroke-width='1' fill='none'/%3E%3C/svg%3E\")",
        'dots-pattern': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='9' y='9' width='2' height='2' fill='%2394a3b8' fill-opacity='0.1'/%3E%3C/svg%3E\")",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        }
      }
    },
  },
  plugins: [],
}
