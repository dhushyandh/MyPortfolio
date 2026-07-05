const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          colors: {
            'light-hover': '#fcf4ff',
            'dark-hover': '#2a004a',
            'dark-theme': '#11001F'
          },
          fontFamily: {
            Outfit: ['Outfit', 'sans-serif'],
            Ovo: ['Ovo', 'serif']
          },
          boxShadow: {
            black: '4px 4px 0 #000',
            white: '4px 4px 0 #fff'
          }
        }
      }
    },
  },
};

export default config;
