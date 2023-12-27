/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	darkMode: 'class',
	theme: {
    extend: {
      fontFamily: {
        "m-plus-2": ['var(--font-m-plus-2)', 'var(--system-ui)'],
      },
    },
  },
	plugins: [],
}
