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
        <nuxt-link :to="`/product/${product._id}`" class="choice">
          <img class="img-fluid" :src="product.image" :alt="product.title" />
          <h4 class="choiceTitle">{{ product.title }}</h4>
          <button class="btn choiceBtn">Подробнее</button>
        </nuxt-link>
      </div>
    </div>
    <p v-if="products == 0" class="text-center choiceStatus">В данный момент нет товаров в магазине</p>
  </section>
  <!-- choice-end -->
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const products = await $axios.get('/api/product/getall')
      return { products: products.data }
    } catch (e) {
      console.error('Ошибка загрузки продуктов: ', e)
    }
  },
}
</script>
