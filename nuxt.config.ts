export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
    },
    pageTransition: { name: "page", mode: "out-in" }
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/content", "@nuxtjs/i18n"],
  content: {},
  i18n: {
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en-US",
        file: "en-US.json",
      },
      {
        code: "bg",
        name: "Български",
        iso: "bg-BG",
        file: "bg-BG.json",
      },
    ],
    lazy: true,
    langDir: "i18n/",
    vueI18n: "./i18n.config.ts",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
    strategy: "prefix",
  },
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    viewer: false,
  },
  colorMode: { classSuffix: "" },
  devtools: { enabled: false },
});
