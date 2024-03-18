/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				custom: ["CircularStd", "sans-serif"],
			}
		},
	},
	plugins: [
		require("tailwindcss/nesting"),
		require("tailwindcss"),
		require("autoprefixer"),
	],
}
