const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const https = require('https')

const config = require('../nuxt.config.js')

const app = require('./app')

config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(nuxt.render)

  // http server
  // app.listen(port, host, () => {
  //   consola.ready({
  //     message: `Server listening on http://${host}:${port}`,
  //     badge: true,
  //   })
  // })

  // https server
  https.createServer(nuxt.options.server.https, app).listen(port, host, () => {
    consola.ready({
      message: `Server listening on https://${host}:${port}`,
      badge: true,
    })
  })
}
start()
