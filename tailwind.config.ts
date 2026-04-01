import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#06030E",
        panel: "#100A1F",
        accentViolet: "#7A5CFF",
        accentPink: "#F454D5",
      },
      boxShadow: {
        glow: "0 0 60px rgba(122, 92, 255, 0.35)",
      },
      backgroundImage: {
        "mesh-glow":
          "radial-gradient(circle at 20% 20%, rgba(122, 92, 255, 0.3), transparent 45%), radial-gradient(circle at 80% 30%, rgba(244, 84, 213, 0.25), transparent 40%), radial-gradient(circle at 50% 80%, rgba(255, 255, 255, 0.08), transparent 40%)",
      },
    },
  },
  plugins: [],
};

export default config;
