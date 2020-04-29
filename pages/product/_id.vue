<template>
  <!-- product-start -->
  <section class="container">
    <div class="row mb-30">
      <div class="col-12">
        <h1 class="mainTitle">Описание товара</h1>
      </div>
    </div>
    <div class="row mb-30">
      <div class="offset-10 col-2">
        <button class="btn buyBtn" @click="addToBasket(product)">В корзину</button>
      </div>
    </div>
    <div class="row align-items-center product">
      <div class="col-6">
        <img class="img-fluid" :src="`../../${product.image}`" :alt="product.title" />
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
  </section>
  <!-- product-end -->
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    try {
      const product = await $axios.get('/api/product/get/' + params.id)
      return { product: product.data }
    } catch (e) {
      console.error('e', e)
    }
  },
  methods: {
    // Метод для отправки продукта в store/product.js
    addToBasket(item) {
      this.$store.commit('product/add', item)
    },
  },
}
</script>
