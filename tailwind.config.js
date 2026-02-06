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
          DEFAULT: '#064E3B', // 深森林綠 (學術、穩定)
          light: '#059669',
          dark: '#022C22',
        },
        secondary: {
          DEFAULT: '#0EA5E9', // 科技藍 (科研、精確)
          light: '#7DD3FC',
          dark: '#0369A1',
        },
        accent: {
          DEFAULT: '#8B5CF6', // 醫療紫色 (高端抗衰老)
        },
        lab: {
          teal: '#134E4A',     // 實驗室深靛
          gray: '#F1F5F9',     // 實驗室淺灰背景
          slate: '#1E293B',    // 科研深板岩
          border: '#E2E8F0',   // 精細線條色
        },
        herb: {
          sage: '#CFD8DC',    // 草本鼠尾草灰
          leaf: '#4D7C0F',    // 藥材綠
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'Noto Sans TC', 'sans-serif'],
        body: ['Inter', 'Noto Sans TC', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'], // 用於體現參數感的字體
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2394a3b8' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
