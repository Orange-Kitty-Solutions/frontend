import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  		extend: {
			fontFamily: {
				space: ['Space Grotesk', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},

			colors: {
				primary: {
					50:  '#EBEDFF', 
					100: '#8E97E3',
					200: '#606ED7',
					300: '#3748CD',
					400: '#28359F',
					500: '#1C2671',
					600: '#000733',  
				},
				success: {
					50: '#EBF6E4',
					100: '#C2E4AD',
					200: '#99D276',
					300: '#70BF3F',
					400: '#50892D',
					500: '#30521B',
					600: '#101B09'
				},
				warning: {
					50: '#F7F2E2',
					100: '#E7D9A9',
					200: '#D7BF70',
					300: '#CCAD47',
					400: '#8F7728',
					500: '#564718',
					600: '#1D1808'
				},
				error: {
					50: '#F9E5E0',
					100: '#EEB2A3',
					200: '#E27E66',
					300: '#A63A1F',
					400: '#99361D',
					500: '#5C2011',
					600: '#1F0B06'
				},
				neutral: {
					50: '#EBECEE',
					100: '#C4C5CD',
					200: '#9D9FAB',
					300: '#525460',
					400: '#545662',
					500: '#32343B',
					600: '#111114'
				},
			}
		},
  	},
  plugins: [require("tailwindcss-animate")],
};
export default config;