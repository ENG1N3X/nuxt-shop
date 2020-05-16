// store для хранения продуктов в корзине

export const state = () => ({
  basketProducts: [], // Продукты в корзине
  basketProductsTotal: 0, // Общая цена продуктов
})

export const mutations = {
  // Добавляем в массив элементы
  add(state, item) {
    if (state.basketProducts.length) {
      let isItemExits = false
      state.basketProducts.forEach((basketProduct) => {
        if (basketProduct._id === item._id) {
          isItemExits = true
          basketProduct.count += item.count
        }
      })
      if (!isItemExits) {
        state.basketProducts.push(item)
      }
    } else {
      state.basketProducts.push(item)
    }

    state.basketProductsTotal = state.basketProducts.reduce((total, basketProduct) => total + basketProduct.price * basketProduct.count, 0)

    console.log('[ХРАНИЛИЩЕ] Добавлен продукт в корзину ' + item.title + '(' + item._id + ')' + ', общая сумма продуктов: ' + state.basketProductsTotal)
  },
  // Очищаем массив
  clear(state) {
    state.basketProducts = []
    state.basketProductsTotal = 0
    console.log('[ХРАНИЛИЩЕ] Корзина и cookies корзины очищены')
  },
  // Грузим корзину из cookies
  loadBasket(state) {
    // console.log('[ХРАНИЛИЩЕ] Загружено cookies корзины')
  },
}

export const getters = {
  // Кэширование и возврат для вызова в ***.vue
  basketProducts: (state) => state.basketProducts,
  basketProductsTotal: (state) => state.basketProductsTotal,
}
