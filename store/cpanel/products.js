// store для хранения продуктов из базы данных

export const state = () => ({
  productsList: [], // Все продукты
})

export const actions = {
  // Получение всех продуктов
  async getAllProducts({ commit }) {
    try {
      const products = await this.$axios.$get('/api/product/getall')
      commit('SET_PRODUCTS_LIST', products)
    } catch (error) {
      console.error('[ХРАНИЛИЩЕ] Ошибка получения продуктов', error)
    }
  },

  // Обновление продукта
  async updateProduct({ dispatch }, product) {
    try {
      await this.$axios.$put('/api/product/update/' + product.get('_id'), product)
      await dispatch('getAllProducts')
    } catch (error) {
      console.error('[ХРАНИЛИЩЕ] Ошибка обновления продукта', error)
    }
  },

  // Добавление продукта
  async addProduct({ dispatch }, product) {
    try {
      await this.$axios.$post('/api/product/create', product)
      await dispatch('getAllProducts')
    } catch (error) {
      console.error('[ХРАНИЛИЩЕ] Ошибка добавления продукта', error)
    }
  },
}

export const mutations = {
  // Заполнение state.productList
  SET_PRODUCTS_LIST(state, products) {
    state.productsList = products
  },
}

export const getters = {
  // Кэширование и возврат для вызова в ***.vue
  productsList: (state) => state.productsList,
}
