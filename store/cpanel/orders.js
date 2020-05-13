// store для хранения заказов из базы данных

export const state = () => ({
  ordersList: [], // Все заказы
})

export const actions = {
  // Получение всех заказов
  async getAllOrders({ commit }) {
    try {
      const orders = await this.$axios.$get('/api/order/getall')
      commit('SET_ORDERS_LIST', orders)
    } catch (error) {
      console.error('[ХРАНИЛИЩЕ] Ошибка получения заказов\n' + '[ИНФО]\n' + error.response.data.message + '\n[КОД]\n' + error)
      return error.response.data.message
    }
  },

  // Обновление заказа
  async updateOrder({ dispatch }, order) {
    try {
      await this.$axios.$put('/api/order/update/' + order.get('_id'), order)
      await dispatch('getAllOrders')
    } catch (error) {
      console.error('[ХРАНИЛИЩЕ] Ошибка обновления заказа\n' + '[ИНФО]\n' + error.response.data.message + '\n[КОД]\n' + error)
      return error.response.data.message
    }
  },

  // Добавление заказа
  async addOrder({ dispatch }, order) {
    try {
      await this.$axios.$post('/api/order/create', order)
      await dispatch('getAllOrders')
    } catch (error) {
      console.error('[ХРАНИЛИЩЕ] Ошибка добавления заказа\n' + '[ИНФО]\n' + error.response.data.message + '\n[КОД]\n' + error)
      return error.response.data.message
    }
  },
}

export const mutations = {
  // Заполнение state.ordersList
  SET_ORDERS_LIST(state, orders) {
    state.ordersList = orders
  },
}

export const getters = {
  // Кэширование и возврат для вызова в ***.vue
  ordersList: (state) => state.ordersList,
}
