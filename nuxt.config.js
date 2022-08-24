import colors from 'vuetify/lib/util/colors'

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: `/`
  }
} : {}
const ga4TrackingID = process.env.DEPLOY_ENV === 'FIREBASE' ? 'G-XXXXXXXXXX' : 'G-YZB3JBMQES';

export default {
  ...routerBase,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - OpenPack',
    title: 'OpenPack Dataset',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "OpenPack is an open access logistics-dataset for human activity recognition, which contains human movement and package information from ten subjects." },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'keywords', name: 'keywords', content: 'OpenPack,dataset,activity recognition,wearable' },

      { hid: 'og:site_name', property: 'og:site_name', content: 'OpenPack Dataset' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://open-pack.github.io' },
      { hid: 'og:title', property: 'og:title', content: 'OpenPack Dataset' },
      { hid: 'og:description', property: 'og:description', content: "OpenPacking Dataset is a new large-scale multi modal dataset of packing process" },
      { hid: 'og:image', property: 'og:image', content: 'https://open-pack.github.io/img/logo_light.jpeg' },
      { name: 'google-site-verification', content: 'yvsm8zg3mV2mitqHF6QQdSKpzgHYdhbFditCxarr4E4' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: "favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.scss' // 追加
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue-youtube',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/sections/',
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    '@/modules/custom-generate.js',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    ['@nuxtjs/google-gtag', {
      id: ga4TrackingID,
      debug: false,
    }]
  ],

  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()
      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles/app.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#716040',
          accent: '#f25042',
          secondary: '#eaddcf',
          info: colors.teal.lighten1,
          warning: '#fbbc04',
          error: colors.deepOrange.accent4,
          success: '#0f9d58'
        }
      },
      options: {
        customProperties: true
      }
    }
  },
  styleResources: {
    scss: ['~/assets/scss/main.scss'],
  },

  webfontloader: {
    google: {
      families: ['Noto+Sans+JP:100,300,400,500,700,900', 'Noto+Sans+Mono:100,300,400,500,700,900']
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
