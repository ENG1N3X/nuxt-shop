<template>
  <!-- basket-start -->
  <section class="container">
    <div class="row mb-30">
      <div class="col-12">
        <h2 class="mainTitle">Корзина</h2>
      </div>
    </div>
    <div class="row mb-30" v-if="products != 0">
      <div class="col-8">
        <h3 class="d-flex">
          Итого:
          <div class="pl-10 color-545">{{ sumProductPrice() }} рублей</div>
        </h3>
      </div>
      <div class="col-2">
        <button class="btn btn-yellow-white w-100" @click="clearBasket">Очистить</button>
      </div>
      <div class="col-2">
        <button class="btn btn-green-white w-100">Оплатить</button>
      </div>
      <div class="col-12 mt-30">
        <div class="row mb-30 pt-2 pb-2 bg-6f6 rounded mb-20" v-for="(product, idx) in products" :key="idx">
          <div class="col-6">
            <img :src="product.image" :alt="product.title" />
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-6">
                <p class="productPrice">
                  Цена:<br />
                  {{ product.price }}
                </p>
              </div>
              <div class="col-6">
                <p class="productCount">
                  Количество:<br />
                  {{ product.count }}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <h2 class="productTitle">{{ product.title }}</h2>
              </div>
              <div class="col-12">
                <p class="productDesc">
                  {{ product.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-12">
        <h4 class="mb-0 color-545">В коризне пусто</h4>
      </div>
    </div>
  </section>
  <!-- basket-end -->
</template>

<script>
export default {
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    getProducts() {
      // Получаем продукты из store/product.js
      this.products = this.$store.state.product.list
      return this.products
    },
    sumProductPrice() {
      // Подсчитываем общую цену за все продукты
      let productPrice = 0
      this.products.forEach((product) => {
        productPrice += parseInt(product.price)
      })
      return productPrice
    },
    // Метод store/product.js от продуктов
    clearBasket() {
      this.$store.commit('product/clear')
      this.getProducts()
    },
  },
}
</script>
