export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    await commit('basket/loadBasket')
  },
}
