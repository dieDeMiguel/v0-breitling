import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        breitling: {
          yellow: "#FFC62D", // Updated to match original
          dark: "#111820", // Updated to match original
          blue: "#072C54", // Added from original
          gray: "#77777A", // Added from original
          lightgray: "#D5D5D5", // Added from original
          mediumgray: "#7A7A7A", // Added from original
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontSize: {
        // Adding original font sizes
        "breitling-1": "100%",
        "breitling-2": "1rem",
        "breitling-3": "0.5rem",
        "breitling-4": "0.875rem",
        "breitling-5": "1.5rem",
        "breitling-6": "0.75rem",
        "breitling-7": "2.125rem",
        "breitling-8": "2.5rem",
        "breitling-9": "1.75rem",
        "breitling-10": "34px",
        "breitling-11": "40px",
        "breitling-12": "3.125rem",
        "breitling-13": "14px",
        "breitling-14": "16px",
        "breitling-15": "0.75rem",
        "breitling-16": "12px",
        "breitling-17": "1.25rem",
        "breitling-18": "1.125rem",
        "breitling-19": "15px",
        "breitling-20": "24px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "breitling-default": "0.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
