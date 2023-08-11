/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/**/*.{js,jsx,ts,tsx}',
    './src/features/**/**/*.{js,jsx,ts,tsx}',
    './src/entities/**/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "display": "var(--display-font)",
        "body": "var(--body-font)",
      },
      fontSize: {
        xs: ['0.75rem', '1.25rem'] /*12px*/,
        sm: ['0.875rem', '1.5rem'] /*14px*/,
        base: ['1rem', '1.75rem'] /*16px*/,
        lg: ['1.125rem', '1.75rem'] /*18px*/,
        xl: ['1.25rem', '2rem'] /*20px*/,
        '2xl': ['1.5rem', '2.25rem'] /*24px*/,
        '3xl': ['1.625rem', '2.188rem'] /*28px*/,
        '4xl': ['2.25rem', '2.625rem'] /*36px*/,
        '5xl': ['3.5rem', '3.875rem'] /*56px*/,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        green: {
          200: '#ECF3F3',
          300: '#9FC1C1',
          400: '#357070',
          DEFAULT: '#018000',
          600: '#689B9A',
          700: '#014E00',
        },
        white: {
          100: '#F8F9FA',
          200: '#FAFAFA',
          400: '#E7E8E7',
          DEFAULT: '#FFFFFF',
          600: '#f1f4f9',
          800: '#162916'
        },
        red: {
          700: '#FF0420'
        },
        yellow: {
          DEFAULT: '#E9BE02',
        }
      }
    },
  },
  plugins: [],
}
