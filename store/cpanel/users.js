// store для хранения пользователей из базы данных

export const state = () => ({
  usersList: [], // Все пользователи
})

export const actions = {
  // Получение всех пользователей
  async getAllUsers({ commit }) {
    try {
      const users = await this.$axios.$get('/api/user/getall')
      commit('SET_USERS_LIST', users)
    } catch (error) {
      console.error('[ХРАНИЛИЩЕ] Ошибка получения пользователей\n' + '[ИНФО]\n' + error.response.data.message + '\n[КОД]\n' + error)
    }
  },

  // Обновление пользователей
  async updateUser({ dispatch }, user) {
    try {
      await this.$axios.$put('/api/user/update/' + user._id, user)
      await dispatch('getAllUsers')
    } catch (error) {
      console.error('[ХРАНИЛИЩЕ] Ошибка обновления пользователя\n' + '[ИНФО]\n' + error.response.data.message + '\n[КОД]\n' + error)
      return error.response.data.message
    }
  },

  // Добавление пользователя
  async addUser({ dispatch }, user) {
    try {
      await this.$axios.$post('/api/user/create', user)
      await dispatch('getAllUsers')
    } catch (error) {
      console.error('[ХРАНИЛИЩЕ] Ошибка добавления пользователя\n' + '[ИНФО]\n' + error.response.data.message + '\n[КОД]\n' + error)
      return error.response.data.message
    }
  },
}

export const mutations = {
  // Заполнение state.usersList
  SET_USERS_LIST(state, users) {
    state.usersList = users
  },
}

export const getters = {
  // Кэширование и возврат для вызова в ***.vue
  usersList: (state) => state.usersList,
}
