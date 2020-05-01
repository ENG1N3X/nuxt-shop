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
      console.error('[ХРАНИЛИЩЕ] Ошибка получения', error)
    }
  },

  // Обновление продукта
  async updateProduct({ commit }, product) {
    try {
      await this.$axios.$put('/api/product/update/' + product._id, product)
    } catch (error) {
      console.error('[ХРАНИЛИЩЕ] Ошибка обновления', error)
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
