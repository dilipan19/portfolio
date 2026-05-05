/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        united: {
          red: "#DA291C",
          redDark: "#8F1711",
          black: "#000000",
          night: "#070707",
          white: "#FFFFFF",
          cloud: "#F7F7F5",
          gold: "#C8A45D",
          goldSoft: "#E4CF8D",
          steel: "#A7A9AC"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        condensed: ["Barlow Condensed", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        aura: "0 0 60px rgba(218, 41, 28, 0.36)",
        gold: "0 0 42px rgba(200, 164, 93, 0.22)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
        pitch:
          "linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.025) 1px, transparent 1px)"
      },
      keyframes: {
        pulseLine: {
          "0%, 100%": { opacity: "0.25", transform: "scaleX(0.64)" },
          "50%": { opacity: "1", transform: "scaleX(1)" }
        }
      },
      animation: {
        "pulse-line": "pulseLine 2.8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
