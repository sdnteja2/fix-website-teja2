// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "nuxt-swiper",
    "@vite-pwa/nuxt",
    'nuxt-gtag',
    "nuxt-og-image",
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
      },
    ],
    // seo-module
    "@nuxtseo/module",
    "nuxt-simple-robots",
    "nuxt-schema-org",
    "nuxt-og-image",
    "nuxt-seo-ui",
    "nuxt-simple-sitemap",
  ],
  ogImage: { runtimeBrowser: true },
  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID
  },
  image: {
    storyblok: {
      baseURL: "https://a.storyblok.com",
    },
  },
  css: ["~/node_modules/lite-youtube-embed/src/lite-yt-embed.css"],
  build: {
    transpile: ["lite-youtube"],
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["lite-youtube"].includes(tag),
    },
  },
  ui: {
    icons: ["basil"],
  },
  colorMode: {
    preference: "dark",
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  googleFonts: {
    display: "swap",
    prefetch: true,
    preconnect: true,
    preload: true,
    // download: true,
    // outputDir: "assets",
    // stylePath: "fonts.css",
    // fontsDir: "fonts",
    // overwriting: true,
    // fontsPath: 'fonts',
    families: {
      Rubik: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      Inter: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },
  fontMetrics: {
    fonts: [
      {
        family: "Rubik",
        fallbacks: ["Rubik"],
        fallbackName: "Rubik",
      },
      {
        family: "Inter",
        fallbacks: ["Inter"],
        fallbackName: "Inter",
      },
    ],
  },
  site: {
    url: "https://sdnteja2.sch.id/",
    name: "SDN Teja II",
    description:
      "Website Resmi SDN Teja II, Kecamatan Rajagaluh, Kabupaten Majalengka, Provinsi Jawa Barat",
    defaultLocale: "id",
    identity: {
      type: "Organization",
    },
    twitter: "@sdnteja2",
  },
  app: {
    pageTransition: {
      name: "page", // Nama transisi yang akan digunakan secara global
      mode: "out-in", // Mode transisi, dalam hal ini 'out-in'
    },
    head: {
      templateParams: {
        separator: "-",
        // other common separators: '·', '—', '•'
      },
    },
  },
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "SDN Teja II",
      short_name: "SDN Teja II",
      theme_color: "#F22727",
      icons: [
        {
          src: "icon-192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icon-512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "icon-192-maskable.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any maskable",
        },
        {
          src: "icon-512-maskable.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
  routeRules: {
    // revalidated every 60 seconds, in the background
    "/**": {
      prerender: true,
      isr: 60,
    },
    "/": {
      prerender: true,
      isr: 60,
    },
    "/artikel/**": {
      prerender: true,
      isr: 60, // isr: true,
    },
    "/berita/**": {
      prerender: true,
      isr: 60, // isr: true,
    },
    '/api/**': { cors: true },
  },
});
