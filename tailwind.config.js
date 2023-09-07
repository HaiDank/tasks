/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,tsx,ts}',
		'./src/**/**/*.{html,js,tsx,ts}',
		'./src/*.{html,js,tsx}',
		'./index.html',
	],
	theme: { extend: {} },
	plugins: [],
	corePlugins: { preflight: false },
};
