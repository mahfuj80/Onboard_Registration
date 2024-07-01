// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	modules: ["@nuxt/ui"],
});

// can be used

// @vueuse/nuxt, @hypernym/nuxt-anime, nuxt-delay-hydration, @morev/vue-transitions, vue-advanced-cropper
