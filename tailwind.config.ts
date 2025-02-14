import { Great_Vibes } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navHover: "#eeeeee",
        bordercolor: "#EDDDAB",
        textColor: "#101928",
        linkColor: "#474747",
        btnColor: "#2B2F84",
        borderColor: "#E4E4E4",
        hardgrey: "#858991"
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
     },
     width: {
      "90p": "90%",
      "95p": "95%",
      "98p": "98%",
      "60p": "60%",
      "70p": "70%",
      "30p": "30%",
      "25p": "25%",
      "23p": "23.4555%",
      "22p": "22%",
     },
     height: {
      "550px": "550px" 
     }
    },
  },
  plugins: [],
} satisfies Config;
