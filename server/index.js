/** 
 * Классический конфик накста
 */
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const config = require('../nuxt.config.js')
// express я перенес сюда, теперь вся логика работы с сервером из одной точки
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
  // пожалуй только эту строчку я поменял, чтобы сообщение о готовности сервера
  // отрабатывало ПОСЛЕ готовности сервера
  app.listen(port, host, () => {
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true
    })
  })
}
start()