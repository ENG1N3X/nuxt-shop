require('dotenv').config()
const path = require('path')
const fs = require('fs')
// import path from 'path'
// import fs from 'fs'

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
    '@nuxtjs/proxy',
    // Doc: https://auth.nuxtjs.org/
    '@nuxtjs/auth',
  ],
  /*
   ** https://axios.nuxtjs.org/options
   */
  axios: {
    // baseURL: process.env.BASE_URL || 'http://localhost:3000',
    proxy: true,
    https: true,
  },
  proxy: {
    '/api/': { target: process.env.BASE_URL || 'https://localhost:3000', pathRewrite: { '^/api/': '' }, changeOrigin: true },
  },
  /*
   ** Server configuration
   */
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.crt')),
    },
  },
  /*
   ** Auth configuration
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/auth/checkAuth', method: 'post', propertyName: 'data' },
          user: false,
          logout: false,
        },
      },
    },
    redirect: {
      login: '/cpanel/auth',
      logout: '/', // this.$auth.logout()
      callback: '/cpanel/auth',
      home: '/cpanel/products', // path after login
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
      }
    },
  },
}
