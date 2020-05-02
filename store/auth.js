// store для хранения авторизированного пользователя

export const state = () => ({
  // авторизированный пользователь
  userAuth: {
    name: null,
    login: null,
    logged: false,
  },
})

export const actions = {
  // Получение данных пользователя
  setUserData({ commit }, userData) {
    console.log(userData)
    commit('SET_USER_DATA', userData)
  },
}

export const mutations = {
  // Заполнение state.userAuth
  SET_USER_DATA(state, user) {
    state.userAuth = user
  },
}

export const getters = {
  // Кэширование и возврат для вызова в ***.vue
  userAuth: (state) => state.userAuth,
}
