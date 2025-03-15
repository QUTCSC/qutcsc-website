// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  	integrations: [
		icon({
			iconDir: "src/icons",
		}), 
  		tailwind()
	],
  	devToolbar: {
    	enabled: false
  	}
})