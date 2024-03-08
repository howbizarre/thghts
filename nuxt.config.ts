export default defineNuxtConfig({
  app: {
    baseURL: "/",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "preload", as: "style", onload: "this.onload = null; this.rel = 'stylesheet';", href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/content", "@nuxtjs/i18n"],
  content: {},
  i18n: {
    baseUrl: "https://thoughts.bizarre.how",
    locales: [
      {
        code: "en",
        name: "EN",
        iso: "en",
        file: "en-US.json",
      },
      {
        code: "bg",
        name: "БГ",
        iso: "bg",
        file: "bg-BG.json",
      },
    ],
    lazy: true,
    langDir: "i18n/",
    defaultLocale: "bg",
    vueI18n: "./i18n.config.ts",
    rootRedirect: "bg",
    detectBrowserLanguage: false,
    strategy: "prefix",
  },
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    viewer: false,
  },
  colorMode: { classSuffix: "" },
  devtools: { enabled: false },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
      // crawlLinks: true,
      // ignore: ["/api"],
      // autoSubfolderIndex: false,
    },
    // experimental: {
    //   wasm: true,
    // },
    // preset: "cloudflare-pages",
  },
  // routeRules: {
  //   "/": { prerender: true },
  //   "/bg": { prerender: true },
  //   "/en": { prerender: true },
  //   "/bg/help": { prerender: true },
  //   "/en/help": { prerender: true },
  //   "/bg/articles/**": { prerender: true },
  //   "/en/articles/**": { prerender: true },
  // },
});