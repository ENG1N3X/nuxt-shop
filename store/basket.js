// store для хранения продуктов в корзине

export const state = () => ({
  basketProducts: [], // Продукты в корзине
})

export const mutations = {
  // Добавляем в массив элементы
  add(state, item) {
    state.basketProducts.push(item)
    console.log('[ХРАНИЛИЩЕ] Добавлен продукт в корзину', item)
  },
  // Очищаем массив
  clear(state) {
    state.basketProducts = []
    console.log('[ХРАНИЛИЩЕ] Корзина очищена')
  },
}

export const getters = {
  // Кэширование и возврат для вызова в ***.vue
  basketProducts: (state) => state.basketProducts,
}
