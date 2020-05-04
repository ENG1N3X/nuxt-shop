<template>
  <!-- choice -->
  <section class="container">
    <div class="row mb-30">
      <div class="col-12">
        <h2 class="mainTitle">Товары</h2>
      </div>
    </div>
    <div v-if="productsComputed != 0" class="row justify-content-center">
      <div class="col-4 mb-40" v-for="(product, idx) in displayedProducts" :key="idx">
        <nuxt-link :to="`/product/${product._id}`" class="choice">
          <img class="img-fluid" :src="product.image" :alt="product.title" />
          <h2 class="choiceTitle">{{ product.title }}</h2>
          <h5 class="color-545">{{ product.price }} руб.</h5>
          <button class="btn btn-green-black">Подробнее</button>
        </nuxt-link>
      </div>
      <div class="col-12 text-center">
        <div class="btn-group">
          <button type="button" class="btn btn-outline-dark" v-if="page != 1" @click="page--"><i class="fa fa-angle-double-left"></i></button>
          <button type="button" class="btn btn-outline-secondary" v-for="(pageNumber, idx) in pages.slice(page - 1, page + 1)" :key="idx" @click="page = pageNumber">{{ pageNumber }}</button>
          <button type="button" class="btn btn-outline-secondary" v-if="page < pages.length" @click="page++"><i class="fa fa-angle-double-right"></i></button>
        </div>
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
  data() {
    return {
      products: [],
      page: 1,
      perPage: 2,
      pages: [],
    }
  },
  computed: {
    productsComputed() {
      this.products = this.$store.getters['cpanel/products/productsList']
      return this.products
    },
    displayedProducts() {
      return this.paginate(this.products)
    },
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.products.length / this.perPage)
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index)
      }
    },
    paginate(products) {
      let page = this.page
      let perPage = this.perPage
      let from = page * perPage - perPage
      let to = page * perPage
      return products.slice(from, to)
    },
  },
  watch: {
    products() {
      this.setPages()
    },
  },
  async fetch({ store }) {
    try {
      if (store.getters['cpanel/products/productsList'].length === 0) {
        await store.dispatch('cpanel/products/getAllProducts')
        console.log('[INDEX.VUE] Вызван fetch получения продуктов')
      }
    } catch (error) {
      console.error('[INDEX.VUE] Ошибка получения', error)
    }
  },
}
</script>
