module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Customize router
   */
  router: {
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-active',
    // middleware: ['auth'],
  },
  /*
   ** Global CSS
   */
  css: ['~assets/sass/styles.sass', 'font-awesome/css/font-awesome.min.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vue-notification.js', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/
    '@nuxtjs/axios',
    // Doc: https://auth.nuxtjs.org/
    '@nuxtjs/auth',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
  },
  /*
   ** Auth configuration
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/cpanel/products', method: 'post', propertyName: 'token' },
          logout: false,
          user: { url: '/cpanel/products', method: 'get', propertyName: 'data' },
        },
      },
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
