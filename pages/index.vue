<template>
  <!-- choice-start -->
  <section class="container">
    <div class="row mb-30">
      <div class="col-12">
        <h2 class="mainTitle">Товары</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-4 mb-40" v-for="(product, idx) in products" :key="idx">
        <nuxt-link to="/product" class="choice">
          <img class="img-fluid choiceImg" src="~assets/img/products/product.png" alt="product" />
          <h4 class="choiceTitle">#{{ idx }} {{ product.title }}</h4>
          <a class="btn choiceBtn">Подробнее</a>
        </nuxt-link>
      </div>
    </div>
  </section>
  <!-- choice-end -->
</template>

<script>
export default {
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    this.getAll()
  },
  methods: {
    async getAll() {
      try {
        this.products = await this.$axios.$get('/api/product/getall')
      } catch (e) {
        console.error('не удалось получить список товаров', e)
      }
    },
  },
}
</script>
