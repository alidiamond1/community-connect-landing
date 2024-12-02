import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#4CAF50",
          dark: "#45a049",
          light: "#81c784",
        },
        secondary: {
          DEFAULT: "#333333",
          dark: "#222222",
          light: "#666666",
        },
        gray: {
          light: "#F5F5F5",
          border: "#E0E0E0",
        },
      },
      gridTemplateColumns: {
        'auto-fill-cards': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
      spacing: {
        'section': '80px',
      },
      maxWidth: {
        'content': '1200px',
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;