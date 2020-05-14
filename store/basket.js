// store для хранения продуктов в корзине

export const state = () => ({
  basketProducts: [], // Продукты в корзине
  basketProductsPrice: 0, // Общая цена продуктов
})

export const mutations = {
  // Добавляем в массив элементы
  add(state, item) {
    state.basketProducts.push(item)
    state.basketProductsPrice += item.price * item.count

    console.log('[ХРАНИЛИЩЕ] Добавлен продукт в корзину ' + item.title + '(' + item._id + ')' + ', общая сумма продуктов: ' + state.basketProductsPrice)
  },
  // Очищаем массив
  clear(state) {
    state.basketProducts = []
    state.basketProductsPrice = 0
    localStorage.removeItem('basketProducts')
    localStorage.removeItem('basketProductsPrice')
    console.log('[ХРАНИЛИЩЕ] Корзина очищена')
  },
  // Грузим корзину из cookies
  loadBasket(state) {
    // console.log(state.basketProducts)
    // console.log(state.basketProductsPrice)
    console.log('[ХРАНИЛИЩЕ] Загружено cookies корзины')
  },
}

export const getters = {
  // Кэширование и возврат для вызова в ***.vue
  basketProducts: (state) => state.basketProducts,
  basketProductsPrice: (state) => state.basketProductsPrice,
}
