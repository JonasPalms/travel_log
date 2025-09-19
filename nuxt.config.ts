// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  modules: ["@nuxt/eslint"],
  devtools: { enabled: true },
  eslint: {
    config: {
      standalone: false,
    },
  },
});
