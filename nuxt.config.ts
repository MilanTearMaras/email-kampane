// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },

  $development: {
    //
  },

  $env: {
    staging: {
      //
    },
    production: {
      //
    }
  },

  modules: ["@nuxt/fonts", "@nuxtjs/tailwindcss", "@nuxt/eslint"],

  fonts: {
    families: [
      { name: 'Nunito', provider: 'google' }
    ]
  },

  compatibilityDate: '2024-12-20'
})