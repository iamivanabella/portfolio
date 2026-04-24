import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f214f",
        blue: "#2563ff",
        soft: "#f4f8ff",
        line: "#e5ebf7",
        muted: "#69758f",
        text: "#3d4964",
      },
      boxShadow: {
        card: "0 18px 48px rgba(17, 37, 84, 0.08)",
        panel: "0 10px 34px rgba(15, 33, 79, 0.08)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
