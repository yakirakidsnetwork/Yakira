import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			'african-earth': '#8B6F47',
  			'hope-orange': '#E8995F',
  			'life-green': '#5F9B65',
  			'sunset-gold': '#D4A574',
  			'spiritual-blue': '#4A6FA5',
  			'mentor-purple': '#7B68A6',
  			'donor-teal': '#4A9B9B',
  			cream: '#FAF8F3'
  		},
  		fontFamily: {
  			poppins: [
  				'var(--font-poppins)'
  			],
  			inter: [
  				'var(--font-inter)'
  			],
  			playfair: [
  				'var(--font-playfair)'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
};
export default config;
