import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize:{
        "xxs": ".5rem",
        "xs": ".75rem",
        "sm": "11px",
        "logo":"24px",
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(16px)',
      },
      colors: {
        "primary-black": "#0e1012",
        "primary-white": "#f3f6fa",
      },
      backgroundImage: {
        // https://github.com/DhanushPrabakaran/shop-tracker/blob/main/public/images/background.webp
        'pattern': "url('../public/images/noise-light.png')",
        'texture': "url('../public/images/background.png')",
        // 'hero-pattern': "linear-gradient(to right bottom, rgba('#0e1012'), rgba('#28b485')), url('../public/images/background.png')",

      },
      fontFamily:{
        "WtfHorseland":"WtfHorseland",
        'MintGrotesk':['MintGrotesk','sans-serif'],
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-up': 'slide-up 1s ease-out forwards',

      },
    },
  },
  plugins: [],
};
export default config;
