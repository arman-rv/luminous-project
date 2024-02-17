import scrollbar from "tailwind-scrollbar";
import { type Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      screens: {
        xs: "480px",
        xxs: "350px",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        iranSans: ["var(--font-iran-sans)"],
        multiFA: ["var(--font-iran-sans)", "var(--font-roboto)"],
        multiEN: ["var(--font-roboto)", "var(--font-iran-sans)"],
      },
      colors: {
        background: "hsl(var(--background))",
        text: "hsl(var(--text))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
        card: "hsl(var(--card))",
        purple: {
          primary: "var(--purple-primary)",
          secondary: "var(--purple-secondary)",
          text: "var(--purple-text)",
          btn: "var(--purple-btn)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [scrollbar({ nocompatible: true }), require("tailwindcss-animate")],
};

export default config;
