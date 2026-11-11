/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          white: '#FFFFFF',
          charcoal: '#5B5B5B',
          silver: '#B3B3B3',
          gold: '#C9A267',
        },
        // Sub-brand supporting colors (used as accents only)
        sports: { DEFAULT: '#A11D21', light: '#DE1F26' },
        play: { DEFAULT: '#90268F', light: '#DF72E8' },
        scapes: { DEFAULT: '#024A3F', light: '#8DC85B' },
        tech: { DEFAULT: '#352A75', light: '#6481BD' },
        aquatics: { DEFAULT: '#0083BD', light: '#14C1E2' },
      },
      fontFamily: {
        sans: ['"Neue Montreal"', '"Inter Tight"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      keyframes: {
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        'copy-reveal': {
          '0%': { opacity: '0', transform: 'translate3d(0, 28px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translate3d(0, 24px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // Clients section marquee (the row is duplicated, so it travels exactly half its width)
        'marquee-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slow-zoom': 'slow-zoom 8000ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'copy-reveal': 'copy-reveal 1100ms 150ms cubic-bezier(0.22, 1, 0.36, 1) both',
        progress: 'progress 6000ms linear both',
        'fade-in': 'fade-in 2200ms 200ms ease-out both',
        'fade-up': 'fade-up 1400ms 200ms cubic-bezier(0.22, 1, 0.36, 1) both',
        bob: 'bob 2.4s ease-in-out infinite',
        // Duration is set per row through the --marquee-duration variable
        'marquee-left': 'marquee-left var(--marquee-duration, 60s) linear infinite',
        'marquee-right': 'marquee-right var(--marquee-duration, 60s) linear infinite',
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,jsx}'],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           black: '#000000',
//           white: '#FFFFFF',
//           charcoal: '#5B5B5B',
//           silver: '#B3B3B3',
//           gold: '#C9A267',
//         },
//         // Sub-brand supporting colors (used as accents only)
//         sports: { DEFAULT: '#A11D21', light: '#DE1F26' },
//         play: { DEFAULT: '#90268F', light: '#DF72E8' },
//         scapes: { DEFAULT: '#024A3F', light: '#8DC85B' },
//         tech: { DEFAULT: '#352A75', light: '#6481BD' },
//         aquatics: { DEFAULT: '#0083BD', light: '#14C1E2' },
//       },
//       fontFamily: {
//         sans: ['"Neue Montreal"', '"Inter Tight"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
//       },
//       keyframes: {
//         'slow-zoom': {
//           '0%': { transform: 'scale(1)' },
//           '100%': { transform: 'scale(1.08)' },
//         },
//         'copy-reveal': {
//           '0%': { opacity: '0', transform: 'translate3d(0, 28px, 0)' },
//           '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
//         },
//         progress: {
//           '0%': { width: '0%' },
//           '100%': { width: '100%' },
//         },
//         'fade-up': {
//           '0%': { opacity: '0', transform: 'translate3d(0, 24px, 0)' },
//           '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
//         },
//         bob: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(8px)' },
//         },
//         'fade-in': {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//       },
//       animation: {
//         'slow-zoom': 'slow-zoom 8000ms cubic-bezier(0.22, 1, 0.36, 1) both',
//         'copy-reveal': 'copy-reveal 1100ms 150ms cubic-bezier(0.22, 1, 0.36, 1) both',
//         progress: 'progress 6000ms linear both',
//         'fade-in': 'fade-in 2200ms 200ms ease-out both',
//         'fade-up': 'fade-up 1400ms 200ms cubic-bezier(0.22, 1, 0.36, 1) both',
//         bob: 'bob 2.4s ease-in-out infinite',
//       },
//     },
//   },
//   plugins: [],
// };