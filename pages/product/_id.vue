<template>
  <!-- product-start -->
  <section class="container">
    <div class="row mb-30">
      <div class="col-12">
        <h1 class="mainTitle">Описание товара</h1>
      </div>
    </div>
    <div class="row align-items-center product">
      <div class="col-10">
        <h2 class="productTitle">{{ product.title }}</h2>
      </div>
      <div class="col-2">
        <button class="btn buyBtn">В корзину</button>
      </div>
      <div class="col-6 text-center">
        <img class="img-fluid" :src="`../../${product.image}`" :alt="product.title" />
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-6 text-center">
            <p class="productPrice">{{ product.price }}</p>
          </div>
          <div class="col-6 text-center">
            <p class="productCount">{{ product.count }}</p>
          </div>
        </div>
        <div class="row">
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
}
</script>
