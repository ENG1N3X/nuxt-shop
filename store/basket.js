// store для хранения продуктов в корзине

export const state = () => ({
  basketProducts: [], // Продукты в корзине
})

export const mutations = {
  // Добавляем в массив элементы
  add(state, item) {
    state.basketProducts.push(item)
    console.log('Добавлен продукт', item)
  },
  // Очищаем массив
  clear(state) {
    state.basketProducts = []
    console.log('Корзина очищена')
  },
}
