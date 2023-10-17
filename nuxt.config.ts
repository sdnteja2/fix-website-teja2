// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxtseo/module",
    "nuxt-simple-robots",
    'nuxt-schema-org',
    'nuxt-og-image',
    'nuxt-simple-sitemap',
    'nuxt-swiper',
    "nuxt-og-image",
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
      },
    ],
  ],
  image: {
    storyblok: {
      baseURL: "https://a.storyblok.com",
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
      name: 'page', // Nama transisi yang akan digunakan secara global
      mode: 'out-in' // Mode transisi, dalam hal ini 'out-in'
    },
    head: {
      templateParams: {
        separator: "-",
        // other common separators: '·', '—', '•'
      },
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ]
    }
  }
});
