/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,tsx}',
		'./src/**/**/*.{html,js,tsx}',
		'./index.html',
	],
	theme: {
		extend: {},
	},
	plugins: [],
	corePlugins: {
		preflight: false
	}
};
