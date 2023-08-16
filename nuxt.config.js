export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Red Pandas Project – Bringing awareness to a flagship species',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'description', name: 'description', content: 'A design project aimed to bring awareness to the endangered red pandas through education.' },

      { property: 'og:title', content: 'Red Pandas Project – Bringing awareness to a flagship species' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: 'A design project aimed to bring awareness to the endangered red pandas through education.' },
      { property: 'og:url', content: 'https://redpandasproject.com/' },
      { property: 'og:image', content: '/images/featured-link-image.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/yzg6lah.css' } // Adobe fonts
    ],
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-MDC1THN1CH', defer: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
