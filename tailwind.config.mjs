/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				body: ["Manrope", "Segoe UI", "Helvetica Neue", "sans-serif"],
				display: ["Space Grotesk", "Trebuchet MS", "sans-serif"],
			},
			aria: {
				current: "current=page",
			},
		},
	},
	plugins: [
		require('daisyui'),
	],
	daisyui: {
		themes: [
			{
			  	'csc': {
					'primary' : '#a16ae8',
					'primary-dark': '#0000b8',
					'primary-focus' : '#0000ff',
					'primary-content' : '#ffffff',
		
					'secondary' : '#5f5f5f',
					'secondary-focus' : '#5f5f5f',
					'secondary-content' : '#000000',
		
					'accent' : '#a16ae8',
					'accent-focus' : '#843DE1',
					'accent-content' : '#ffffff',
		
					'neutral' : '#ebebeb',
					'neutral-focus' : '#ebebeb',
					'neutral-content' : '#000000',
		
					'base-100' : '#121212',
					'base-200' : '#1f1f1f',
					'base-300' : '#292929',
					'base-content' : '#ffffff',
		
					'info' : '#0000ff',
					'success' : '#00ff00',
					'warning' : '#ffff00',
					'error' : '#ff0000',
		
					'--rounded-box': '.2rem',          
					'--rounded-btn': '.2rem',        
					'--rounded-badge': '.2rem',      
		
					'--animation-btn': '.25s',       
					'--animation-input': '.2s',       
		
					'--btn-text-case': 'uppercase',   
					'--navbar-padding': '.5rem',      
					'--border-btn': '1px',            
				},
			},
			"synthwave"
		],
		logs: false,
	  },
}
