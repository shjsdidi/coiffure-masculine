import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#050505",
          900: "#050505",
          850: "#080808",
          800: "#0B0B0B",
          700: "#101010",
        },
        line: "rgba(255,255,255,0.06)",
        "line-strong": "rgba(255,255,255,0.12)",
        fog: "#F5F5F5",
        cream: "#EDE9E1",
        mute: "#9B9B9B",
        faint: "#5C5C5C",
        accent: {
          DEFAULT: "#8FB7A3",
          soft: "rgba(143,183,163,0.10)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        kicker: "0.22em",
      },
      maxWidth: {
        shell: "1280px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 30px 80px -40px rgba(0,0,0,0.9)",
        glow: "0 0 0 1px rgba(61,220,151,0.18), 0 20px 60px -20px rgba(61,220,151,0.25)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both",
        shimmer: "shimmer 8s linear infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
