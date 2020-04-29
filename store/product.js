// store для хранения продуктов

export const state = () => ({
  list: [],
})

export const mutations = {
  // Добавляем в массив элементы
  add(state, item) {
    state.list.push(item)
  },
  // Очищаем массив
  clear(state) {
    state.list = []
  },
}
