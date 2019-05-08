import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "mriduava",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Simple online store' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato|Raleway' },
      { rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['storyblok-nuxt', {accessToken: 'vzwC59CqmD9irvJTGSQVKAtt', cacheProvider: 'memory'}],

    // '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    ['bootstrap-vue/nuxt']
  ],



  axios: {
    // proxyHeaders: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
