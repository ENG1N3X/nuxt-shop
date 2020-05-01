<template>
  <!-- choice -->
  <section class="container">
    <div class="row mb-30">
      <div class="col-12">
        <h2 class="mainTitle">Товары</h2>
      </div>
    </div>
    <div v-if="products != 0" class="row justify-content-center">
      <div class="col-4 mb-40" v-for="(product, idx) in products" :key="idx">
        <nuxt-link :to="`/product/${product._id}`" class="choice">
          <img class="img-fluid" :src="product.image" :alt="product.title" />
          <h2 class="choiceTitle">{{ product.title }}</h2>
          <h5 class="color-545">{{ product.price }} руб.</h5>
          <button class="btn btn-green-black">Подробнее</button>
        </nuxt-link>
      </div>
    </div>
    <div v-else class="row">
      <div class="col-12">
        <p class="text-center choiceStatus">В данный момент нет товаров в магазине</p>
      </div>
    </div>
  </section>
  <!-- //choice -->
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters['products/productsList']
    },
  },
  async fetch({ store }) {
    try {
      if (store.getters['products/productsList'].length === 0) {
        await store.dispatch('products/getAllProducts')
        console.log('[INDEX.VUE] Вызван fetch получения продуктов')
      }
    } catch (error) {
      console.error('[INDEX.VUE] Ошибка получения', error)
    }
  },
}
</script>
