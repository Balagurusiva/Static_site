// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
    mdi: {
    cache: false,
    componentName: 'MdiIcon',
    defaultSize: '1em',
  },
    modules: [
    '@nuxtjs/tailwindcss',
     'nuxt-mdi'
  ],
   
});
