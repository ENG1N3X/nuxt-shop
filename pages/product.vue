<template>
  <div>
    <!-- product-start -->
    <section class="container">
      <div class="row mb-30">
        <div class="col-12">
          <h1 class="mainTitle">Описание товара</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <app-product></app-product>
        </div>
        <div class="offset-10 col-2">
          <button class="btn buyBtn">В корзину</button>
        </div>
      </div>
    </section>
    <!-- product-end -->
  </div>
</template>

<script>
import AppProduct from '~/components/product.vue'
export default {
  components: {
    AppProduct,
  },
}
</script>
