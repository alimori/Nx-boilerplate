module.exports = {
  important: true,
  purge: [
    './apps/**/*.html',
    './apps/**/*.ts',
    './libs/**/*.html',
    './libs/**/*.ts',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: {
        100: 'var(--primary-100)',
        200: 'var(--primary-200)',
        300: 'var(--primary-300)',
        400: 'var(--primary-400)',
        DEFAULT: 'var(--primary-500)',
        600: 'var(--primary-600)',
        700: 'var(--primary-700)',
        800: 'var(--primary-800)',
        900: 'var(--primary-900)',
      },
      accent: {
        100: 'var(--accent-100)',
        200: 'var(--accent-200)',
        300: 'var(--accent-300)',
        400: 'var(--accent-400)',
        DEFAULT: 'var(--accent-500)',
        600: 'var(--accent-600)',
        700: 'var(--accent-700)',
        800: 'var(--accent-800)',
        900: 'var(--accent-900)',
      },
      warn: {
        100: 'var(--warn-100)',
        200: 'var(--warn-200)',
        300: 'var(--warn-300)',
        400: 'var(--warn-400)',
        DEFAULT: 'var(--warn-500)',
        600: 'var(--warn-600)',
        700: 'var(--warn-700)',
        800: 'var(--warn-800)',
        900: 'var(--warn-900)',
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
};
